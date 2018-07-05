package com.valaxing.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class ValaxingController {

	@RequestMapping(value={"/", "/home"})
	public String index(Model model, @RequestParam(value = "lang", required = false) String language) {
		if(language!=null && !language.isEmpty()){
			model.addAttribute("lang", language);
		}
		return "index";
	}
	
	@RequestMapping("/flight")
	public String flight(Model model, @RequestParam(value = "lang", required = false) String language) {
		if(language!=null && !language.isEmpty()){
			model.addAttribute("lang", language);
		}
		return "flight";
	}
	
	@RequestMapping("/hotel")
	public String hotel(Model model, @RequestParam(value = "lang", required = false) String language) {
		if(language!=null && !language.isEmpty()){
			model.addAttribute("lang", language);
		}
		return "hotel";
	}
	
	@RequestMapping("/activity")
	public String activity(Model model, @RequestParam(value = "lang", required = false) String language) {
		if(language!=null && !language.isEmpty()){
			model.addAttribute("lang", language);
		}
		return "activity";
	}
	
	@RequestMapping("/login")
	public String login(Model model, @RequestParam(value = "lang", required = false) String language) {
		if(language!=null && !language.isEmpty()){
			model.addAttribute("lang", language);
		}
		return "login";
	}
}
