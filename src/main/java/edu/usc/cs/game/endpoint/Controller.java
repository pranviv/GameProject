package edu.usc.cs.game.endpoint;


import edu.usc.cs.game.dao.PlayerRepository;
import edu.usc.cs.game.model.Player;
import edu.usc.cs.game.model.RegistrationInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;


@org.springframework.stereotype.Controller
public class Controller {
    private static Logger log = LoggerFactory.getLogger(Controller.class);

    @Autowired
    PlayerRepository playerRepo;

    @RequestMapping("registration")
    public String Register() {
        return "login";
    }

//    @RequestMapping("/register")
//    public String processRegister(Model model, @RequestParam String sourceText) {
//
//
//     //   playerRepo.save(player);
//        log.info("Name = {}", sourceText);
//        return "register_success";
//    }
    @RequestMapping("/register")
    public String process(Model model, @RequestParam String userName, @RequestParam String password) {
        log.info("UserName: {}", userName);
        log.info("Password: {}", password);
        Player player = new Player(userName);
        playerRepo.save(player);
        long id = player.getId();
        Player player1 = playerRepo.findById(id);
        log.info("PlayerName: {}", player1.getName());
        return "/login";
}

}
