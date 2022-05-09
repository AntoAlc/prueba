package com.DigitalBookingBackEnd.service.impl;

import com.DigitalBookingBackEnd.config.SpringConfig;
import com.DigitalBookingBackEnd.dto.AccommodationDTO;
import com.DigitalBookingBackEnd.dto.ScoreDTO;
import com.DigitalBookingBackEnd.dto.login.UserDTO;
import com.DigitalBookingBackEnd.exceptions.BadRequestException;
import com.DigitalBookingBackEnd.exceptions.ResourceNotFoundException;
import com.DigitalBookingBackEnd.persistence.model.Booking;
import com.DigitalBookingBackEnd.persistence.model.Score;
import com.DigitalBookingBackEnd.persistence.repository.ScoreRepository;
import com.DigitalBookingBackEnd.service.impl.login.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ScoreService {

    @Autowired
    ScoreRepository repository;

    @Autowired
    AccommodationService accommodationService;

    @Autowired
    UserService userService;

    @Autowired
    SpringConfig mapper;


    public ScoreDTO newScore (ScoreDTO scoreDTO) throws ResourceNotFoundException, BadRequestException {
        if (scoreExists(scoreDTO)){
            throw new ResourceNotFoundException("El usuario con id "+ scoreDTO.getUser().getId() + " ya ha puntuado al alojamiento con id " + scoreDTO.getAccommodation().getId());
        }
        ScoreDTO response;

        // Buscamos el alojamiento y usuario en la BDD
        AccommodationDTO searchedAccommodation = accommodationService.getAccommodationById(scoreDTO.getAccommodation().getId());
        UserDTO searchedUser = userService.getUserById(scoreDTO.getUser().getId());

        //Guardamos el alojamiento en la bdd
        Score newScore = repository.save(mapper.getModelMapper().map(scoreDTO, Score.class));
        response = mapper.getModelMapper().map(newScore, ScoreDTO.class);

        //Seteamos el alojamiento y usuarios en la respuesta
        response.setAccommodation(searchedAccommodation);
        response.setUser(searchedUser);

        return response;
    }

    public Boolean scoreExists (ScoreDTO scoreDTO) {
        List<ScoreDTO> scores = this.getAll();
        for (ScoreDTO s: scores){
            if (s.getAccommodation().getId().equals(scoreDTO.getAccommodation().getId()) && s.getUser().getId().equals(scoreDTO.getUser().getId())){
                return true;
            }
        }
        return false;
    }

    public List<ScoreDTO> getAll (){
        List<ScoreDTO> scoreDTOList = new ArrayList<>();
        List<Score> scores = mapper.getModelMapper().map(repository.findAll(), List.class);
        for (Score s: scores){
            scoreDTOList.add(mapper.getModelMapper().map(s, ScoreDTO.class));
        }
        return scoreDTOList;
    }

    public List<ScoreDTO> getScoresByAccommodationId (Integer id){
        List<ScoreDTO> scoreDTOListByAccommodationId = new ArrayList<>();
        List<Score> scores = mapper.getModelMapper().map(repository.findAll(), List.class);
        for (Score s: scores){
            if (s.getAccommodation().getId().equals(id)){
                scoreDTOListByAccommodationId.add(mapper.getModelMapper().map(s, ScoreDTO.class));
            }
        }
        return scoreDTOListByAccommodationId;
    }
}
