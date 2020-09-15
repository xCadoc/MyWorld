package myworld.dao;

import java.util.Optional;

import org.socialsignin.spring.data.dynamodb.repository.EnableScan;

import org.springframework.data.repository.CrudRepository;

import myworld.model.Book;
@EnableScan
public interface BookRepository extends CrudRepository<Book, Integer>{

	Optional<Book> findById(String id);
}
