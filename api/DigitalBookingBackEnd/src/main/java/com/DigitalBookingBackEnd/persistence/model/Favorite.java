package com.DigitalBookingBackEnd.persistence.model;

import com.DigitalBookingBackEnd.persistence.model.login.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "favorites")
@Getter
@Setter
public class Favorite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne()
    @JoinColumn(name = "accommodation_id", referencedColumnName = "id", nullable = false)
    private Accommodation accommodation;

    @ManyToOne()
    @JoinColumn(name = "user_id", referencedColumnName = "id", nullable = false)
    private User user;

    public Favorite() {
    }

    public Favorite(Integer id, Accommodation accommodation, User user) {
        this.id = id;
        this.accommodation = accommodation;
        this.user = user;
    }
}
