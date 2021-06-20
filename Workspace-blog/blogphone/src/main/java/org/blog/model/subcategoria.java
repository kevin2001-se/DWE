package org.blog.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "subcategoria")
public class subcategoria implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String subcate;
	
	@ManyToOne
	private categoria categ;

	
	public categoria getCateg() {
		return categ;
	}
	public void setCateg(categoria categ) {
		this.categ = categ;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getSubcate() {
		return subcate;
	}
	public void setSubcate(String subcate) {
		this.subcate = subcate;
	}

	public subcategoria(Long id, String subcate, categoria categ) {
		super();
		this.id = id;
		this.subcate = subcate;
		this.categ = categ;
	}

	public subcategoria() {
		super();
	}

	private static final long serialVersionUID = 1L;
}
