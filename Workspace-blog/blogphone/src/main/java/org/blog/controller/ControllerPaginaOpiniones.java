package org.blog.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ControllerPaginaOpiniones {

	@GetMapping("admin/opiniones")
	public String paginaOpiniones(Model model) {
		model.addAttribute("opiniones", true);
		return "administrador/opinion";
	}
	
}
