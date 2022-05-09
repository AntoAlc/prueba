package com.DigitalBookingBackEnd.persistence.repository;

import com.DigitalBookingBackEnd.persistence.model.Accommodation;
import com.DigitalBookingBackEnd.persistence.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface BookingRepository extends JpaRepository<Booking, Integer>{
//    @Query("SELECT b FROM Booking b where b.accomodation.id = ?1")
//    Optional<List<Booking>> findByAccommodationId(Integer id);
}