package org.CiberPhone.model;

public class cliente {

private String nombre;
private String Apellido;
private String correo;
private String contraseña;
private int tipo;
private String FechaCreada;




@Override
public String toString() {
	return "cliente [nombre=" + nombre + ", Apellido=" + Apellido + ", correo=" + correo + ", contraseña=" + contraseña
			+ ", tipo=" + tipo + ", FechaCreada=" + FechaCreada + "]";
}
public String getNombre() {
	return nombre;
}
public void setNombre(String nombre) {
	this.nombre = nombre;
}
public String getApellido() {
	return Apellido;
}
public void setApellido(String apellido) {
	Apellido = apellido;
}
public String getCorreo() {
	return correo;
}
public void setCorreo(String correo) {
	this.correo = correo;
}
public String getContraseña() {
	return contraseña;
}
public void setContraseña(String contraseña) {
	this.contraseña = contraseña;
}
public int getTipo() {
	return tipo;
}
public void setTipo(int tipo) {
	this.tipo = tipo;
}
public String getFechaCreada() {
	return FechaCreada;
}
public void setFechaCreada(String fechaCreada) {
	FechaCreada = fechaCreada;
}
	
	
	
	
	
	
}
