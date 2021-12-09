package edu.usc.cs.game.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    @Transient
    private List<Card> deck;
    @Transient
    private List<Card> hand;
    private int mana;
    private int life;
    @Transient
    private List<Card> board;


    protected Player(){

    }

    public Player(String name){
        this.name = name;
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Card> getDeck() {
        return deck;
    }

    public void setDeck(List<Card> deck) {
        this.deck = deck;
    }

    public int getMana() {
        return mana;
    }

    public void setMana(int mana) {
        this.mana = mana;
    }

    public List<Card> getHand() {
        return hand;
    }

    public void setHand(List<Card> hand) {
        this.hand = hand;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getLife() {
        return life;
    }

    public void setLife(int life) {
        this.life = life;
    }

    public List<Card> getBoard() {
        return board;
    }

    public void setBoard(List<Card> board) {
        this.board = board;
    }
}
