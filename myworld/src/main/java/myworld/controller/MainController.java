package myworld.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import myworld.service.BookService;

@Controller
public class MainController {
	

	@Autowired
	private BookService bookService;
	
	@GetMapping("/")
	public String home(HttpServletRequest request) {
		return "index";
	}
	
	@GetMapping("/book")
	public String allBooks(HttpServletRequest request) {
		//request.setAttribute("books", bookService.findAll());
		return "book";
	}
}
