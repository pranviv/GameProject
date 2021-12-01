package edu.usc.cs.game.service;

import edu.usc.cs.game.dao.GameDao;
import edu.usc.cs.game.dao.PlayerRepository;
import edu.usc.cs.game.model.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PlayerService {

    private GameDao dao;
    @Autowired
    private PlayerRepository playerRepository;

    public Player getPlayer(Long id){
        return playerRepository.findById(id).get();
    }


    public Player addPlayer(Player player) {
        return playerRepository.save(player);
    }
}
