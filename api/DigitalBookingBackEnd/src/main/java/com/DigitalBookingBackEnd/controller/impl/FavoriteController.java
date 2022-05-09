package com.DigitalBookingBackEnd.controller.impl;

import com.DigitalBookingBackEnd.controller.impl.AccommodationController;
import com.DigitalBookingBackEnd.dto.AccommodationDTO;
import com.DigitalBookingBackEnd.dto.FavoriteDTO;
import com.DigitalBookingBackEnd.dto.ScoreDTO;
import com.DigitalBookingBackEnd.exceptions.BadRequestException;
import com.DigitalBookingBackEnd.exceptions.ResourceNotFoundException;
import com.DigitalBookingBackEnd.service.impl.FavoriteService;
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
@RequestMapping("/favoritos")
public class FavoriteController {
    private final static Logger logger = Logger.getLogger(AccommodationController.class);

    @Autowired
    FavoriteService service;

    @ApiOperation(value = "ESP: Generar un nuevo favorito en la base de datos.\nEN: Favorite.")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success | OK"),
            @ApiResponse(code = 500, message = "Internal Server Error"),
            @ApiResponse(code = 404, message = "Not Found") })
    @PostMapping("/crear")
    public ResponseEntity<?> create(@RequestBody FavoriteDTO favoriteDTO) throws ResourceNotFoundException, BadRequestException {
        logger.info("Generando un nuevo favorito en la base de datos.");
        FavoriteDTO response = service.newFavorite(favoriteDTO);
        logger.info("Favorito " + response.toString() + " fue generado con exito.");

        return ResponseEntity.ok(response);
    }

    @ApiOperation(value = "ESP: Busca todos los favoritos. \nEN: Gets all scores.")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success | OK"),
            @ApiResponse(code = 400, message = "Bad Request") })
    @GetMapping("/todos")
    public ResponseEntity<?> getAll() throws ResourceNotFoundException {
        logger.info("Buscando los favoritos en la base de datos.");
        List<FavoriteDTO> response = service.getAll();

        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> delete(@PathVariable Integer id) throws ResourceNotFoundException {
        String response = service.delete(id);
        logger.debug("Favorito " + id + "eliminado con exito.");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/usuarios/{id}")
    public ResponseEntity<?> getFavoritesByUserId(@PathVariable Integer id) throws ResourceNotFoundException {
        logger.info("Buscando los favoritos en la base de datos por id del usuario.");
        List<AccommodationDTO> response = service.getFavoritesByUserId(id);

        return ResponseEntity.ok(response);
    }
}
