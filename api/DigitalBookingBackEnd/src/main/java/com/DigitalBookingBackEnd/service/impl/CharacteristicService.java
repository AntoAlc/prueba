package com.DigitalBookingBackEnd.service.impl;

import com.DigitalBookingBackEnd.config.SpringConfig;
import com.DigitalBookingBackEnd.dto.AccommodationDTO;
import com.DigitalBookingBackEnd.dto.CategoryDTO;
import com.DigitalBookingBackEnd.dto.CharacteristicDTO;
import com.DigitalBookingBackEnd.dto.CityDTO;
import com.DigitalBookingBackEnd.exceptions.BadRequestException;
import com.DigitalBookingBackEnd.exceptions.ResourceNotFoundException;
import com.DigitalBookingBackEnd.persistence.model.Accommodation;
import com.DigitalBookingBackEnd.persistence.model.Category;
import com.DigitalBookingBackEnd.persistence.model.Characteristic;
import com.DigitalBookingBackEnd.persistence.repository.AccommodationRepository;
import com.DigitalBookingBackEnd.persistence.repository.CharacteristicRepository;
import com.DigitalBookingBackEnd.service.interfaces.AccommodationServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CharacteristicService {

    @Autowired
    CharacteristicRepository repository;

    @Autowired
    SpringConfig mapper;


    public List<CharacteristicDTO> getAll() throws ResourceNotFoundException {
        List<CharacteristicDTO> characteristicDTOList = new ArrayList<>();
        List<Characteristic> characteristicList = mapper.getModelMapper().map(repository.findAll(), List.class);;
        for (Characteristic c:characteristicList){
            characteristicDTOList.add(mapper.getModelMapper().map(c,CharacteristicDTO.class));
        }
        return characteristicDTOList;
    }

}