package org.blog.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "categoriapost")
public class categoria implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String categorias;
	
	@OneToMany(mappedBy = "categ")
	private List<subcategoria> sub;
	
	
	public List<subcategoria> getSub() {
		return sub;
	}
	public void setSub(List<subcategoria> sub) {
		this.sub = sub;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getCategorias() {
		return categorias;
	}
	public void setCategorias(String categorias) {
		this.categorias = categorias;
	}
	
	public categoria(Long id, String categorias, List<subcategoria> sub) {
		super();
		this.id = id;
		this.categorias = categorias;
		this.sub = sub;
	}
	public categoria() {
		super();
	}
	
	private static final long serialVersionUID = 1L;
	
}