package com.DigitalBookingBackEnd.controller.impl;

import com.DigitalBookingBackEnd.dto.CategoryDTO;
import com.DigitalBookingBackEnd.exceptions.BadRequestException;
import com.DigitalBookingBackEnd.exceptions.ResourceNotFoundException;
import com.DigitalBookingBackEnd.service.impl.CategoryService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/categorias")
public class CategoryController {

    private final static Logger logger = Logger.getLogger(CategoryController.class);

    @Autowired
    CategoryService service;

    @PostMapping("/crear")
    public ResponseEntity<?> create(@RequestBody CategoryDTO categoryDTO) throws BadRequestException, ResourceNotFoundException {
        CategoryDTO response = service.insert(categoryDTO);
        logger.debug("Categoria " + response.toString() + " fue creada con exito.");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/todos")
    public ResponseEntity<?> getAll() throws ResourceNotFoundException {
        Collection<CategoryDTO> response = service.getAll();
        if(response.isEmpty()) {
            logger.debug("No se encontraron categorias");
        }else {
            logger.debug("Encontrada lista de categorias");
        }
        return ResponseEntity.ok(response);
    }

/*    @Override
    public ResponseEntity<?> delete(Integer id) throws Exception {
        return null;
    }

    @Override
    public ResponseEntity<?> update(CategoryDTO categoryDTO) throws BadRequestException, ResourceNotFoundException {
        return null;
    }*/
}
