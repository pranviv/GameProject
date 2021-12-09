package edu.usc.cs.game.service;

import edu.usc.cs.game.model.Card;
import edu.usc.cs.game.model.Game;
import edu.usc.cs.game.model.Player;

import java.security.Principal;
import java.util.List;
import java.util.UUID;

public interface GameService {


    //void playCard(Game g, Player p, Card c);

    Game getGame(UUID id);
    List<Game> getGames();
    Game getOrCreateGame(Player p);
    void playCard(UUID uuid, String playername ,Card c);
    void attackCard(UUID uuid, Principal principal, Card c );
    void removeGame(UUID uuid);

}
