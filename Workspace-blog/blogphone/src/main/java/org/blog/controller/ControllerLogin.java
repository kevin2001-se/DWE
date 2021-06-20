package org.blog.controller;

import org.blog.model.Administrador;
import org.blog.service.IAdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ControllerLogin {
	
	@GetMapping("/auth/login")
	public String login(Model model) {
		model.addAttribute("admin", new Administrador());
		return "login";
	}
	
}
