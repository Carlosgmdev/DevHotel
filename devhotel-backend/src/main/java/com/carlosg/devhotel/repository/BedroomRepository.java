package com.carlosg.devhotel.repository;

import com.carlosg.devhotel.model.Bedroom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BedroomRepository extends JpaRepository<Bedroom, Long> {
}
