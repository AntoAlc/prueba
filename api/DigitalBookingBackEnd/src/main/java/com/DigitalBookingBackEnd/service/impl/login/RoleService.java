package com.DigitalBookingBackEnd.service.impl.login;

import com.DigitalBookingBackEnd.config.SpringConfig;
import com.DigitalBookingBackEnd.dto.CategoryDTO;
import com.DigitalBookingBackEnd.dto.login.RoleDTO;
import com.DigitalBookingBackEnd.exceptions.ResourceNotFoundException;
import com.DigitalBookingBackEnd.persistence.model.Category;
import com.DigitalBookingBackEnd.persistence.model.login.Role;
import com.DigitalBookingBackEnd.persistence.repository.CategoryRepository;
import com.DigitalBookingBackEnd.persistence.repository.login.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService {
    @Autowired
    RoleRepository repository;

    @Autowired
    SpringConfig mapper;

    public RoleDTO findRoleById(Integer id) throws ResourceNotFoundException {
        Role role = repository.findById(id).orElse(null);
        if (role != null){
            return mapper.getModelMapper().map(role, RoleDTO.class);
        } else {
            throw new ResourceNotFoundException ("No fue encontrado el rol con id " + id);
        }
    }

    public Boolean roleExists (Integer id){
        List<Role> list = repository.findAll();
        for (Role r: list){
            if (r.getId().equals(id)){
                return true;
            }
        }
        return false;
    }
}
