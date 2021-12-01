package edu.usc.cs.game.model;

public class Game {
    private Player p1;
    private Player p2;
    private Board b;
    private boolean currentTurn;

    public Player getP1() {
        return p1;
    }

    public void setP1(Player p1) {
        this.p1 = p1;
    }

    public Player getP2() {
        return p2;
    }

    public void setP2(Player p2) {
        this.p2 = p2;
    }

    public Board getB() {
        return b;
    }

    public void setB(Board b) {
        this.b = b;
    }

    public boolean isCurrentTurn() {
        return currentTurn;
    }

    public void setCurrentTurn(boolean currentTurn) {
        this.currentTurn = currentTurn;
    }
}
