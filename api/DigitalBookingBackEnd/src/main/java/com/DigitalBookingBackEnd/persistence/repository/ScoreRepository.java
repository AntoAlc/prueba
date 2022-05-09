package com.DigitalBookingBackEnd.persistence.repository;

import com.DigitalBookingBackEnd.persistence.model.Score;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreRepository extends JpaRepository<Score, Integer> {
}
