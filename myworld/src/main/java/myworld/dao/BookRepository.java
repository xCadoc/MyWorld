package myworld.dao;

import org.springframework.data.repository.CrudRepository;

import myworld.model.Book;

public interface BookRepository extends CrudRepository<Book, Integer>{

}
