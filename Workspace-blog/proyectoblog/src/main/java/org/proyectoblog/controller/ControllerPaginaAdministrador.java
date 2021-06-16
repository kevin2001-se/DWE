package org.proyectoblog.controller;

import org.proyectoblog.model.administrador;
import org.proyectoblog.repository.repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class ControllerPaginaAdministrador {
	
	@GetMapping("/admin")
    public String paginaAdministrador(Model model) {
        //validar pagina
        model.addAttribute("inicio",true);
        return "administrador/inicio";
    }

    @Autowired
    private repository repo;

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
        model.addAttribute("administrador", repo.findAll());
        return "administrador/administrador";
    }
    
    @GetMapping("admin/registroAdmin")
    public String listaRegistroAdministrador(Model model) {
        //validar pagina
    	model.addAttribute("Admin", new administrador());
        model.addAttribute("registroAdmin",true);
        return "administrador/registro-admin";
    }
    
    @PostMapping("admin/grabarAdmin")
	public String guardarAdmin(@ModelAttribute administrador Admin,  RedirectAttributes atributte) {
    	System.out.println(Admin);
    	atributte.addFlashAttribute("success_registro", "Se Registro Correctamente el Administrador");
		repo.save(Admin);  
		return "redirect:/admin/administrador";
	}
    
    @GetMapping("admin/eliminarAdmin/{id}")
    public String deleteAdmin(Model model, @PathVariable int id) {
    	repo.deleteById(id);
    	return "redirect:/admin/administrador";
    }
    
}
