package edu.usc.cs.game.service;

import edu.usc.cs.game.model.Card;
import edu.usc.cs.game.model.Game;
import edu.usc.cs.game.model.Player;

import java.util.List;
import java.util.UUID;

public interface GameService {


    void playCard(Game g, Player p, Card c);

    Game getGame(UUID id);
    List<Game> getGames();
    Game getOrCreateGame(Player p);

}
