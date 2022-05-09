package com.DigitalBookingBackEnd.persistence.repository.login;

import com.DigitalBookingBackEnd.persistence.model.login.Role;
import org.springframework.data.jpa.repository.JpaRepository;


public interface RoleRepository extends JpaRepository<Role, Integer> {
}
