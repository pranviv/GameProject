import edu.usc.cs.game.dao.PlayerRepository;
import edu.usc.cs.game.model.Player;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;


@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(false)
@DataJpaTest
public class PlayerRepositoryTests {

    @Autowired
    private TestEntityManager entityManager;
    @Autowired
    private PlayerRepository playerRepository;

    @Test
    public void testCreateUser() {
        Player player = new Player("Roger");
        Player savedPlayer = playerRepository.save(player);
        Player existPlayer = entityManager.find(Player.class, savedPlayer.getId());

        //assertThat(player.getName()).isEqualTo(existPlayer.getName());

    }
}
