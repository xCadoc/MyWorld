package myworld.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;

import myworld.model.Book;
@Repository
public class BookRepository {
	@Autowired
	private DynamoDBMapper mapper;
	
	public List<Book> findAll() {
		ArrayList<Book> list = new ArrayList<Book>();
		list.add((Book) mapper.load(Book.class, "1"));
			
		return list;
		//return mapper.scan(Book.class, new DynamoDBScanExpression());
	}
}
