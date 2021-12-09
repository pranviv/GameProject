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

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class GameServiceImpl implements GameService {
    private static Logger log = LoggerFactory.getLogger(GameServiceImpl.class);

    private ArrayList<Game> gameQueue;

    @Autowired
    GameDao gamedao;

//    @Override
//    public void playCard(Game g, Player p, Card c) {
//        log.info("Playing Card {}",p.getName());
//    }

    @Override
    public Game getGame(UUID id) {
        return gamedao.getGame(id);
    }

    public List<Game> getGames(){
        return gamedao.getGames();
    }


    public void addPlayerToQueue(Player p){

        if(gameQueue.size() >= 1 ){
            //create game
            Game game = gameQueue.get(0);
            game.setP2(p);


        }
        else {
            Game game = new Game();
            game.setP1(p);
            gameQueue.add(game);
        }
    }
    public Game getOrCreateGame(Player p){
        Game game = gamedao.getGameByPlayer(p.getName());
        if(game == null){
            Game receivedGame = gamedao.getOpenGame();
            if(receivedGame == null){
                UUID uuid = UUID.randomUUID();
                Game newGame = new Game();
                newGame.setP1(p);
                newGame.setUuid(uuid);
                gamedao.addGame(newGame);
                return newGame;

            }
            else{
                receivedGame.setP2(p);
                return receivedGame;
            }
        }
        return null;
    }

    public void playCard(UUID uuid,String playername, Card c ){
        Game game = getGame(uuid);
        Player p = game.findPlayerById(playername);
        List<Card> hand =  p.getHand();
        for(int i = 0; i < hand.size(); i++){
            Card card = hand.get(i);
            if(card.equals(c)) {
                if (p.getBoard().size() < 4){
                    p.getBoard().add(c);
                    hand.remove(i);
                }
                else {
                    log.info("Board is full, cannot add");
                }

            }
            else {
                log.info("Card not found in hand {}", c);
            }
        }
    }

    public void attackCard(UUID uuid, Principal principal, Card card ){
        Game game = getGame(uuid);
        Player player = null;
        if(principal.getName().equals(game.getP1().getName())){
            player = game.getP2();
        }
        else if(principal.getName().equals(game.getP2().getName())){
            player = game.getP1();
        }
        player.setLife( player.getLife() - card.getAttack());
    }

    public void removeGame(UUID uuid){
        gamedao.removeGames(uuid);
    }

}
