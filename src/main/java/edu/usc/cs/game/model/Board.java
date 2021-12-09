package edu.usc.cs.game.model;

import java.util.List;

public class Board {
    private List<Card> row1;
    private List<Card> row2;

    public List<Card> getRow1() {
        return row1;
    }

    public void setRow1(List<Card> row1) {
        this.row1 = row1;
    }

    public List<Card> getRow2() {
        return row2;
    }

    public void setRow2(List<Card> row2) {
        this.row2 = row2;
    }
}
