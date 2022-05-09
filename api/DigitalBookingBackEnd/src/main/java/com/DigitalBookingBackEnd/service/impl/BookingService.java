package com.DigitalBookingBackEnd.service.impl;

import com.DigitalBookingBackEnd.config.SpringConfig;
import com.DigitalBookingBackEnd.dto.AccommodationDTO;
import com.DigitalBookingBackEnd.dto.BookingDTO;
import com.DigitalBookingBackEnd.dto.login.UserDTO;
import com.DigitalBookingBackEnd.exceptions.BadRequestException;
import com.DigitalBookingBackEnd.exceptions.ResourceNotFoundException;
import com.DigitalBookingBackEnd.persistence.model.Accommodation;
import com.DigitalBookingBackEnd.persistence.model.Booking;
import com.DigitalBookingBackEnd.persistence.repository.AccommodationRepository;
import com.DigitalBookingBackEnd.persistence.repository.BookingRepository;
import com.DigitalBookingBackEnd.service.impl.login.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BookingService {

    @Autowired
    BookingRepository repository;

    @Autowired
    AccommodationService accommodationService;

    @Autowired
    UserService userService;

    @Autowired
    SpringConfig mapper;


    public BookingDTO newBooking (BookingDTO bookingDTO) throws ResourceNotFoundException, BadRequestException {
        if (bookingDTO.getAccommodation().getId() == null){
            throw new ResourceNotFoundException("No puede crearse esta reserva. Falta el id del alojamiento a reservar");
        } else if (bookingDTO.getUser().getId() == null){
            throw new ResourceNotFoundException("No puede crearse esta reserva. Falta el id de usuario");
        }

        // Buscamos el alojamiento y usuario en la BDD
        AccommodationDTO searchedAccommodation = accommodationService.getAccommodationById(bookingDTO.getAccommodation().getId());
        UserDTO searchedUser = userService.getUserById(bookingDTO.getUser().getId());

        System.out.println("Alojamiento buscado --> " + searchedAccommodation.toString());
        System.out.println("Usuario buscado --> " + searchedUser.toString());

        //Guardamos la reserva en la bdd
        Booking newBooking = repository.save(mapper.getModelMapper().map(bookingDTO, Booking.class));
        BookingDTO response = mapper.getModelMapper().map(newBooking, BookingDTO.class);

        //Seteamos el alojamiento y usuarios en la respuesta
        response.setAccommodation(searchedAccommodation);
        response.setUser(searchedUser);

        return response;
    }


    /**
     * Buscar una forma más óptima de realizar el método getBookingsByAccommodationId() para evitar traer todas las reservas
     * de la base de datos y hacer directamente un pedido por hql. (IGUAL POR AHORA FUNCIONA ASI)
     */

    public List<BookingDTO> getBookingsByAccommodationId(Integer id) throws ResourceNotFoundException {
        List<BookingDTO> searchedBookings = new ArrayList<>();
        List<Booking> bookings = mapper.getModelMapper().map(repository.findAll(), List.class);
        for (Booking b:bookings){
            if (b.getAccommodation().getId().equals(id))
                searchedBookings.add(mapper.getModelMapper().map(b, BookingDTO.class));
        }
        return searchedBookings;
    }


}
