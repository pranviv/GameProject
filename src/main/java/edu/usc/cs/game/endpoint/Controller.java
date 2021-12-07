package edu.usc.cs.game.endpoint;


import edu.usc.cs.game.dao.PlayerRepository;
import edu.usc.cs.game.dao.UserRepository;
import edu.usc.cs.game.model.Player;
import edu.usc.cs.game.model.RegistrationInfo;
import edu.usc.cs.game.model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.datasource.init.ResourceDatabasePopulator;
import org.springframework.security.config.core.userdetails.UserDetailsResourceFactoryBean;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.security.Principal;


@org.springframework.stereotype.Controller
public class Controller {
    private static Logger log = LoggerFactory.getLogger(Controller.class);



    @Autowired
    UserRepository userRepo;




    private PasswordEncoder encoder = new BCryptPasswordEncoder();

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
//    @RequestMapping("/register")
//    public String process(Model model, @RequestParam String userName, @RequestParam String password) {
//        log.info("UserName: {}", userName);
//        log.info("Password: {}", password);
////
//       detailsManager.createUser(org.springframework.security.core.userdetails.User.withUsername("user")
//                .password(encoder.encode("pass"))
//                .roles("USER").build());
//        //log.info("PlayerName: {}", user1.getPassword());
//
//        return "/login";
//    }



    @RequestMapping("/landing")
    public String landingPage(){
        return "landing";
    }
    @PostMapping("/play")
    public String startPlay(){
        log.info("Hit Play");

        return "redirect:/index.html";
        //return "index.html";
    }

    @GetMapping("/register")
    public String showRegistrationForm(Model model) {
        model.addAttribute("user", new User());

        return "signup_form";
    }

    @PostMapping("/process_register")
    public String processRegister(User user) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);

        userRepo.save(user);

        return "register_success";
    }




}
