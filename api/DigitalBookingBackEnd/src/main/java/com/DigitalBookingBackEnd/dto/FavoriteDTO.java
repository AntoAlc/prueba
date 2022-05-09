package com.DigitalBookingBackEnd.dto;

import com.DigitalBookingBackEnd.dto.login.UserDTO;
import com.DigitalBookingBackEnd.persistence.model.Accommodation;
import com.DigitalBookingBackEnd.persistence.model.login.User;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FavoriteDTO {
    private Integer id;
    private AccommodationDTO accommodation;
    private UserDTO user;
}
