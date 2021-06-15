package org.CiberPhone.controller;
import org.CiberPhone.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

public class ControllerCategoria  {

	@GetMapping("/index")
	public String saludos(@RequestParam(name="", required=false, defaultValue="") String name, Model model) {
		//required=false(si esta vacio la variable txtNombre)
		//lo que hara este proceso
		//.........
		// envia atributos a la paginas

		
		//cambia a la pagina 
		return "index";
	}
	
	@Autowired
	private Icategoria repo;
	
	@GetMapping("/categoria")//este metodo lista la categoria
	public String listaCatergoria(Model model) {
		//model.addAttribute("lstCategoria", repo.findAll());
		//cambia a la pagina 
		return "categoria";
	}
	
}
