import React, {Component} from 'react';

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
     			<div class="jumbotron">
					<div class="container">
			        	<h1 class="display-3">My Books!</h1>
						<p>This selection of books I've read. Here I also review and rate them.</p>
					</div>
				</div>
					<div class="container">
						{books.map(book => (
							<div class="card border-secondary mb-3" style={{maxWidth: '20rem'}}>
								<div class="card-header">Author</div>
								<div class="card-body">
									<h4 class="card-title">${book.name}</h4>
									<p class="card-text">${book.description}</p>
							    	<p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
								</div>
							</div>
							
						))};
					</div> 
		        }
		    </div>
		  );
	}
}

export default Books;


