package com.DigitalBookingBackEnd.service.impl;

import com.DigitalBookingBackEnd.config.SpringConfig;
import com.DigitalBookingBackEnd.dto.AccommodationDTO;
import com.DigitalBookingBackEnd.dto.CategoryDTO;
import com.DigitalBookingBackEnd.dto.CityDTO;
import com.DigitalBookingBackEnd.exceptions.BadRequestException;
import com.DigitalBookingBackEnd.exceptions.ResourceNotFoundException;
import com.DigitalBookingBackEnd.persistence.model.Accommodation;
import com.DigitalBookingBackEnd.persistence.model.Category;
import com.DigitalBookingBackEnd.persistence.model.Image;
import com.DigitalBookingBackEnd.persistence.repository.AccommodationRepository;
import com.DigitalBookingBackEnd.persistence.repository.ImageRepository;
import com.DigitalBookingBackEnd.service.interfaces.AccommodationServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;

@Service
public class AccommodationService implements AccommodationServiceInterface {

    @Autowired
    AccommodationRepository repository;

    @Autowired
    CategoryService categoryService;

    @Autowired
    CityService cityService;

    @Autowired
    SpringConfig mapper;

    @Autowired
    ImageRepository imageRepository;

    @Override
    public AccommodationDTO insert(AccommodationDTO entidad) throws BadRequestException, ResourceNotFoundException {
        AccommodationDTO response;
        if (entidad == null){
            throw new BadRequestException("Ha ocurrido un error al intentar crear un alojamiento.");
        }
        else if(entidad.getCategory().getId() == null){
            throw new BadRequestException("Falta introducir el id de la categoría a la que pertenece el alojamiento");
        }
        else if (entidad.getCity().getId()==null){
            throw new BadRequestException("Falta introducir el id de la ciudad a la que pertenece el alojamiento");
        }

        //Busco en la base de datos la categoría y ciudad para luego insertarlo en la respuesta
        CategoryDTO searchedCategory = categoryService.findCategoryById(entidad.getCategory().getId());
        CityDTO searchedCity = cityService.findCityById(entidad.getCity().getId());

        //Mappeo el accommodationDTO obtenido por parámetro en la clase accommodation
        Accommodation accommodation = mapper.getModelMapper().map(entidad, Accommodation.class);

        //Creo la respuesta mappeandola a DTO
        response = mapper.getModelMapper().map(repository.save(accommodation), AccommodationDTO.class);

        //Seteo categoria y ciudad
        response.setCategory(searchedCategory);
        response.setCity(searchedCity);

        //Seteo las imágenes en la base dedatos
        for (Image image: entidad.getImages()){
            image.setAccommodation(mapper.getModelMapper().map(response,Accommodation.class));
            imageRepository.save(image);
        }

        return response;
    }

    @Override
    public List<AccommodationDTO> getAll() throws ResourceNotFoundException {
        List<AccommodationDTO> accommodationDTOList = new ArrayList<>();
        List<Accommodation> accommodationList = mapper.getModelMapper().map(repository.findAll(), List.class);
        for (Accommodation a: accommodationList){
            a.getCharacteristics().forEach(caracteristica -> System.out.println(caracteristica.getName()));
            AccommodationDTO aDTO = mapper.getModelMapper().map(a,AccommodationDTO.class);
            accommodationDTOList.add(aDTO);
        }
        if(accommodationList.size() == 0) {
            throw new ResourceNotFoundException("No hay alojamientos cargados aún.");
        }
        return accommodationDTOList;
    }

    @Override
    public AccommodationDTO getAccommodationById(Integer id) throws ResourceNotFoundException,BadRequestException {
        // Obtenemos el alojamiento mediante el repositorio JPA
        Accommodation accommodation = repository.findById(id).get();

        //Lo mappeamos a DTO
        AccommodationDTO accommodationDTO = mapper.getModelMapper().map(accommodation, AccommodationDTO.class);


        return accommodationDTO;
    }

    @Override
    public String update(AccommodationDTO entidad) throws ResourceNotFoundException, BadRequestException {
        String response;
        if (entidad.getId()!=null){
            Optional<Accommodation> accommodationToBeModified = repository.findById(entidad.getId());
            if (accommodationToBeModified.isPresent()){
                repository.save(this.updateData(accommodationToBeModified.get(), entidad));
                response = "Actualización con éxito del alojamiento con id " + entidad.getId();
            } else {
                throw new ResourceNotFoundException("No se logró actualizar el alojamiento. El alojamiento con id " + entidad.getId() + " no fue encontrado en la base de datos");
            }
        } else {
            throw new BadRequestException("No se introdujo el id del alojamiento a modificar");
        }
        return response;
    }

    private Accommodation updateData(Accommodation accommodation, AccommodationDTO accommodationDTO) throws BadRequestException {
        if (accommodationDTO.getDescription() != null)
            accommodation.setDescription(accommodationDTO.getDescription());
        if (accommodationDTO.getName()!=null)
            accommodation.setName(accommodationDTO.getName());
        if (accommodationDTO.getCategory()!=null) {
            CategoryDTO categoryDTO = accommodationDTO.getCategory();
            if (categoryService.categoryExists(categoryDTO.getId())){
                accommodation.setCategory(mapper.getModelMapper().map(categoryDTO, Category.class));
            } else {
                throw new BadRequestException("La categoría seleccionada no existe en la base de datos");
            }
        }
        return accommodation;
    }

    @Override
    public String delete(Integer id) throws ResourceNotFoundException {
        String response;
        if(repository.findById(id).isPresent()){
            repository.deleteById(id);
            response = "Eliminado con éxito";
        } else {
            throw new ResourceNotFoundException("No se logró eliminar el alojamiento de la base de datos. El id " + id +" no fue encontrado.");
        }
        return response;
    }


    @Override
    public List<AccommodationDTO> getByCategoryId(Integer id) throws ResourceNotFoundException {
        List<Accommodation> accommodations = repository.findByCategoryId(id).get();
        if (accommodations.isEmpty()) {
            throw new ResourceNotFoundException("No se encontraron alojamientos en la categoria con id: " + id +" .");
        } else {
            return mapper.getModelMapper().map(accommodations, List.class);
        }
    }


    public List<AccommodationDTO> getByCityId(Integer id) throws ResourceNotFoundException {
        List<Accommodation> accommodations = repository.findByCityId(id).get();
        if (accommodations.isEmpty()) {
            throw new ResourceNotFoundException("No se encontraron alojamientos en la ciudad con id: " + id +" .");
        }
        return mapper.getModelMapper().map(accommodations, List.class);
    }

    public List<AccommodationDTO> getByDates(LocalDate initialDate, LocalDate finalDate) throws ResourceNotFoundException {
        List<Accommodation> accommodations = repository.findByDates(initialDate, finalDate);
        if (accommodations.isEmpty()) {
            throw new ResourceNotFoundException("No se encontraron alojamientos en las fechas establecidas.");
        }

        return mapper.getModelMapper().map(accommodations, List.class);
    }

    public List<AccommodationDTO> getByCityBetweenDates(Integer cityId, LocalDate initialDate, LocalDate finalDate) throws ResourceNotFoundException {
        List<Accommodation> accommodations = repository.findByCityBetweenDates(cityId, initialDate, finalDate);
        if (accommodations.isEmpty()) {
            throw new ResourceNotFoundException("No se encontraron alojamientos en la ciudad con id: " + cityId + ".");
        }

        return mapper.getModelMapper().map(accommodations, List.class);
    }
}
