package com.DigitalBookingBackEnd.persistence.repository;

import com.DigitalBookingBackEnd.persistence.model.Accommodation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface AccommodationRepository extends JpaRepository<Accommodation, Integer> {
    @Query("SELECT acc FROM Accommodation acc where acc.category.id = ?1")
    Optional<List<Accommodation>> findByCategoryId(Integer id);

    @Query("SELECT acc FROM Accommodation acc where acc.city.id = ?1")
    Optional<List<Accommodation>> findByCityId(Integer id);

   @Query("SELECT accom from Accommodation accom where accom.city.id = ?1 AND accom.id not in " +
           "(SELECT acc.id FROM Accommodation acc JOIN Booking boo ON boo.accommodation.id = acc.id where " +
               "(boo.initialDate <= ?2 AND ?2 <= boo.finalDate)" +
               "OR (boo.initialDate <= ?3 AND ?3 <= boo.finalDate)" +
               "OR (?2 <= boo.initialDate AND boo.initialDate <= ?3)" +
               "OR (?2 <= boo.finalDate AND boo.finalDate <= ?3))")
    List<Accommodation> findByCityBetweenDates(Integer cityId, LocalDate initialDate, LocalDate finalDate);

    @Query("SELECT accom from Accommodation accom where accom.id not in " +
            "(SELECT acc.id FROM Accommodation acc JOIN Booking boo ON boo.accommodation.id = acc.id where " +
            "(boo.initialDate <= ?1 AND ?1 <= boo.finalDate)" +
            "OR (boo.initialDate <= ?2 AND ?2 <= boo.finalDate)" +
            "OR (?1 <= boo.initialDate AND boo.initialDate <= ?2)" +
            "OR (?1 <= boo.finalDate AND boo.finalDate <= ?2))")
    List<Accommodation> findByDates(LocalDate initialDate, LocalDate finalDate);
}
