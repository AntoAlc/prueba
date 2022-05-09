package com.DigitalBookingBackEnd.controller;

import com.DigitalBookingBackEnd.exceptions.BadRequestException;
import com.DigitalBookingBackEnd.exceptions.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


public interface ControllerInterface<E>{
    @PostMapping("/crear") ResponseEntity<?> create(@RequestBody E e) throws Exception;
    @GetMapping("/todos") ResponseEntity<?> getAll() throws Exception;
    @GetMapping("/categorias/{id}") ResponseEntity<?> getByCategoryId(@PathVariable Integer id) throws ResourceNotFoundException, BadRequestException;
    @DeleteMapping("/eliminar/{id}") ResponseEntity<?> delete(@PathVariable Integer id) throws Exception;
    @PutMapping ResponseEntity<?> update(@RequestBody E e) throws BadRequestException, ResourceNotFoundException;
}
