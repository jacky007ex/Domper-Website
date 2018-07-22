package com.koala.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainViewController {

	@RequestMapping(value={"/", "/home"})
	public String index(Model model, @RequestParam(value = "lang", required = false) String language) {
		if(language!=null && !language.isEmpty()){
			model.addAttribute("lang", language);
		}
		return "index";
	}
}
