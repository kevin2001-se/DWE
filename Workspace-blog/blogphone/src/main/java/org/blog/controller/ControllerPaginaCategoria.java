package org.blog.controller;

import java.util.Optional;

import org.blog.model.categoria;
import org.blog.repository.ICategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class ControllerPaginaCategoria {

	@Autowired
	private ICategoriaRepository repoC;
	
    @GetMapping("admin/categoria")
    public String listaCatergoria(Model model) {
        //validar pagina
        model.addAttribute("categoria",true);
        model.addAttribute("categoriaPost", repoC.findAll());
        return "administrador/categoria";
    }
    
	
	@GetMapping("admin/registroCategoria")
	public String RegistroCategoria(Model model) {
		model.addAttribute("categoria",true);
		model.addAttribute("categoriaPost",new categoria());
		return "administrador/registro-categoria";
	}
	
	@PostMapping("admin/grabarCategoria")
	public String GrabarCategoria(@ModelAttribute categoria cate, RedirectAttributes atributte) {
    	System.out.println(cate);
    	atributte.addFlashAttribute("success_registro", "Se Registro Correctamente la Categoria");
    	repoC.save(cate);  
		return "redirect:/admin/categoria";
	}
	
    @GetMapping("admin/actualizarCategoria/{id}")
    public String UpdateCategoria(Model model,@PathVariable Long id) {
        //validar pagina
    	Optional<categoria>cate = repoC.findById(id);
    	System.out.println(cate);
    	model.addAttribute("cate", cate);
        model.addAttribute("categoriaPost",true);
        return "administrador/update-categoria";
    }
    
    
    @PostMapping("admin/updateCategoria")
	public String updateAdmin(@ModelAttribute categoria cate,  RedirectAttributes atributte) {
    	System.out.println(cate);
    	atributte.addFlashAttribute("success_update", "Se Actualizo Correctamente la Categoria");
    	repoC.save(cate);  
		return "redirect:/admin/categoria";
	}
    
    @GetMapping("admin/eliminarCategoria/{id}")
    public String deleteCategoria(Model model, @PathVariable Long id) {
    	repoC.deleteById(id);
    	return "redirect:/admin/categoria";
    }
	
}
