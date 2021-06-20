package org.blog.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ControllerPaginasArticulos {

	@GetMapping("admin/articulos")
	public String paginaArticulos(Model model) {
		model.addAttribute("articulos", true);
		return "administrador/articulo";
	}
	
}
