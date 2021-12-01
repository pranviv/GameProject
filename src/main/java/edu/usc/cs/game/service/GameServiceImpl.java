package edu.usc.cs.game.service;

import edu.usc.cs.game.dao.GameDao;
import edu.usc.cs.game.dao.PlayerRepository;
import edu.usc.cs.game.model.Card;
import edu.usc.cs.game.model.Game;
import edu.usc.cs.game.model.Player;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GameServiceImpl implements GameService {
    private static Logger log = LoggerFactory.getLogger(GameServiceImpl.class);

    @Override
    public void playCard(Game g, Player p, Card c) {
        log.info("Playing Card {}",p.getName());
    }

    @Override
    public Game getGame(int id) {
        log.info("Game id is: {}", id);
        Game game = new Game();
        Player p1 = new Player("John");
        p1.setName("John");
        Player p2 = new Player("Rubens");
        p1.setName("Rubens");

        game.setP1(p1);
        game.setP2(p2);
        return game;
    }

}
