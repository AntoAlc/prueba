package com.DigitalBookingBackEnd.service.impl;

import com.DigitalBookingBackEnd.config.SpringConfig;
import com.DigitalBookingBackEnd.dto.AccommodationDTO;
import com.DigitalBookingBackEnd.dto.FavoriteDTO;
import com.DigitalBookingBackEnd.dto.login.UserDTO;
import com.DigitalBookingBackEnd.exceptions.BadRequestException;
import com.DigitalBookingBackEnd.exceptions.ResourceNotFoundException;
import com.DigitalBookingBackEnd.persistence.model.Favorite;
import com.DigitalBookingBackEnd.persistence.repository.FavoriteRepository;
import com.DigitalBookingBackEnd.service.impl.login.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FavoriteService {
    @Autowired
    FavoriteRepository repository;

    @Autowired
    AccommodationService accommodationService;

    @Autowired
    UserService userService;

    @Autowired
    SpringConfig mapper;

    public FavoriteDTO newFavorite(FavoriteDTO favoriteDTO) throws BadRequestException, ResourceNotFoundException {
        if (favoriteExists(favoriteDTO)){
            throw new ResourceNotFoundException("El usuario con id "+ favoriteDTO.getUser().getId() + " ya ha puntuado al alojamiento con id " + favoriteDTO.getAccommodation().getId());
        }
        FavoriteDTO response;

        // Buscamos el alojamiento y usuario en la BDD
        AccommodationDTO searchedAccommodation = accommodationService.getAccommodationById(favoriteDTO.getAccommodation().getId());
        UserDTO searchedUser = userService.getUserById(favoriteDTO.getUser().getId());

        //Guardamos el favorito en la bdd
        Favorite newFavorite = repository.save(mapper.getModelMapper().map(favoriteDTO, Favorite.class));
        response = mapper.getModelMapper().map(newFavorite, FavoriteDTO.class);

        //Seteamos el alojamiento y usuarios en la respuesta
        response.setAccommodation(searchedAccommodation);
        response.setUser(searchedUser);

        return response;
    }

    private boolean favoriteExists(FavoriteDTO favoriteDTO) {
        List<FavoriteDTO> favoriteDTOList = this.getAll();
        for (FavoriteDTO favorite: favoriteDTOList){
            if (favorite.getAccommodation().getId().equals(favoriteDTO.getAccommodation().getId()) && favorite.getUser().getId().equals(favoriteDTO.getUser().getId())){
                return true;
            }
        }
        return false;
    }

    public List<FavoriteDTO> getAll (){
        List<FavoriteDTO> favoriteDTOList = new ArrayList<>();
        List<Favorite> favorites = mapper.getModelMapper().map(repository.findAll(), List.class);
        for (Favorite favorite: favorites){
            favoriteDTOList.add(mapper.getModelMapper().map(favorite, FavoriteDTO.class));
        }
        return favoriteDTOList;
    }

    public List<AccommodationDTO> getFavoritesByUserId (Integer id) throws ResourceNotFoundException {
        List<FavoriteDTO> favoriteDTOListByUserId = new ArrayList<>();
        List<FavoriteDTO> favoriteDTOList = this.getAll();
        List<AccommodationDTO> accommodationDTOListByUserId = new ArrayList<>();
        for (FavoriteDTO f: favoriteDTOList){
            if (f.getUser().getId().equals(id)){
                favoriteDTOListByUserId.add(f);
            }
        }
        if (favoriteDTOListByUserId.size() == 0){
            throw new ResourceNotFoundException("No hay favoritos para el usuario con id " + id);
        }
        for (FavoriteDTO favoriteDTO: favoriteDTOListByUserId){
            accommodationDTOListByUserId.add(favoriteDTO.getAccommodation());
        }
        return accommodationDTOListByUserId;
    }

    public String delete(Integer id) throws ResourceNotFoundException {
        String response;
        if(repository.findById(id).isPresent()){
            repository.deleteFavoriteById(id);
            response = "Eliminado con éxito";
        } else {
            throw new ResourceNotFoundException("No se logró eliminar el alojamiento de la base de datos. El id " + id +" no fue encontrado.");
        }
        return response;
    }
}
