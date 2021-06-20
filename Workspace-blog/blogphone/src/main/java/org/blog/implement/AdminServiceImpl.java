package org.blog.implement;

import org.blog.model.Administrador;
import org.blog.repository.IAdminRepository;
import org.blog.service.IAdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements IAdminService{

	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@Autowired
	private IAdminRepository repo;

	@Override
	public Administrador findByAdministrador(String username) {
		// TODO Auto-generated method stub
		return repo.findByUsername(username);
	}

	@Override
	public Administrador registrarAdmin(Administrador a) {
		a.setPassword(passwordEncoder.encode(a.getPassword()));
		return repo.save(a);
	}
	
	
	
}
