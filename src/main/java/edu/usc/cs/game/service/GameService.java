package edu.usc.cs.game.service;

import edu.usc.cs.game.model.Card;
import edu.usc.cs.game.model.Game;
import edu.usc.cs.game.model.Player;

public interface GameService {


    void playCard(Game g, Player p, Card c);

    Game getGame(int id);


}
