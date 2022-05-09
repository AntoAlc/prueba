package com.DigitalBookingBackEnd.persistence.repository;

import com.DigitalBookingBackEnd.persistence.model.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

public interface FavoriteRepository extends JpaRepository<Favorite, Integer> {
    /*
    DELETE FROM favorites WHERE id=1;
    delete from Favorite where id= :id
     */
    @Transactional
    @Modifying
    @Query("delete from Favorite where id=?1 ")
    void deleteFavoriteById(@Param("id")Integer id);

}
