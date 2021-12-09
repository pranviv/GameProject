package edu.usc.cs.game.dao;

import edu.usc.cs.game.endpoint.GameController;
import edu.usc.cs.game.model.Game;
import edu.usc.cs.game.model.Player;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;


public class GameDao {
    private static Logger log = LoggerFactory.getLogger(GameDao.class);
    private ConcurrentHashMap<UUID, Game> gameMap = new ConcurrentHashMap<>();
    private ConcurrentHashMap<String, Game> gamePlayerMap = new ConcurrentHashMap<>();


    public GameDao(){
//        Player p1 = new Player("Pranav");
//        Player p2 = new Player("John");
//        Game game = new Game();
//        game.setP1(p1);
//        game.setP2(p2);
//        game.setUuid(UUID.randomUUID());
//        log.info("Example Game UUID {}", game.getUuid());
//        addGame(game);
    }

    public Game getGame(UUID id){
       return gameMap.get(id);
    }
    public Game getGameByPlayer(String username){
        return gamePlayerMap.get(username);
    }
    public UUID addGame(Game game){

        gameMap.put(game.getUuid(), game);

        gamePlayerMap.put(game.getP1().getName(), game);
        if(game.getP2() != null) {
            gamePlayerMap.put(game.getP2().getName(), game);
        }

        return game.getUuid();
    }
    public Game getOpenGame(){
        Iterator<String> it = gamePlayerMap.keySet().iterator();
        for(UUID u : gameMap.keySet()){
            Game game = gameMap.get(u);
            if( game.getP2() == null ){
                return game;
            }
        }
        return null;
    }
    public List<Game> getGames(){
        return new ArrayList<>(gameMap.values());
    }

    public void removeGames(UUID uuid){
        Game game = null;
        if(gameMap.get(uuid) != null) {
            game = gameMap.remove(uuid);
        }
        if(game != null) {
            gamePlayerMap.remove(game.getP1().getName());
            gamePlayerMap.remove(game.getP2().getName());
        }
    }
}
