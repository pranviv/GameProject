package edu.usc.cs.game.config;

import edu.usc.cs.game.dao.GameDao;
import edu.usc.cs.game.service.CustomUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import javax.sql.DataSource;
import java.util.Arrays;

@Configuration
@EnableWebSecurity(debug = true)

public class WebSecurityConfig extends WebSecurityConfigurerAdapter {


	@Autowired
	private DataSource dataSource;

	@Bean
	public GameDao gamedao(){
		return new GameDao();
	}

	@Bean
	public UserDetailsService userDetailsService(){
		return new CustomUserDetailsService();
	}

	public BCryptPasswordEncoder passwordEncoder(){
		return new BCryptPasswordEncoder();
	}

	@Bean
	public DaoAuthenticationProvider authenticationProvider(){
		DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
		authProvider.setUserDetailsService(userDetailsService());
		authProvider.setPasswordEncoder(passwordEncoder());
		return authProvider;
	}

	@Override
	protected void configure (AuthenticationManagerBuilder auth) throws Exception {
		auth.authenticationProvider(authenticationProvider());

	}

	@Override
	protected void configure(HttpSecurity httpSecurity) throws Exception {
		httpSecurity.cors().and().csrf().disable()
				.authorizeRequests()
				.antMatchers("/h2-console/**", "/register", "/registration", "/actuator/**", "/process_register", "/game/users/*", "/home/loginAuth", "/game/games/deck", "/game/users/garg.pranav@gmail.com")
				.permitAll()
				.anyRequest()
				.authenticated()
				.and()
				.formLogin()
				.usernameParameter("email")
				//.defaultSuccessUrl("/principal")
				.defaultSuccessUrl("/landing")
				.and()
				.logout()
				.logoutSuccessUrl("/")
				.permitAll();
		httpSecurity.csrf()
				.ignoringAntMatchers("/h2-console/**", "/api/**", "/game/users/garg.pranav@gmail.com");
		httpSecurity.headers()
				.frameOptions()
				.sameOrigin();

	}




//	@Autowired
//	private DataSource dataSource;

//	@Bean
//	public PasswordEncoder passwordEncoder() {
//		return new BCryptPasswordEncoder();
//	}

	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth)
			throws Exception {
		PasswordEncoder encoder = new BCryptPasswordEncoder();
		auth.jdbcAuthentication()
				.dataSource(dataSource)
				.withDefaultSchema()
				.withUser(User.withUsername("user")
						.password(encoder.encode("pass"))
						.roles("USER"));

	}

	@Bean
	CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration();
		configuration.setAllowedOrigins(Arrays.asList("*"));
		configuration.setAllowedMethods(Arrays.asList("*"));
		configuration.setAllowedHeaders(Arrays.asList("*"));
		configuration.setAllowCredentials(true);
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);
		return source;
	}

}