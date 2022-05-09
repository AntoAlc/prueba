package com.DigitalBookingBackEnd.controller.impl;

import com.DigitalBookingBackEnd.dto.AccommodationDTO;
import com.DigitalBookingBackEnd.dto.BookingDTO;
import com.DigitalBookingBackEnd.exceptions.BadRequestException;
import com.DigitalBookingBackEnd.exceptions.ResourceNotFoundException;
import com.DigitalBookingBackEnd.service.impl.BookingService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/reservas")
public class BookingController {

    private final static Logger logger = Logger.getLogger(AccommodationController.class);

    @Autowired
    BookingService service;

    @ApiOperation(value = "ESP: Crear una reserva en la base de datos.\nEN: Creates a booking.")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success | OK"),
            @ApiResponse(code = 500, message = "Internal Server Error"),
            @ApiResponse(code = 404, message = "Not Found") })
    @PostMapping("/crear")
    public ResponseEntity<?> create(@RequestBody BookingDTO bookingDTO) throws ResourceNotFoundException, BadRequestException {
        logger.info("Creando una reserva en la base de datos.");
        BookingDTO response = service.newBooking(bookingDTO);
        logger.info("Reserva " + response.toString() + " fue creada con exito.");

        return ResponseEntity.ok(response);
    }

    @ApiOperation(value = "ESP: Obtiene una reserva de la base de datos por el id del alojamiento.\nEN: Gets a booking by accommodationId.")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success | OK"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 400, message = "Bad Request") })
    @GetMapping("/alojamientos/{id}")
    public ResponseEntity<?> getBookingsByAccommodationId(@PathVariable Integer id) throws ResourceNotFoundException, BadRequestException {
        logger.info("Buscando la reserva en la base de datos.");
        List<BookingDTO> response = service.getBookingsByAccommodationId(id);
        if(response.isEmpty()) {
            logger.debug("No se encontraron reservas para el alojamiento seleccionado");
        }else {
            logger.debug(String.format("Se encontraron %s reservas para el alojamiento seleccionado", response.size()));
        }
        return ResponseEntity.ok(response);
    }

}
