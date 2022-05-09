package com.DigitalBookingBackEnd.service.interfaces;

import com.DigitalBookingBackEnd.dto.CityDTO;
import com.DigitalBookingBackEnd.exceptions.ResourceNotFoundException;

import java.util.Collection;

public interface ServiceInterface<E> {
    E insert(E entidad) throws Exception;
    Collection<E> getAll() throws Exception;
    String update(E entidad) throws Exception;
    String delete(Integer id) throws Exception;
}
