package org.proyectoblog.controller;

import org.proyectoblog.model.administrador;
import org.proyectoblog.repository.repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class ControllerPaginaAdministrador {
	
	@GetMapping("/admin")
    public String paginaAdministrador(Model model) {
        //validar pagina
        model.addAttribute("inicio",true);
        return "administrador/inicio";
    }

    @Autowired
    private repository  repo;

    @GetMapping("admin/categoria")
    public String listaCatergoria(Model model) {
        //validar pagina
        model.addAttribute("categoria",true);
        return "administrador/categoria";
    }

    @GetMapping("admin/administrador")
    public String listaAdministrador(Model model) {
        //validar pagina
        model.addAttribute("administrador",true);
        return "administrador/administrador";
    }
    
    @GetMapping("admin/registroAdmin")
    public String listaRegistroAdministrador(Model model) {
        //validar pagina
        model.addAttribute("registroAdmin",true);
        return "administrador/registro-admin";
    }
    
    @PostMapping("admin/grabar")
	public String guardarAdmin(@ModelAttribute administrador admin) {
		repo.save(admin);  
		return "administrador/registro-admin";
	}
    
}
