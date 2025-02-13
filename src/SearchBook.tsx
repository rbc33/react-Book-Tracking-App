import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Book } from "./Constraints";
import { search } from "./BooksAPI";
import List from "./List";

const SearchBook = () => {
	const [books, setBooks] = useState<Book[]>([]);
	const [query, setQuery] = useState("");

	useEffect(() => {
		let isMounted = true; // Track if the component is mounted

		const searchBooks = async () => {
			if (query.trim()) {
				try {
					const results = await search(query, 20);
					if (isMounted) {
						// Only update state if mounted
						setBooks(Array.isArray(results) ? results : []);
					}
				} catch (error) {
					if (isMounted) {
						console.error("Error searching books:", error);
						setBooks([]);
					}
				}
			} else if (isMounted) {
				setBooks([]);
			}
		};

		searchBooks();

		return () => {
			isMounted = false; // Cleanup to set flag false on unmount
		};
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
