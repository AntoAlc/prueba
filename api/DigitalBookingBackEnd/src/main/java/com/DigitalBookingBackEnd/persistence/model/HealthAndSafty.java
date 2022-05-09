package com.DigitalBookingBackEnd.persistence.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "healtAndsafty")
@Getter
@Setter
public class HealthAndSafty {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String healthAndSafty;
}
