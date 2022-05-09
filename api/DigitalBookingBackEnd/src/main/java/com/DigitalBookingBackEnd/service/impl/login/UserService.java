package com.DigitalBookingBackEnd.service.impl.login;

import com.DigitalBookingBackEnd.config.SpringConfig;
import com.DigitalBookingBackEnd.dto.AccommodationDTO;
import com.DigitalBookingBackEnd.dto.login.RoleDTO;
import com.DigitalBookingBackEnd.dto.login.UserDTO;
import com.DigitalBookingBackEnd.exceptions.BadRequestException;
import com.DigitalBookingBackEnd.exceptions.ResourceNotFoundException;
import com.DigitalBookingBackEnd.persistence.model.Accommodation;
import com.DigitalBookingBackEnd.persistence.model.login.User;
import com.DigitalBookingBackEnd.persistence.repository.login.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    UserRepository repository;

    @Autowired
    RoleService roleService;

    @Autowired
    SpringConfig mapper;

    @Autowired
    BCryptPasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {

        User user = repository.findByEmail(userName).orElseThrow((() -> new UsernameNotFoundException("User email not found")));
        return user;
    }

    public UserDTO newUser(UserDTO userDTO) throws BadRequestException, ResourceNotFoundException {
        UserDTO response;
        if (this.userExists(userDTO.getId())){
            throw new BadRequestException("El usuario con id " + userDTO.getId() + " ya existe en la base de datos");
        }
        else if (userDTO == null){
            throw new BadRequestException("Ha ocurrido un error al intentar crear un usuario.");
        }
        else if(userDTO.getRole().getId() == null){
            throw new BadRequestException("Falta introducir el id del rol que tendrá el usuario");
        }
        else if(userDTO.getEmail()==null){
            throw new BadRequestException("Verificar que se haya introducido un email");
        }
        else if(repository.findByEmail(userDTO.getEmail()).orElse(null)!=null){
            throw new BadRequestException("El email ya se encuentra registrado");
        }

        // TRABAJANDO CON LA CLASE USER:

        //Mappeo el usuarioDTO obtenido por parámetro a la clase User
        User user = mapper.getModelMapper().map(userDTO, User.class);
        // Encripto la contraseña
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String hashedPassword = passwordEncoder.encode(user.getPassword()); //Genera el password encriptado
        user.setPassword(hashedPassword);
        //Seteo como userName al email del usuario


        //Creo la respuesta mappeandola a DTO
        response = mapper.getModelMapper().map(repository.save(user), UserDTO.class);


        // TRABAJANDO CON EL ROL DEL USUARIO

        //Busco en la base de datos el rol del usuario para luego insertarlo en la respuesta
        RoleDTO searchedRole = roleService.findRoleById(userDTO.getRole().getId());
        //Seteo el rol del usuario
        response.setRole(searchedRole);

        return response;
    }

    public UserDTO getUserByUsername(UserDTO userDTO) throws ResourceNotFoundException, BadRequestException {
        if (userDTO.getEmail() == null || userDTO.getEmail()==""){
            throw new ResourceNotFoundException("Falta el email del usuario");
        }

        List<User> userList = mapper.getModelMapper().map(repository.findAll(), List.class);
        if (userList.size() == 0){
            throw new ResourceNotFoundException("No hay usuarios en la base de datos");
        }
        for (User u: userList){
            if (userDTO.getEmail().equals(u.getEmail())){
                if (passwordEncoder.matches(userDTO.getPassword(), u.getPassword())){
                    return mapper.getModelMapper().map(u, UserDTO.class);
                } else {
                    throw new ResourceNotFoundException("La contraseña ingresada no es válida");
                }
            }
        }
        throw new BadRequestException("No se ha encontrado un usuario con el email " + userDTO.getEmail());



        /*if (userDTO.getEmail() == null || userDTO.getEmail()==""){
            throw new ResourceNotFoundException("Falta el email del usuario");
        }
        User user = mapper.getModelMapper().map(userDTO, User.class);
        User userSearched = repository.findByEmail(user.getEmail()).get();
//        passwordEncoder.matches()
//        System.out.println("CONTRASEÑA DEL USUARIO BUSCADO: ");
//        System.out.println(userSearched.getPassword());
//        System.out.println("CONTRASEÑA DEL USUARIO TRAÍDO DEL FRONT: ");
//        System.out.println(userDTO.getPassword());
//        String passwordDecoded = passwordEncoder.encode(userDTO.getPassword());
//        System.out.println("CONTRA ENCRIPTADA DEL USUARIO TRAÍDO DEL FRONT: : ");
//        System.out.println(passwordEncoded);

//        System.out.println("CONTRA DEL USUARIO TRAÍDO DEL FRONT: : ");
//        System.out.println(user.getPassword());
//
//        if (passwordEncoder.matches(userSearched.getPassword(), user.getPassword())){
//            return mapper.getModelMapper().map(userSearched, UserDTO.class);
//        } else {
//            throw new BadRequestException("La contraseña es inválida");
//        }
        System.out.println("Las contraseñas son iguales?");
        System.out.println(passwordEncoder.matches(userSearched.getPassword(), user.getPassword()));
        return mapper.getModelMapper().map(userSearched, UserDTO.class);*/

    }


    public Boolean userExists (Integer id){
        List<User> list = repository.findAll();
        for (User u: list){
            if (u.getId().equals(id)){
                return true;
            }
        }
        return false;
    }

    public List<UserDTO> getAll() throws ResourceNotFoundException {
        List<UserDTO> userDTOList = new ArrayList<>();

        List<User> userList = mapper.getModelMapper().map(repository.findAll(), List.class);
        if (userList.size() == 0){
            throw new ResourceNotFoundException("No hay usuarios en la base de datos");
        }
        for (User u: userList){
            userDTOList.add(mapper.getModelMapper().map(u,UserDTO.class));
        }

        return userDTOList;
    }

    public UserDTO getUserById(Integer id) throws ResourceNotFoundException,BadRequestException {
        // Obtenemos el alojamiento mediante el repositorio JPA
        Optional<User> user = Optional.ofNullable(repository.findById(id).orElse(null));

        if (user == null)
            throw new ResourceNotFoundException ("No fue encontrada el alojamiento con id " + id);

        //Lo mappeamos a DTO
        UserDTO userDTO = mapper.getModelMapper().map(user.get(), UserDTO.class);

        return userDTO;
    }
}
