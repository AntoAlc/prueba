package com.DigitalBookingBackEnd.dto;

import com.DigitalBookingBackEnd.dto.login.UserDTO;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ScoreDTO {
    private Integer id;
    private Integer score;
    private AccommodationDTO accommodation;
    private UserDTO user;
}
