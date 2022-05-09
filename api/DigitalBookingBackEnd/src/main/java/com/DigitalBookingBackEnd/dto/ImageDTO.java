package com.DigitalBookingBackEnd.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ImageDTO {
    private Integer id;
    private String title;
    private String urlImage;
    private AccommodationDTO accommodationDTO;

}
