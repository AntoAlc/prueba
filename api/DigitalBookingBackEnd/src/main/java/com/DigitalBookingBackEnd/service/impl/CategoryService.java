package com.DigitalBookingBackEnd.service.impl;

import com.DigitalBookingBackEnd.config.SpringConfig;
import com.DigitalBookingBackEnd.dto.CategoryDTO;
import com.DigitalBookingBackEnd.dto.CityDTO;
import com.DigitalBookingBackEnd.exceptions.BadRequestException;
import com.DigitalBookingBackEnd.exceptions.ResourceNotFoundException;
import com.DigitalBookingBackEnd.persistence.model.Category;
import com.DigitalBookingBackEnd.persistence.repository.CategoryRepository;
import com.DigitalBookingBackEnd.service.interfaces.CategoryServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryService implements CategoryServiceInterface {
    @Autowired
    CategoryRepository repository;

    @Autowired
    SpringConfig mapper;

    public CategoryDTO findCategoryById(Integer id) throws ResourceNotFoundException {
        Category category = repository.findById(id).orElse(null);
        if (category != null){
            return mapper.getModelMapper().map(category, CategoryDTO.class);
        } else {
            throw new ResourceNotFoundException ("No fue encontrada la categoría con id " + id);
        }
    }

    public Boolean categoryExists (Integer id){
        List<Category> list = repository.findAll();
        for (Category c: list){
            if (c.getId().equals(id)){
                return true;
            }
        }
        return false;
    }


    @Override
    public CategoryDTO insert(CategoryDTO entidad) throws ResourceNotFoundException, BadRequestException {
        if (entidad.getId() == null){
            throw new ResourceNotFoundException("Falta el id de la categoría a agregar");
        }
        List<Category> list = repository.findAll();
        for (Category c: list){
            if (c.getId().equals(entidad.getId())){
                throw new BadRequestException("Ya se ha insertado una categoría con ese id");
            }
            if (c.getCategory().equals(entidad.getCategory())){
                throw new BadRequestException("La categoría " + c.getCategory() + " ya se ha insertado en la base de datos");
            }
        }

        Category category = mapper.getModelMapper().map(entidad, Category.class);
        return mapper.getModelMapper().map(repository.save(category), CategoryDTO.class);
    }


    @Override
    public Collection<CategoryDTO> getAll() throws ResourceNotFoundException {
        List<Category> categories = repository.findAll();
        if(categories.size() == 0)
            throw new ResourceNotFoundException("No hay categorias cargadas");
        return mapper.getModelMapper().map(categories, List.class);
    }

    @Override
        public String update(CategoryDTO entidad) throws ResourceNotFoundException, BadRequestException {
        String response;
        if (entidad.getId()!=null){
            Optional<Category> categoryToBeModified = repository.findById(entidad.getId());
            if (categoryToBeModified.isPresent()){
                repository.save(this.updateData(categoryToBeModified.get(), entidad));
                response = "Actualización con éxito de la categoría con id " + entidad.getId();
            } else {
                throw new ResourceNotFoundException("No se logró actualizar la categoría. La categoría con id " + entidad.getId() + " no fue encontrada en la base de datos");
            }
        } else {
            throw new BadRequestException("No se introdujo el id de la categoría a modificar");
        }
        return response;
    }

    private Category updateData(Category category, CategoryDTO categoryDTO) {
        if (categoryDTO.getCategory() != null)
            category.setCategory(categoryDTO.getCategory());
        if (categoryDTO.getDescription()!=null)
            category.setDescription(categoryDTO.getDescription());
        if (categoryDTO.getUrlImage()!=null)
            category.setUrlImage(categoryDTO.getUrlImage());
        return category;
    }

    @Override
    public String delete(Integer id) throws ResourceNotFoundException {
        String response;
        if(repository.findById(id).isPresent()){
            repository.deleteById(id);
            response = "Eliminada con éxito";
        } else {
            throw new ResourceNotFoundException("No se logró eliminar la categoría. La categoría con id " + id +" no fue encontradada en la base de datos.");
        }
        return response;
    }
}
