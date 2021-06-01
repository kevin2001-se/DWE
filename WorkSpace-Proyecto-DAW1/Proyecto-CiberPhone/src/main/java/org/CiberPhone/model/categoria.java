package org.CiberPhone.model;

public class categoria {

	private int codigo;
	private String nombre;
	
	
	
	@Override
	public String toString() {
		return "categoria [codigo=" + codigo + ", nombre=" + nombre + "]";
	}
	public int getCodigo() {
		return codigo;
	}
	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	
	
}
