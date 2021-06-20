package org.blog.controller;

import org.blog.repository.repositorySub;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ControllerSubcategoria {

	@Autowired
	private repositorySub subrepo;
	
	@GetMapping("admin/subcategoria")
	public String listaSubcategoria(Model model) {
		
		model.addAttribute("subcategoria", true);
		model.addAttribute("subcategorias", subrepo.findAll());
		
		return "administrador/subcategoria";
		
	}

	
}
