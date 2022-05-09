package com.DigitalBookingBackEnd.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class CategoryDTO {
    private Integer id;
    private String category;
    private String description;
    private String urlImage;

    @Override
    public String toString() {
        return "Categoria:" +
                "\n\tid: '" + id + "'" +
                "\n\tCategoria: '" + category +
                "' \n";
    }
}
