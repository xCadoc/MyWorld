package myworld.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import myworld.service.BookService;

@Controller
public class MainController {
	

	@Autowired
	private BookService bookService;
	
	@GetMapping("/")
	public String home() {
		return "index";
	}
}
