package com.DigitalBookingBackEnd.email;

import com.DigitalBookingBackEnd.controller.impl.AccommodationController;
import com.DigitalBookingBackEnd.dto.AccommodationDTO;
import com.DigitalBookingBackEnd.exceptions.BadRequestException;
import com.DigitalBookingBackEnd.exceptions.ResourceNotFoundException;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/email")
public class EmailSenderController {

    @Autowired
    EmailSenderService service;

    private final static Logger logger = Logger.getLogger(EmailSenderController.class);



    @PostMapping("/verificacion")
    public ResponseEntity<?> create(@RequestBody Email email) throws BadRequestException, ResourceNotFoundException {
        logger.info("Iniciando método de envío de correo electrónico");
        logger.info("Mail a enviar: " + email.toString());
        String response = "Email enviado";
        service.sendSimpleMessage(email.getEmail(), email.getSubject(), email.getBody());
        return ResponseEntity.ok(response);
    }
}
