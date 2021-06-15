package org.CiberPhone.model;

public class administrador {

private int codigo;
private String nombre;
private String Correo;
private String contraseña;
private String usuario;
private String apellido;
private int tipo;
private String fechaCreada;

@Override
public String toString() {
	return "administrador [codigo=" + codigo + ", nombre=" + nombre + ", Correo=" + Correo + ", contraseña="
			+ contraseña + ", usuario=" + usuario + ", apellido=" + apellido + ", tipo=" + tipo + ", fechaCreada="
			+ fechaCreada + "]";
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
public String getCorreo() {
	return Correo;
}
public void setCorreo(String correo) {
	Correo = correo;
}
public String getContraseña() {
	return contraseña;
}
public void setContraseña(String contraseña) {
	this.contraseña = contraseña;
}
public String getUsuario() {
	return usuario;
}
public void setUsuario(String usuario) {
	this.usuario = usuario;
}
public String getApellido() {
	return apellido;
}
public void setApellido(String apellido) {
	this.apellido = apellido;
}
public int getTipo() {
	return tipo;
}
public void setTipo(int tipo) {
	this.tipo = tipo;
}
public String getFechaCreada() {
	return fechaCreada;
}
public void setFechaCreada(String fechaCreada) {
	this.fechaCreada = fechaCreada;
}
	
	
	
	
	
	
	
}
