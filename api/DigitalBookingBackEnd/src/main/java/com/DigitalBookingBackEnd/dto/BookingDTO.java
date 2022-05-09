package com.DigitalBookingBackEnd.dto;

import com.DigitalBookingBackEnd.dto.login.UserDTO;
import lombok.Getter;
import lombok.Setter;

import java.sql.Date;
import java.sql.Time;
import java.time.LocalDate;

@Getter @Setter
public class BookingDTO {
    private Integer id;
    private Integer checkInTime;
    private LocalDate initialDate;
    private LocalDate finalDate;

    private String bookingHolderName;
    private String bookingHolderLastName;
    private String bookingHolderEmail;
    private String bookingHolderCity;
    
    private AccommodationDTO accommodation;
    private UserDTO user;

    @Override
    public String toString() {
        return "Booking:" +
                "\n\tid: '" + id + "'" +
                "\n\tbookingHolderName: '" + bookingHolderName +
                "\n\tbookingHolderLastName: '" + bookingHolderLastName +
                "\n\tbookingHolderEmail: '" + bookingHolderEmail +
                "\n\tbookingHolderCity: '" + bookingHolderCity +
                "\n\tstartTime: '" + checkInTime +
                "\n\tinitialDate: '" + initialDate +
                "\n\tfinalDate: '" + finalDate +
                "' \n";
    }
}
