/*
package com.DigitalBookingBackEnd.controller.impl;

import com.DigitalBookingBackEnd.dto.CityDTO;
import com.DigitalBookingBackEnd.exceptions.BadRequestException;
import com.DigitalBookingBackEnd.exceptions.GlobalExceptions;
import com.DigitalBookingBackEnd.exceptions.ResourceNotFoundException;
import com.DigitalBookingBackEnd.service.interfaces.CityServiceInterface;
import com.DigitalBookingBackEnd.util.Jsons;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.junit.jupiter.api.Assertions.assertEquals;

@WebMvcTest(CityController.class)
@AutoConfigureMockMvc(addFilters = false)
@RunWith(MockitoJUnitRunner.class)
public class CityControllerTest {

    /*private MockMvc mockMvc;

    @Mock
    private CityServiceInterface cityService;

    @InjectMocks
    private CityController cityController;

    private CityDTO dummyOdToSend;
    private CityDTO dummyOdReceived;
    private CityDTO noO;

    @Before
    public void cargarDatos() throws BadRequestException, ResourceNotFoundException {
        mockMvc = MockMvcBuilders.standaloneSetup(cityController).setControllerAdvice(GlobalExceptions.class).build();

        //CIUDAD A ENVIAR
        dummyOdToSend = new CityDTO();
        dummyOdToSend.setName("Ciudad Feliz");
        dummyOdToSend.setCountry("Sin Frontera");

        //CIUDAD RESPUESTA
        dummyOdReceived = new CityDTO();
        dummyOdToSend.setName("Ciudad Feliz");
        dummyOdToSend.setCountry("Sin Frontera");
        dummyOdReceived.setId(1);

        //CIUDAD NULL
        noO = null;
    }

    @Test
    public void test01gettingAllCities() throws Exception {
        //DADO>@BeforeAll

        MvcResult response = mockMvc.perform(MockMvcRequestBuilders.get("/cities/all"))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andReturn();
    }*/

    */
/*@Test
    public void test02createACity() throws Exception {
        //DADO>
        Mockito.when(cityService.insert(dummyOdToSend)).thenReturn(dummyOdReceived);

        //ENTONCES > CUANDO
        MvcResult response = mockMvc.perform(MockMvcRequestBuilders.post("/cities/new")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8")
                        .content(Jsons.asJsonString(dummyOdToSend)))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk()).andReturn();
        assertEquals((String.format("La %s fue creada con el id %s.", "1")), response.getResponse().getContentAsString());
    }

    @Test
    public void test02itShoulNotCreateACity() throws Exception {
        //DADO>@Before

        //ENTONCES > CUANDO
        MvcResult response = mockMvc.perform(MockMvcRequestBuilders.post("/cities/new")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8")
                        .content(Jsons.asJsonString(noO)))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().is5xxServerError()).andReturn();

        assertEquals(("Se produjo un error inesperado, vuelva intentar más tarde, por favor."), response.getResponse().getContentAsString());
    }*//*

}*/
