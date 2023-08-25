package com.carlosg.devhotel.service;

import com.carlosg.devhotel.model.Bedroom;
import com.carlosg.devhotel.model.User;
import com.carlosg.devhotel.repository.BedroomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BedroomService {
    @Autowired
    private BedroomRepository bedroomRepository;

    public List<Bedroom> getBedrooms() {
        return bedroomRepository.findAll().stream().toList();
    }

    public Bedroom createBedroom(Bedroom bedroom) {
        return bedroomRepository.save(bedroom);
    }

    public List<Bedroom> createBedrooms(List<Bedroom> bedrooms) {
        return bedroomRepository.saveAll(bedrooms);
    }
}
