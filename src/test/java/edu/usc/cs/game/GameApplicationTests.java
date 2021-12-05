package edu.usc.cs.game;

import edu.usc.cs.game.dao.PlayerRepository;
import edu.usc.cs.game.model.Player;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class GameApplicationTests {
	@Autowired
	private TestEntityManager entityManager;
	@Autowired
	private PlayerRepository playerRepository;

	@Test
	void contextLoads() {
	}


}
