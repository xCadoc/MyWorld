package myworld.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import myworld.dao.BookRepository;

import myworld.model.Book;

@Service
@Transactional
public class BookService {
	
	@Autowired
	private final BookRepository bookRepository;

	public BookService(BookRepository bookRepository) {
		this.bookRepository = bookRepository;
	}
	
	public List<Book> findAll() {
		List<Book> books = new ArrayList<Book>();
		for (Book book : bookRepository.findAll()) {
			books.add(book);
		}
		return books;
	}
	
	public void save(Book book) {
		bookRepository.save(book);
	}
	
	public void deleteBookById(int id) {
		bookRepository.deleteById(id);
	}
}
