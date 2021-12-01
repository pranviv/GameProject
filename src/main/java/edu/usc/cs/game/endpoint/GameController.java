package edu.usc.cs.game.endpoint;

import edu.usc.cs.game.model.Game;
import edu.usc.cs.game.model.Player;
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

@RequestMapping("/game")
@RestController
public class GameController {
    private static Logger log = LoggerFactory.getLogger(GameController.class);
    @Autowired
    private GameService gameService;
    @Autowired
    private PlayerService playerService;

    @GetMapping("/{id}")
    public Game getGame(@PathVariable int id){
        return gameService.getGame(id);

    }
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
//    @GetMapping("player/{id}")
//    public Player getPlayer(@PathVariable Long id){
//        return playerService.getPlayer(id);
//    }
}
