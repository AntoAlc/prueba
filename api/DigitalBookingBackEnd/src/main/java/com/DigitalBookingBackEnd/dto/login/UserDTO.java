package com.DigitalBookingBackEnd.dto.login;

import com.DigitalBookingBackEnd.persistence.model.Favorite;
import com.DigitalBookingBackEnd.persistence.model.Score;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;


@Getter @Setter
public class UserDTO {
    private Integer id;
    private String name;
    private String lastName;
    private String email;
    private String password;
    private RoleDTO role;

}

