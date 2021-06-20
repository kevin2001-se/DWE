package org.blog.controller;

import org.blog.repository.IAdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ControllerPaginaInicioAdmin {

	@Autowired
	private IAdminRepository repo;
	
	//private ICategoriaRepository repoC;
	
	@GetMapping("/admin")
    public String paginaAdministrador(Model model) {
        //validar pagina
        model.addAttribute("inicio",true);
        model.addAttribute("administradores", repo.count());
        //model.addAttribute("categorias", repoC.count());
        return "administrador/inicio";
    }

	
}
