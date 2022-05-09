package com.DigitalBookingBackEnd.persistence.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "housesPolicies")
@Getter
@Setter
public class HousePolicies {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String housePolicies;
}
