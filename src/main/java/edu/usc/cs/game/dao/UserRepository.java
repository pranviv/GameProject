package edu.usc.cs.game.dao;

import edu.usc.cs.game.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import javax.persistence.Table;


@Table(name = "users")
public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String username);



}
