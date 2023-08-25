package com.carlosg.devhotel.controller;

import com.carlosg.devhotel.model.Bedroom;
import com.carlosg.devhotel.service.BedroomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bedrooms")
public class BedroomController {
    @Autowired
    private BedroomService bedroomService;

    @GetMapping
    public List<Bedroom> getBedrooms() {
        return bedroomService.getBedrooms();
    }

    @PostMapping
    public Bedroom createBedroom(@RequestBody Bedroom bedroom) {
        return bedroomService.createBedroom(bedroom);
    }

/*
    @PostMapping
    public List<Bedroom> createBedroom(@RequestBody List<Bedroom> bedrooms) {
        return bedroomService.createBedrooms(bedrooms);
    }
*/

}
