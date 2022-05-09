package com.DigitalBookingBackEnd.service.impl;

import com.DigitalBookingBackEnd.config.SpringConfig;
import com.DigitalBookingBackEnd.dto.CategoryDTO;
import com.DigitalBookingBackEnd.dto.CityDTO;
import com.DigitalBookingBackEnd.exceptions.BadRequestException;
import com.DigitalBookingBackEnd.exceptions.ResourceNotFoundException;
import com.DigitalBookingBackEnd.persistence.model.Category;
import com.DigitalBookingBackEnd.persistence.model.City;
import com.DigitalBookingBackEnd.persistence.repository.CityRepository;
import com.DigitalBookingBackEnd.service.interfaces.CityServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CityService implements CityServiceInterface {

    @Autowired
    private CityRepository cityRepository;

    @Autowired
    SpringConfig mapper;

    @Override
    public Collection<CityDTO> getAll() throws ResourceNotFoundException {
        Set<CityDTO> response = new HashSet();
        List<City> cityList = cityRepository.findAll();

        if(cityList.size() == 0) {
            throw new ResourceNotFoundException("No hay ciudades cargadas aún.");
        } else {
            for (City city: cityList) {
                response.add(mapper.getModelMapper().map(city, CityDTO.class));
            }
        }
        return response;
    }


    @Override
    public CityDTO insert(CityDTO cityDTO) throws Exception {
        if (cityDTO != null){
            cityDTO.setId(saveCity(cityDTO).getId());
        } else {
            throw new BadRequestException(String.format("Ha ocurrido un error al crear la ciudad."));
        }
        return cityDTO;
    }

    @Override
    public String update(CityDTO entidad) throws Exception {
        return null;
    }

    @Override
    public String delete(Integer id) throws Exception {
        return null;
    }

    private City saveCity(CityDTO city) {
        City newCity = mapper.getModelMapper().map(city, City.class);
        return cityRepository.save(newCity);
    }


    // AGREGO UN BUSCAR CIUDAD POR ID PARA REUTILIZAR DESDE EL SERVICE DE ALOJAMIENTOS

    public CityDTO findCityById(Integer id) throws ResourceNotFoundException {
        City city = cityRepository.findById(id).orElse(null);
        if (city != null){
            return mapper.getModelMapper().map(city, CityDTO.class);
        } else {
            throw new ResourceNotFoundException ("No fue encontrada la ciudad con id " + id);
        }
    }
}
