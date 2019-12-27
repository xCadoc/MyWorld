import React, {Component} from 'react';
import { CardDeck, Card, NavItem} from 'react-bootstrap';
import testCover from'./images/eragon_1.jpg';

class Books extends Component {

	constructor(props) {
		super(props);
		this.state = {
			books: [],
			isLoaded: false,
		}
	}
	
	componentDidMount() {
		fetch('http://localhost:8080/rest/book/all-books')
			.then(res => res.json())
			.then(json => {
				this.setState({
					books: json,
					isLoaded: true,
				})
			});
	}
	
	render() {
		var { books, isLoaded } = this.state;
	
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
					  {books.map(book => (
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
}

export default Books;


