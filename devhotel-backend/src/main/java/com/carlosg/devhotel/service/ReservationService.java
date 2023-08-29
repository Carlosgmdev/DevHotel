package com.carlosg.devhotel.service;

import com.carlosg.devhotel.model.Bedroom;
import com.carlosg.devhotel.model.Reservation;
import com.carlosg.devhotel.repository.BedroomRepository;
import com.carlosg.devhotel.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;


@Service
public class ReservationService {
    @Autowired
    private ReservationRepository reservationRepository;
    @Autowired
    private BedroomRepository bedroomRepository;

    public Reservation createReservation(Reservation reservation) {
        LocalDate reservedat = LocalDate.now();
        long diffInDays = ChronoUnit.DAYS.between(reservation.getCheckin(), reservation.getCheckout());
        BigDecimal diffInDaysBigDecimal = BigDecimal.valueOf(diffInDays);
        Bedroom bedroom = bedroomRepository.findById(reservation.getBedroom().getId()).orElse(null);
        if (bedroom == null || bedroom.getPrice() == null) {
            throw new RuntimeException("Bedroom not found or price is not set.");
        }
        BigDecimal total = diffInDaysBigDecimal.multiply(bedroom.getPrice());
        reservation.setReservedat(reservedat);
        reservation.setNights((int) diffInDays);
        reservation.setTotal(total.doubleValue());
        return reservationRepository.save(reservation);
    }

    public List<Reservation> getReservations() {
        return reservationRepository.findAll().stream().toList();
    }

    public void cancelReservation(Long id) {
        Reservation reservation = reservationRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Reservation not found with id: " + id));
        reservationRepository.delete(reservation);
    }
}
