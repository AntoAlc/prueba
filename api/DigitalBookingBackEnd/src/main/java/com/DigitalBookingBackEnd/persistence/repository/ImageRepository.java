package com.DigitalBookingBackEnd.persistence.repository;

import com.DigitalBookingBackEnd.persistence.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, Integer> {
}
