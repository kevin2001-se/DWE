package org.blog.security;

import org.blog.model.Administrador;
import org.blog.repository.IAdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.User.UserBuilder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AdminDetailsService implements UserDetailsService{

	@Autowired
	private IAdminRepository repo;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Administrador user = repo.findByUsername(username);
		
		UserBuilder builder = null;
		
		if (user != null) {
			builder = User.withUsername(username);
			builder.disabled(false);
			builder.password(user.getPassword());
			builder.authorities(new SimpleGrantedAuthority("ROLE_ADMIN"));
		} else {
			throw new UsernameNotFoundException("Administrador no encontrado");
		}
		return builder.build();
	}

}
