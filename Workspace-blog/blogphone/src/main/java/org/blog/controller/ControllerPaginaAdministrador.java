package org.blog.controller;

import java.util.Optional;

import org.blog.model.Administrador;
import org.blog.repository.IAdminRepository;
import org.blog.service.IAdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class ControllerPaginaAdministrador {
	
	@Autowired
	private IAdminService repoA;
	
    @Autowired
    private IAdminRepository repo;
    
    /*Listar Administrador*/

    @GetMapping("admin/administrador")
    public String listaAdministrador(Model model) {
        //validar pagina
        model.addAttribute("administrador",true);
        model.addAttribute("administrador", repo.findAll());
        return "administrador/administrador";
    }
    
    /*Rgeistrar Administrador*/
    
    @GetMapping("admin/registroAdmin")
    public String listaRegistroAdministrador(Model model) {
        //validar pagina
    	model.addAttribute("Admin", new Administrador());
        model.addAttribute("registroAdmin",true);
        return "administrador/registro-admin";
    }
    
    @PostMapping("admin/grabarAdmin")
	public String guardarAdmin(@Validated @ModelAttribute Administrador Admin,  RedirectAttributes atributte, BindingResult result , Model model) {
    	
		if (result.hasErrors()) {
			return "redirect:/auth/registro";
		}else {
			model.addAttribute("admin", repoA.registrarAdmin(Admin));
			atributte.addFlashAttribute("success_registro", "Se Registro Correctamente el Administrador");
		}
		
		return "redirect:/admin/administrador";
	}
    
    /*Actualizar Administrador*/
    
    @GetMapping("admin/actualizarAdmin/{id}")
    public String listaUpdateAdministrador(Model model,@PathVariable Long id) {
        //validar pagina
    	Optional<Administrador>admi = repo.findById(id);
    	model.addAttribute("Admin", admi);
        model.addAttribute("registroAdmin",true);
        return "administrador/update-admin";
    }
    
    
    @PostMapping("admin/updateAdmin")
	public String updateAdmin(@ModelAttribute Administrador Admin,  RedirectAttributes atributte) {
    	System.out.println(Admin);
    	atributte.addFlashAttribute("success_update", "Se Actualizo Correctamente el Administrador");
		repo.save(Admin);  
		return "redirect:/admin/administrador";
	}
    
    /*Eliminar Administrador*/
    
    @GetMapping("admin/eliminarAdmin/{id}")
    public String deleteAdmin(Model model, @PathVariable Long id) {
    	repo.deleteById(id);
    	return "redirect:/admin/administrador";
    }
}
