package com.DigitalBookingBackEnd.controller.impl;

import com.DigitalBookingBackEnd.controller.ControllerInterface;
import com.DigitalBookingBackEnd.dto.AccommodationDTO;
import com.DigitalBookingBackEnd.exceptions.BadRequestException;
import com.DigitalBookingBackEnd.exceptions.ResourceNotFoundException;
import com.DigitalBookingBackEnd.service.impl.AccommodationService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;


@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/alojamientos")
public class AccommodationController implements ControllerInterface<AccommodationDTO> {

    private final static Logger logger = Logger.getLogger(AccommodationController.class);

    @Autowired
    AccommodationService service;

    @Override
    @ApiOperation(value = "ESP: Crear un nuevo alojamiento en la base de datos.\nEN: Creates a new accommodation in the database.")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success | OK"),
            @ApiResponse(code = 400, message = "Bad Request") })
    @PostMapping("/crear")
    public ResponseEntity<?> create(@RequestBody AccommodationDTO accommodationDTO) throws BadRequestException, ResourceNotFoundException {
        logger.info("Ingresando el siguiente alojamiento a la base de datos: \n" + accommodationDTO.toString());
        AccommodationDTO response = service.insert(accommodationDTO);
        logger.info("Alojamiento " + response.toString() + " fue creado con exito.");
        return ResponseEntity.ok(response);
    }

    @Override
    @ApiOperation(value = "ESP: Busca todos los alojamientos. \nEN: Gets all accommodations.")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success | OK"),
            @ApiResponse(code = 400, message = "Bad Request") })
    @GetMapping("/todos")
    public ResponseEntity<?> getAll() throws ResourceNotFoundException {
        logger.info("Buscando los alojamientos en la base de datos.");
        List<AccommodationDTO> response = service.getAll();
        if(response.isEmpty()) {
            logger.debug("No se encontraron alojamientos");
        }else {
            logger.info(String.format("Se encontraron %s alojamientos.", response.size()));
        }
        return ResponseEntity.ok(response);
    }

    @ApiOperation(value = "ESP: Obtiene por id un alojamiento de la base de datos.\nEN: Gets a accommodation by id.")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success | OK"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 400, message = "Bad Request") })
    @GetMapping("/{id}")
    public ResponseEntity<?> getAccommodationById(@PathVariable Integer id) throws ResourceNotFoundException, BadRequestException {
        logger.info("Buscando el alojamiento en la base de datos.");
        AccommodationDTO response = service.getAccommodationById(id);
        logger.info(String.format("Se encontró el alojamiento con id %s.", response.getId()));
        return ResponseEntity.ok(response);
    }

    @Override
    @GetMapping("/categorias/{id}")
    public ResponseEntity<?> getByCategoryId(@PathVariable Integer id) throws ResourceNotFoundException {
        List<AccommodationDTO> response = service.getByCategoryId(id);
        if(response.isEmpty()) {
            logger.debug("No se encontraron alojamientos para la categoria seleccionada");
        }else {
            logger.debug("Encontrada lista de alojamientos para la categoria seleccionada");
        }
        return ResponseEntity.ok(response);
    }


    @GetMapping("/ciudades/{id}")
    public ResponseEntity<?> getByCityId(@PathVariable Integer id) throws ResourceNotFoundException {
        List<AccommodationDTO> response = service.getByCityId(id);
        logger.debug("Encontrada lista de alojamientos para la ciudad seleccionada");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/disponibles")
    public ResponseEntity<?> getByDates(@RequestParam("fromDate") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate initialDate,
                                        @RequestParam("toDate") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate finalDate) throws ResourceNotFoundException {
        List<AccommodationDTO> response = service.getByDates(initialDate, finalDate);
        logger.debug("Encontrada lista de alojamientos para la ciudad en las fechas seleccionadas");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/ciudades/{cityId}/disponibles")
    public ResponseEntity<?> getByCityBetweenDates(@PathVariable Integer cityId,
                                                  @RequestParam("fromDate") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate initialDate,
                                                  @RequestParam("toDate") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate finalDate) throws ResourceNotFoundException {
        List<AccommodationDTO> response = service.getByCityBetweenDates(cityId, initialDate, finalDate);
        logger.debug("Encontrada lista de alojamientos para la ciudad en las fechas seleccionadas");
        return ResponseEntity.ok(response);
    }

    @Override
    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> delete(@PathVariable Integer id) throws ResourceNotFoundException {
        String response = service.delete(id);
        logger.debug("Alojamiento " + id + "eliminado con exito.");
        return ResponseEntity.ok(response);
    }

    @Override
    @PutMapping("/actualizar")
    public ResponseEntity<?> update(@RequestBody AccommodationDTO accommodationDTO) throws BadRequestException, ResourceNotFoundException {
        ResponseEntity<String> response;
        if (accommodationDTO.getId() != null){
            response = ResponseEntity.ok(service.update(accommodationDTO));
        } else{
            throw new BadRequestException("Falta el id del alojamiento.");
        }
        logger.debug("Alojamiento " + accommodationDTO.getId() + "eliminado con exito.");
        return response;
    }
}
