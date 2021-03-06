package edu.usc.cs.game.endpoint;

import com.fasterxml.jackson.databind.ObjectMapper;
import edu.usc.cs.game.dao.GameDao;
import edu.usc.cs.game.dao.UserRepository;
import edu.usc.cs.game.model.Card;
import edu.usc.cs.game.model.Game;
import edu.usc.cs.game.model.Player;
import edu.usc.cs.game.model.User;
import edu.usc.cs.game.service.GameService;
import edu.usc.cs.game.service.GameServiceImpl;
import edu.usc.cs.game.service.PlayerService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.PermitAll;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RequestMapping("/game")
@RestController
public class GameController {
    private static ObjectMapper objectMapper = new ObjectMapper();
    private static Logger log = LoggerFactory.getLogger(GameController.class);
    @Autowired
    private GameService gameService;
    @Autowired
    private PlayerService playerService;



    @Autowired
    UserRepository userRepo;

//    @GetMapping("/{id}")
//    public Game getGame(@PathVariable int id){
//        return gameService.getGame(id);
//
//    }
    @GetMapping
    public String startGame(@CurrentSecurityContext (expression = "authentication.principal") Principal principle){

        //TODO
        SecurityContext context = SecurityContextHolder.getContext();
        Authentication authentication = context.getAuthentication();
        //return principle.getName();
        return authentication.getName();

    }
    @PermitAll
    @PostMapping("player")
    public Long addPlayer(@RequestBody Player player){
        log.info("Player name: {} ", player.getName());
        return playerService.addPlayer(player).getId();
    }

    @GetMapping("/users/{username}")
    public User getUser(@PathVariable String username) {
        return userRepo.findByEmail(username);
    }

    @PostMapping("/test")
    public String test(Principal principal){
        return principal.toString();
    }

//    @PostMapping("/setdeck")
//    public void setDeck(Principal principal, @RequestBody List<Card> cardList){
//        //create player set deck
//        //getOrCreateGame(Player p)
//
//    }

    @GetMapping("/games")
    public List<Game> getGames(){
        return gameService.getGames();
    }
    @PostMapping("/games")
    public Game newGame(Principal principal){
        Player p = new Player(principal.getName());
        Game game = gameService.getOrCreateGame(p);
        return game;
    }
    @GetMapping("/games/{gameId}")
    public Game getGame( @PathVariable UUID gameId){
        return gameService.getGame(gameId);
    }

    @PostMapping("/games/deck")
    public Game setDeck(Principal principal, @RequestBody List<Card> cardList){
        log.info("Name from Principal: {}",principal.getName());
        Player p = new Player(principal.getName());
        p.setDeck(cardList);
        p.setLife(20);
        p.setMana(10);
        ArrayList<Card> myHand = new ArrayList<>();
        List<Card> deck = p.getDeck();
        int ctr = 0;
        for(int i = 0; i < 4 ; i++){
            if(i < deck.size()){
                ctr++;
                myHand.add(deck.get(i));
            }
        }
        for(int i = 0; i < ctr; i++){
            deck.remove(0);
        }
        p.setHand(myHand);
        p.setBoard(new ArrayList<Card>());
        Game game = gameService.getOrCreateGame(p);
        if(game.getP1().getName() == principal.getName()){
            game.getP1().setDeck(cardList);
        }
        else if(game.getP2().getName() == principal.getName()) {
            game.getP2().setDeck(cardList);
        }
        else {
            log.info("No Matching Player");
        }
        log.info("In games/deck");
        return game;
    }

    @PostMapping("games/{gameId}/board/cards")
    public void playCard(Principal principal, @RequestBody Card card, @PathVariable String gameId){
        try {
            log.info("Received Card: {}", objectMapper.writeValueAsString(card));
        } catch(Exception e) {e.printStackTrace();}
        log.info(gameId);
        UUID uuid = UUID.fromString(gameId);

        gameService.playCard(uuid, principal.getName(), card);
        log.info("Playing Card");


    }

    @PostMapping("games/{gameId}/board/attack")
    public void attackCard(Principal principal, @RequestBody Card card, @PathVariable String gameId){
        try {
            log.info("Received Card: {}", objectMapper.writeValueAsString(card));
        } catch(Exception e) {e.printStackTrace();}
        log.info(gameId);
        UUID uuid = UUID.fromString(gameId);

        gameService.attackCard(uuid, principal, card);

        log.info("Attacking with Card");


    }



//    @GetMapping("/games/{gameId}/players")
//    public List<Player> getGame(@PathVariable UUID gameId){
//        return gameService.getGame(gameId).
//    }


//    @GetMapping("player/{id}")
//    public Player getPlayer(@PathVariable Long id){
//        return playerService.getPlayer(id);
//    }
}
