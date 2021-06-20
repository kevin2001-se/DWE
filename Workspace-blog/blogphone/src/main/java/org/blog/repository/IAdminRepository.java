package org.blog.repository;

import org.blog.model.Administrador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAdminRepository extends JpaRepository<Administrador, Long>{
	public Administrador findByUsername(String username);
}
