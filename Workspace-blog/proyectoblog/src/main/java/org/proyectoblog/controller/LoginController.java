package org.proyectoblog.controller;

import java.security.Principal;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class LoginController {


		@GetMapping("/login")
		public String Iniciarlogin(@RequestParam(value="error", required=false) String error,
				Model model, Principal principal, RedirectAttributes flash) {
			
			if(principal != null) {
				flash.addFlashAttribute("info", "ya ha iniciado sesion anteriormente");
				//evita doble inicio de sesion
				return "redirect:/";
				
		}
			
			if(error != null) {
				model.addAttribute("error", "error en el login: Nombre de usuario o contraseña incorrecta");
			}
			
			
			return "/administrador/login";
		}
		
}
