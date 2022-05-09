package com.DigitalBookingBackEnd.persistence.repository;

import com.DigitalBookingBackEnd.persistence.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;


public interface CategoryRepository extends JpaRepository<Category, Integer> {
}
