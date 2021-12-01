package edu.usc.cs.game.dao;

import edu.usc.cs.game.model.Player;
import org.springframework.data.repository.CrudRepository;

public interface PlayerRepository extends CrudRepository<Player, Long> {
    Player findById(long id);
}
