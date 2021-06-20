package org.blog.service;

import org.blog.model.Administrador;

public interface IAdminService {
	public Administrador findByAdministrador(String username);
	public Administrador registrarAdmin(Administrador a);
}
