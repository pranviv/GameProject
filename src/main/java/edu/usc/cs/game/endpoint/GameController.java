package edu.usc.cs.game.endpoint;

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
import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RequestMapping("/game")
@RestController
public class GameController {
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


    @PostMapping("/setdeck")
    public void setDeck(Principal principal, @RequestBody List<Card> cardList){
        //create player set deck
        //getOrCreateGame(Player p)

    }

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
    public Game getGame(@PathVariable UUID gameId){
        return gameService.getGame(gameId);
    }

//    @PostMapping("/games/{gameId}/{playerId}/deck")
//    public List<Player> getGame(@PathVariable UUID gameId){
//        return gameService.getGame(gameId).
//    }


//    @GetMapping("/games/{gameId}/players")
//    public List<Player> getGame(@PathVariable UUID gameId){
//        return gameService.getGame(gameId).
//    }


//    @GetMapping("player/{id}")
//    public Player getPlayer(@PathVariable Long id){
//        return playerService.getPlayer(id);
//    }
}
