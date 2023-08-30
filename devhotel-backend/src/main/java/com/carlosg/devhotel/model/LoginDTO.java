package com.carlosg.devhotel.model;

public record LoginDTO(
        Long id,
        String name,
        String email
) {
    public LoginDTO(User user) {
        this(
                user.getId(),
                user.getName(),
                user.getEmail()
        );
    }


}
