package com.carlosg.devhotel.controller;

import com.carlosg.devhotel.model.Reservation;
import com.carlosg.devhotel.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reservations")
public class ReservationController {
    @Autowired
    private ReservationService reservationService;

    @GetMapping
    public List<Reservation> getReservations() {
        return  reservationService.getReservations();
    }

    @GetMapping("/user/{id}")
    public List<Reservation> getReservationsByUserId(@PathVariable Long id) {
        return reservationService.findByUserId(id);
    }

    @PostMapping
    public Reservation createReservation(@RequestBody Reservation reservation) {
        return reservationService.createReservation(reservation);
    }

    @DeleteMapping("/{id}")
    public void cancelReservation(@PathVariable Long id) {
        reservationService.cancelReservation(id);
    }
}
