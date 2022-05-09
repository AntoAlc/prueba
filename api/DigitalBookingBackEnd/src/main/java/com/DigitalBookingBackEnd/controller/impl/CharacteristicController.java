package com.DigitalBookingBackEnd.controller.impl;

import com.DigitalBookingBackEnd.dto.CharacteristicDTO;
import com.DigitalBookingBackEnd.exceptions.ResourceNotFoundException;
import com.DigitalBookingBackEnd.service.impl.CharacteristicService;
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
@RequestMapping("/caracteristicas")
public class CharacteristicController {

    private final static Logger logger = Logger.getLogger(AccommodationController.class);

    @Autowired
    CharacteristicService service;

    @ApiOperation(value = "ESP: Busca todas las caracteristicas. \nEN: Gets all characteristics.")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success | OK"),
            @ApiResponse(code = 400, message = "Bad Request") })
    @GetMapping("/todos")
    public ResponseEntity<?> getAll() throws ResourceNotFoundException {
        logger.info("Buscando los alojamientos en la base de datos.");
        List<CharacteristicDTO> response = service.getAll();

        return ResponseEntity.ok(response);
    }


}
