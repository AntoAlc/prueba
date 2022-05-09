package com.DigitalBookingBackEnd.controller.impl;

import com.DigitalBookingBackEnd.controller.ControllerInterface;
import com.DigitalBookingBackEnd.dto.CityDTO;
import com.DigitalBookingBackEnd.exceptions.BadRequestException;
import com.DigitalBookingBackEnd.exceptions.ResourceNotFoundException;
import com.DigitalBookingBackEnd.service.interfaces.CityServiceInterface;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/ciudades")
public class CityController implements ControllerInterface<CityDTO> {

    private final static Logger logger = Logger.getLogger(CityController.class);

    @Autowired
    private CityServiceInterface cityService;

    @Override
    @ApiOperation(value = "ESP: Busca todas las ciudades. \nEN: Gets all cities.")
    @ApiResponses(value = { @ApiResponse(code = 400, message = "Bad Request") })
    @GetMapping("/todos")
    public ResponseEntity<?> getAll() throws Exception {
        logger.info("Buscando todas las ciudades de la base de datos.");

        Collection<CityDTO> listaDeCiudades = cityService.getAll();

        logger.info(String.format("Se encontraron %s ciudades.", listaDeCiudades.size()));

        return ResponseEntity.ok(listaDeCiudades);
    }

    @Override
    @ApiOperation(value = "ESP: Ingresa una nueva Ciudad en la base de datos.\nEN: Creates a new City in the database.")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success | OK"),
            @ApiResponse(code = 400, message = "Bad Request") })
    @PostMapping("/crear")
    public ResponseEntity<?> create(CityDTO cityDto) throws Exception {
        logger.info("Ingresando la siguiente ciudad a la base de datos: \n" + cityDto.toString());

        Optional<CityDTO> city = Optional.of(cityService.insert(cityDto));

        logger.info(String.format("La ciudad fue creada con el id %s.", city.get().getId()));

        return ResponseEntity.ok(String.format("La ciudad fue creada con el id %s.", city.get().getId()));
    }

    @Override
    @ApiOperation(value = "ESP: Obtiene por id una Ciudad registrada.\nEN: Gets a City by id.")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success | OK"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 400, message = "Bad Request") })
    @GetMapping("/{id}")
    public ResponseEntity<?> getByCategoryId(Integer id) throws ResourceNotFoundException, BadRequestException {
        return null;
    }

    @Override
    @ApiOperation(value = "ESP: Elimina una Ciudad por id.\nEN: Deletes a City by id.")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success | OK"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 400, message = "Bad Request") })
    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> delete(Integer id) throws Exception {
        return null;
    }

    @Override
    @ApiOperation(value = "ESP: Actualiza por id una Ciudad registrada.\nEN: Updates a City by id.")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success | OK"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 400, message = "Bad Request") })
    @PutMapping("/actualizar")
    public ResponseEntity<?> update(CityDTO cityDto) throws BadRequestException, ResourceNotFoundException {
        return null;
    }
}
