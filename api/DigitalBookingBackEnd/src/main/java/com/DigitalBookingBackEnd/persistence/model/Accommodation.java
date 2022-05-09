package com.DigitalBookingBackEnd.persistence.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "accommodations")
@Getter
@Setter
public class Accommodation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String description;
    private String address;


    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "category_id", referencedColumnName = "id", nullable = false)
    private Category category;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "city_id", referencedColumnName = "id", nullable = false)
    private City city;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.MERGE, mappedBy = "accommodation")
    private Set<Image> images;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "accommodation")
    private Set<Booking> bookings;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "accommodation")
    private Set<Score> scores;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "accommodation")
    @JsonIgnore
    private Set<Favorite> favorites;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinTable(
            name = "accommodations_characteristics",
            joinColumns = {@JoinColumn(name = "accommodation_id",  referencedColumnName = "id", nullable = false)},
            inverseJoinColumns = {@JoinColumn(name = "characteristic_id",  referencedColumnName = "id", nullable = false)}
    )
    private Set<Characteristic> characteristics;

    @OneToOne(cascade = CascadeType.ALL, optional = false)
    @JoinColumn(name="cancellationPolicy_id", referencedColumnName = "id")
    private CancellationPolicy cancellationPolicy;

    @OneToOne(cascade = CascadeType.ALL, optional = false)
    @JoinColumn(name="healthAndSafty_id", referencedColumnName = "id")
    private HealthAndSafty healthAndSafty;

    @OneToOne(cascade = CascadeType.ALL, optional = false)
    @JoinColumn(name="housePolicies_id", referencedColumnName = "id")
    private HousePolicies housePolicies;



}
