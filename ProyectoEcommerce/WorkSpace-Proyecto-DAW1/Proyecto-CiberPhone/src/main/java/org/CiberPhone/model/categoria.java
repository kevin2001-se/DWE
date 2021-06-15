package org.CiberPhone.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity  //clasre catefotri -> tabña  de bd
@Table(name = "tb_categoria")
public class categoria {

	@Id
	@Column(name = "id_catepro")
	private String codigo;
	
	
	@Column(name = "nom_cate" )
	private String nombre;
	
	
	
	@Override
	public String toString() {
		return "categoria [codigo=" + codigo + ", nombre=" + nombre + "]";
	}
	public String getCodigo() {
		return codigo;
	}
	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	
	
}
