import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Book } from "./Constraints";
import { search } from "./BooksAPI";
import List from "./List";

const SearchBook = () => {
	const [books, setBooks] = useState<Book[]>([]);
	const [query, setQuery] = useState("");

	useEffect(() => {
		const searchBooks = async () => {
			if (query.trim()) {
				try {
					const results = await search(query, 20);
					if (Array.isArray(results)) {
						setBooks(results);
					} else {
						setBooks([]);
					}
				} catch (error) {
					console.error("Error searching books:", error);
					setBooks([]);
				}
			} else {
				setBooks([]);
			}
		};

		searchBooks();
	}, [query]);

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	return (
		<div className="app">
			<div className="search-books">
				<div className="search-books-bar">
					<Link to="/" className="close-search">
						Close
					</Link>
					<div className="search-books-input-wrapper">
						<input
							type="text"
							placeholder="Search by title, author, or ISBN"
							value={query}
							onChange={handleSearchChange}
						/>
					</div>
				</div>
				<div className="search-books-results">
					{books && <List books={books} />}
				</div>
			</div>
		</div>
	);
};

export default SearchBook;
