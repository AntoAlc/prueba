package com.DigitalBookingBackEnd.persistence.model;

import com.DigitalBookingBackEnd.persistence.model.login.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Time;
import java.time.LocalDate;

@Entity
@Table(name = "bookings")
@Getter @Setter
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer checkInTime;
    private LocalDate initialDate;
    private LocalDate finalDate;

    //DATOS DEL TITULAR DE LA RESERVA
    private String bookingHolderName;
    private String bookingHolderLastName;
    private String bookingHolderEmail;
    private String bookingHolderCity;


    @ManyToOne()
    @JoinColumn(name = "accommodation_id", referencedColumnName = "id", nullable = false)
    @JsonIgnore
    private Accommodation accommodation;


    @ManyToOne()
    @JoinColumn(name = "user_id", referencedColumnName = "id", nullable = false)
    @JsonIgnore
    private User user;


    public Booking() {
    }
}




