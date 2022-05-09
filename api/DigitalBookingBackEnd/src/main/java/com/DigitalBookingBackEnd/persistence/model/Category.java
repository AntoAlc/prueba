package com.DigitalBookingBackEnd.persistence.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "categories")
@Getter @Setter
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String category;
    private String description;
    private String urlImage;

    @OneToMany(mappedBy = "category")
    @JsonIgnore
    private Set<Accommodation> accommodations;

    public Category() {
    }

    public Category(String category) {
        this.category = category;
    }
}
