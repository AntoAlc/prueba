package com.DigitalBookingBackEnd.service.interfaces;

import com.DigitalBookingBackEnd.dto.AccommodationDTO;

import java.util.Collection;
import java.util.List;

public interface AccommodationServiceInterface extends ServiceInterface<AccommodationDTO> {
    List<AccommodationDTO> getByCategoryId(Integer idCategory) throws Exception;
    AccommodationDTO getAccommodationById(Integer idAccommodation) throws Exception;
}
