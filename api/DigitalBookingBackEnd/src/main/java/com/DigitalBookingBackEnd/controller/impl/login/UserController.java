package com.DigitalBookingBackEnd.controller.impl.login;

import com.DigitalBookingBackEnd.controller.impl.AccommodationController;
import com.DigitalBookingBackEnd.dto.AccommodationDTO;
import com.DigitalBookingBackEnd.dto.login.UserDTO;
import com.DigitalBookingBackEnd.exceptions.BadRequestException;
import com.DigitalBookingBackEnd.exceptions.ResourceNotFoundException;
import com.DigitalBookingBackEnd.persistence.model.login.User;
import com.DigitalBookingBackEnd.service.impl.login.UserService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/usuarios")
public class UserController {

    @Autowired
    UserService service;

    private final static Logger logger = Logger.getLogger(AccommodationController.class);

    @ApiOperation(value = "ESP: Crear un nuevo usuario. \nEN: Create a new user.")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success | OK"),
            @ApiResponse(code = 400, message = "Bad Request") })
    @PostMapping("/crear")
    public ResponseEntity<?> create(@RequestBody UserDTO user) throws BadRequestException, ResourceNotFoundException {
        logger.info("Ingresando el siguiente usuario a la base de datos: \n" + user.toString());
        UserDTO response = service.newUser(user);
        logger.info("Usuario " + response.toString() + " fue creado con exito.");
        return ResponseEntity.ok(response);
    }

    @ApiOperation(value = "ESP: Busca todos los usuarios. \nEN: Gets all users.")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success | OK"),
            @ApiResponse(code = 400, message = "Bad Request") })
    @GetMapping("/todos")
    public ResponseEntity<?> getAll() throws ResourceNotFoundException {
        logger.info("Buscando los usuario en la base de datos.");
        List<UserDTO> response = service.getAll();
        if(response.isEmpty()) {
            logger.debug("No se encontraron usuario");
        }else {
            logger.info(String.format("Se encontraron %s usuarios.", response.size()));
        }
        return ResponseEntity.ok(response);
    }

    @ApiOperation(value = "ESP: Obtener por email un usuario de la base de datos.\nEN: Gets a user by email.")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success | OK"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 400, message = "Bad Request") })
    @PostMapping("/obtenerUsuario")
    public ResponseEntity<?> getUserByUsername(@RequestBody UserDTO user) throws ResourceNotFoundException, BadRequestException {
        UserDTO response = service.getUserByUsername(user);
        return ResponseEntity.ok(response);
    }
}
