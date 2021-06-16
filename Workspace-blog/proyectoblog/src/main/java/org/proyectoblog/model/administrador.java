package org.proyectoblog.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity  
@Table(name = "administrador")
public class administrador {
	
	@Id
	@Column(name = "id_admin")
	private int codigo;

	@Column(name = "nombre")
	private String nombre_ad;

	@Column(name = "apellido")
	private String apellido_ad;

	@Column(name = "correo")
	private String correo_ad;

	@Column(name = "contrasena")
	private String contrasena_ad;

	@Override
	public String toString() {
		return "administrador [codigo=" + codigo + ", nombre_ad=" + nombre_ad + ", apellido_ad=" + apellido_ad
				+ ", correo_ad=" + correo_ad + ", contrasena_ad=" + contrasena_ad + "]";
	}

	public int getCodigo() {
		return codigo;
	}

	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}

	public String getNombre_ad() {
		return nombre_ad;
	}

	public void setNombre_ad(String nombre_ad) {
		this.nombre_ad = nombre_ad;
	}

	public String getApellido_ad() {
		return apellido_ad;
	}

	public void setApellido_ad(String apellido_ad) {
		this.apellido_ad = apellido_ad;
	}

	public String getCorreo_ad() {
		return correo_ad;
	}

	public void setCorreo_ad(String correo_ad) {
		this.correo_ad = correo_ad;
	}

	public String getContrasena_ad() {
		return contrasena_ad;
	}

	public void setContrasena_ad(String contrasena_ad) {
		this.contrasena_ad = contrasena_ad;
	}
	
	
	
}
