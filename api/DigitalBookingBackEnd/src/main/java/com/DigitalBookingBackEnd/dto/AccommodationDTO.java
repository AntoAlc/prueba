package com.DigitalBookingBackEnd.dto;

import com.DigitalBookingBackEnd.persistence.model.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter @Setter
public class AccommodationDTO {
    private Integer id;
    private String name;
    private String description;
    private String address;
    private CategoryDTO category;
    private CityDTO city;
    private Set<Image> images;
    private Set<Characteristic> characteristics;
    private Set<Booking> bookings;
    private Set<Score> scores;
    private Set<Favorite> favorites;
    private CancellationPolicy cancellationPolicy;
    private HealthAndSafty healthAndSafty;
    private HousePolicies housePolicies;

    @Override
    public String toString() {
        return "Alojamiento:" +
                "\n\tid: '" + id + "'" +
                "\n\tName: '" + name + "'" +
                "\n\tDescription: '" + description +"' \n";
    }
}
