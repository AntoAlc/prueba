package com.DigitalBookingBackEnd.controller.impl.token;

import com.DigitalBookingBackEnd.controller.impl.AccommodationController;
import com.DigitalBookingBackEnd.persistence.model.token.AuthenticationRequest;
import com.DigitalBookingBackEnd.persistence.model.token.AuthenticationResponse;
import com.DigitalBookingBackEnd.service.impl.login.UserService;
import com.DigitalBookingBackEnd.util.token.JwtUtil;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class TokenController {

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserService userDetailsService;
    @Autowired
    private JwtUtil jwtUtil;

    private final static Logger logger = Logger.getLogger(AccommodationController.class);

    @ApiOperation(value = "ESP: Autenticar un usuario y recibir un token. \nEN: Authenticate the user and get a token.")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success | OK"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 400, message = "Bad Request") })
    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception{
        try {
            logger.info("Iniciando la autenticaci??n de " + authenticationRequest.toString());
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword()));
        }catch (BadCredentialsException e) {
            logger.debug("Ha habido un problema con la autenticaci??n");
            throw new Exception("Incorrect", e);
        }
        logger.info("Iniciando el servicio y generando el token");
        final UserDetails  userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
        final String jwt = jwtUtil.generateToken(userDetails);

        return ResponseEntity.ok(new AuthenticationResponse((jwt)));
    }

    /**
     * El m??todo hello() lo usamos s??lo para probar la autenticaci??n y no darle acceso a los usuarios que no env??en en
     * el header de la petici??n el token para acceder al endpoint
     */

    @RequestMapping({"/hello"})
    public String hello() {
        return "Hello World";
    }
}
