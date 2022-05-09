package com.DigitalBookingBackEnd.controller.impl;

import com.DigitalBookingBackEnd.dto.BookingDTO;
import com.DigitalBookingBackEnd.dto.CharacteristicDTO;
import com.DigitalBookingBackEnd.dto.ScoreDTO;
import com.DigitalBookingBackEnd.exceptions.BadRequestException;
import com.DigitalBookingBackEnd.exceptions.ResourceNotFoundException;
import com.DigitalBookingBackEnd.persistence.model.Score;
import com.DigitalBookingBackEnd.service.impl.ScoreService;
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
@RequestMapping("/puntuaciones")
public class ScoreController {
    private final static Logger logger = Logger.getLogger(AccommodationController.class);

    @Autowired
    ScoreService service;

    @ApiOperation(value = "ESP: Generar una nueva puntuación en la base de datos.\nEN: Score.")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success | OK"),
            @ApiResponse(code = 500, message = "Internal Server Error"),
            @ApiResponse(code = 404, message = "Not Found") })
    @PostMapping("/crear")
    public ResponseEntity<?> create(@RequestBody ScoreDTO scoreDTO) throws ResourceNotFoundException, BadRequestException {
        logger.info("Generando una nueva puntuación en la base de datos.");
        ScoreDTO response = service.newScore(scoreDTO);
        logger.info("Puntuación " + response.toString() + " fue generada con exito.");

        return ResponseEntity.ok(response);
    }

    @ApiOperation(value = "ESP: Obtiene las puntuaciones de la base de datos por el id del alojamiento.\nEN: Gets scores by accommodationId.")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success | OK"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 400, message = "Bad Request") })
    @GetMapping("/alojamientos/{id}")
    public ResponseEntity<?> getScoresByAccommodationId(@PathVariable Integer id) throws ResourceNotFoundException, BadRequestException {
        logger.info("Buscando la reserva en la base de datos.");
        List<ScoreDTO> response = service.getScoresByAccommodationId(id);
        if(response.isEmpty()) {
            logger.debug("No se encontraron puntuaciones para el alojamiento seleccionado");
        }else {
            logger.debug(String.format("Se encontraron %s puntuaciones para el alojamiento seleccionado", response.size()));
        }
        return ResponseEntity.ok(response);
    }

    @ApiOperation(value = "ESP: Busca todas las puntuaciones. \nEN: Gets all scores.")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success | OK"),
            @ApiResponse(code = 400, message = "Bad Request") })
    @GetMapping("/todos")
    public ResponseEntity<?> getAll() throws ResourceNotFoundException {
        logger.info("Buscando los alojamientos en la base de datos.");
        List<ScoreDTO> response = service.getAll();

        return ResponseEntity.ok(response);
    }
}
