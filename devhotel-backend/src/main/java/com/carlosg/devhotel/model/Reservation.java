package com.carlosg.devhotel.model;


import jakarta.persistence.*;


import java.time.LocalDate;

@Entity
@Table(name="reservations")
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate reservedat;
    private LocalDate checkin;
    private LocalDate checkout;
    private  int nights;
    private double total;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @ManyToOne
    @JoinColumn(name = "bedroom_id")
    private Bedroom bedroom;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getReservedat() {
        return reservedat;
    }

    public void setReservedat(LocalDate reservedat) {
        this.reservedat = reservedat;
    }

    public LocalDate getCheckin() {
        return checkin;
    }

    public void setCheckin(LocalDate checkin) {
        this.checkin = checkin;
    }

    public LocalDate getCheckout() {
        return checkout;
    }

    public void setCheckout(LocalDate checkout) {
        this.checkout = checkout;
    }

    public int getNights() {
        return nights;
    }

    public void setNights(int nights) {
        this.nights = nights;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Bedroom getBedroom() {
        return bedroom;
    }

    public void setBedroom(Bedroom bedroom) {
        this.bedroom = bedroom;
    }
}
