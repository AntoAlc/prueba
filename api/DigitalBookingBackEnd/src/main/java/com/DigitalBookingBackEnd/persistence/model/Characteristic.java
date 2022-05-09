package com.DigitalBookingBackEnd.persistence.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "characteristics")
@Getter @Setter
public class Characteristic {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String icon;

    @ManyToMany(mappedBy = "characteristics")
    @JsonIgnore
    Set<Accommodation> accommodations;

    public Characteristic() {
    }


}
