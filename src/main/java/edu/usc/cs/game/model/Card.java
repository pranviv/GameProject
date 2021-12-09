package edu.usc.cs.game.model;

import com.fasterxml.jackson.databind.ObjectMapper;
import edu.usc.cs.game.endpoint.Controller;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Card {
    private static Logger log = LoggerFactory.getLogger(Card.class);
    private static ObjectMapper objectMapper = new ObjectMapper();
    private int attack;
    private int health;
    private int mana_cost;
    private int id;

    public int getAttack() {
        return attack;
    }

    public void setAttack(int attack) {
        this.attack = attack;
    }

    public int getHealth() {
        return health;
    }

    public void setHealth(int health) {
        this.health = health;
    }

    public int getMana_cost() {
        return mana_cost;
    }

    public void setMana_cost(int mana_cost) {
        this.mana_cost = mana_cost;
    }

    public boolean equals(Card c1){
        try {
            log.info("In Card Equals method {} {}", objectMapper.writeValueAsString(c1), objectMapper.writeValueAsString(this));
        }
        catch(Exception e){e.printStackTrace();}
        if(this.attack == c1.getAttack() && this.getHealth() == c1.getHealth() && this.mana_cost == getMana_cost()){
            return true;
        }
        else {
            return false;
        }
    }


}
