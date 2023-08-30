package com.carlosg.devhotel.service;

import com.carlosg.devhotel.model.LoginDTO;
import com.carlosg.devhotel.model.User;
import com.carlosg.devhotel.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public List<User> getUsers() {
        return userRepository.findAll().stream().toList();
    }

    public ResponseEntity login(User user)  {
        User foundUser = userRepository.getUserByEmail(user.getEmail());
        if(foundUser == null || !foundUser.getPassword().equals(user.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
        LoginDTO result = new LoginDTO(foundUser);
        return ResponseEntity.ok(result);
    }
}
