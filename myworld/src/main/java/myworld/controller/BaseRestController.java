package myworld.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

import myworld.repository.BookRepository;
import myworld.model.Book;

@RestController
public class BaseRestController {

	@Autowired
	private BookRepository bookRepository;
	
	@GetMapping("/rest")
	public String hello() {
		return "Hello rest!";
	}
	
	@GetMapping("/rest/book/all-books")
	public String allBooks() {
		return new Gson().toJson(bookRepository.findAll());

	}
	
	/*
	@GetMapping("/rest/book/save")
	public String saveBook(@RequestParam String isbn, @RequestParam String title) {
		bookRepository.save(new Book(isbn, title));
		return "Book saved!";
	}
	
	@GetMapping("/rest/book/delete")
	public String deleteBookById(@RequestParam int id) {
		bookRepository.deleteBookById(id);
		return "Book deleted!";
	}
	*/
}
