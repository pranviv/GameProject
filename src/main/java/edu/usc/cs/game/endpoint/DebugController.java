package edu.usc.cs.game.endpoint;

import edu.usc.cs.game.model.Player;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

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

    @PostMapping("/loginAuth")
    @ResponseBody
    public Boolean getUserNamePassword(@RequestParam(name = "username") String email, @RequestParam(name = "pass") String password){
        log.info("UserName: {}", email);
        log.info("Password: {}", password);
        return true;
    }

    @GetMapping("/principal")
    public Principal retrievePrincipal(Principal principal) {
        return principal;
    }
}
