import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

const ListBooks = () => {
	return (
		<div key="app" className="app">
			<div key="list-books" className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<BookShelf />
					</div>
				</div>
				<div className="open-search">
					<Link to="/search">Add a book</Link>
				</div>
			</div>
		</div>
	);
};

export default ListBooks;
