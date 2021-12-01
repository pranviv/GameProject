package edu.usc.cs.game.endpoint;

import edu.usc.cs.game.model.Player;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/home")
public class DebugController {
    private static Logger log = LoggerFactory.getLogger(DebugController.class);
    @GetMapping
    public String savePlayer(@RequestBody Player p){
        log.info("Player name: {}", p.getName());
        return p.getName();
    }

    @GetMapping("debug")
    public String helloWorld(){
        return "Hello World";
    }
}
