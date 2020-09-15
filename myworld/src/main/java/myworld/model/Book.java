package myworld.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.boot.autoconfigure.domain.EntityScan;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAutoGeneratedKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;

// TODO: https://www.baeldung.com/spring-data-dynamodb
@DynamoDBTable(tableName = "books-master") // TODO: replace with books-XXX from properties
@Entity
public class Book implements Serializable {
	private static final long serialVersionUID = 1L;

	private String id;
	private String isbn;
	private String name;

	public Book(String isbn, String name) {
		this.isbn = isbn;
		this.name = name;
	}

	@Id
	@DynamoDBHashKey
	@DynamoDBAutoGeneratedKey
	public String getId() {
		return id;
	}

	@DynamoDBAttribute
	public String getIsbn() {
		return isbn;
	}

	@DynamoDBAttribute
	public String getName() {
		return name;
	}

	public void setId(String id) {
		this.id = id;
	}

	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}

	public void setName(String name) {
		this.name = name;
	}
}
