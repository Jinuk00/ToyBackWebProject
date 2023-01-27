package com.JinWook.Toy.WebService.JinWookWebPj.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RootController {

	@GetMapping(value = "/api/hello")
	public String root(){
		return "연동";
	}
}
