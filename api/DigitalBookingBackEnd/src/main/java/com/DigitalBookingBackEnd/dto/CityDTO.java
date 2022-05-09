package com.DigitalBookingBackEnd.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class CityDTO {
    private Integer id;
    private String name;
    private String country;

    @Override
    public String toString() {
        return "City:" +
                "\n\tid: '" + id + "'" +
                "\n\tname: '" + name +
                "\n\tcountry: '" + country +
                "' \n";
    }
}
