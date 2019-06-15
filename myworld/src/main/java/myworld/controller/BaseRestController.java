package myworld.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

import myworld.model.Book;
import myworld.service.BookService;

@RestController
public class BaseRestController {

	@Autowired
	private BookService bookService;
	
	@GetMapping("/rest")
	public String hello() {
		return "Hello rest!";
	}
	
	@GetMapping("/rest/book/all-books")
	public String allBooks() {
		return new Gson().toJson(bookService.findAll());

	}
	
	@GetMapping("/rest/book/save")
	public String saveBook(@RequestParam String name, @RequestParam String desc) {
		bookService.save(new Book(name, desc, new Date(), new Date()));
		return "Book saved!";
	}
	
	@GetMapping("/rest/book/delete")
	public String deleteBookById(@RequestParam int id) {
		bookService.deleteBookById(id);
		return "Book deleted!";
	}
}
