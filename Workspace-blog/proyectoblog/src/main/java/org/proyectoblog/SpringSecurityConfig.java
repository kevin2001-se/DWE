package org.proyectoblog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.User.UserBuilder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class SpringSecurityConfig extends WebSecurityConfigurerAdapter{

	


	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests().antMatchers("/", "/css/**", "/img/**", "/js/**", "/admin").permitAll()
		.antMatchers("admin/categoria").hasAnyRole("ADMIN")
		.antMatchers("admin/administrador").hasAnyRole("ADMIN")
		.antMatchers("admin/registroAdmin").hasAnyRole("ADMIN")
		.antMatchers("admin/grabarAdmin").hasAnyRole("ADMIN")
		.antMatchers("admin/eliminarAdmin/").hasAnyRole("ADMIN")
		.anyRequest().authenticated()
		.and()
		   .formLogin().loginPage("/login")
		    .permitAll()
		.and()
		.logout().permitAll();
		
	}
	
	
	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Autowired
public void configurerGlobal(AuthenticationManagerBuilder builder) throws Exception{
		
		PasswordEncoder encoder = passwordEncoder();
		UserBuilder users =User.builder().passwordEncoder(encoder::encode);
		
		builder.inMemoryAuthentication()
		.withUser(users.username("admin").password("12345").roles("ADMIN", "USER"))
		.withUser(users.username("luis").password("12345").roles("USER"));
		
	
}	
	
	
	
}
