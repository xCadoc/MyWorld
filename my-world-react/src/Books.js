import React, {useEffect, useState} from 'react';
import { CardDeck, Card, NavItem} from 'react-bootstrap';
import testCover from'./images/eragon_1.jpg';
import {API} from 'aws-amplify'

function Books () {

	const [bookData, updateBookData] = useState([])

	/*
	componentDidMount() {
		fetch('http://localhost:8080/rest/book/all-books')
			.then(res => res.json())
			.then(json => {
				this.setState({
					books: json,
					isLoaded: true,
				})
			});
	}*/
	
	async function callApi() {
		try {	
			const bookData = await API.get('book', '/book')
			console.log('bookData: ', bookData);
			updateBookData(bookData.book)
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		callApi()
	}, [])

	return (
		<div className="Books">
 			<div className="jumbotron">
				<div className="container">
		        	<h1 className="display-4">My Books!</h1>
					<p>This selection of books I've read. Here I also review and rate them.</p>
				</div>
			</div>
			<div className="container">
			  <CardDeck>
				  {bookData.map(book => (
					  <Card style={{maxWidth: '20rem'}}>
					      <Card.Img variant="top" src={testCover} />
					      <Card.Body>
					          <Card.Title>{book.name}</Card.Title>
					          <Card.Text>{book.description}</Card.Text>
					      </Card.Body>
					      <Card.Footer>
					          <small className="text-muted">Last updated 3 mins ago</small>
					      </Card.Footer>
					  </Card>
				  ))}
			  </CardDeck>
	    	</div>
	    </div>
	  );
}

export default Books;


