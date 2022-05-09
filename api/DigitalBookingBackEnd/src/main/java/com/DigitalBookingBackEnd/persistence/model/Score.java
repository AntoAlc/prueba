package com.DigitalBookingBackEnd.persistence.model;

import com.DigitalBookingBackEnd.persistence.model.login.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "scores")
@Getter
@Setter
public class Score {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer score;

    @ManyToOne()
    @JoinColumn(name = "accommodation_id", referencedColumnName = "id", nullable = false)
    @JsonIgnore
    private Accommodation accommodation;

    @ManyToOne()
    @JoinColumn(name = "user_id", referencedColumnName = "id", nullable = false)
    @JsonIgnore
    private User user;

    public Score() {
    }

    public Score(Integer id, Accommodation accommodation, User user) {
        this.id = id;
        this.accommodation = accommodation;
        this.user = user;
    }
}
