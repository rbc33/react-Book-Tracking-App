import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Book } from "./Constraints";
import { getAll, search, update } from "./BooksAPI";
import List from "./List";

const SearchBook = () => {
	const [books, setBooks] = useState<Book[]>([]);
	const [query, setQuery] = useState("");
	const [shelfBooks, setShelfBooks] = useState<Book[]>([]);

	// Fetch books currently on shelves when component mounts
	useEffect(() => {
		const fetchShelfBooks = async () => {
			try {
				const currentShelfBooks = await getAll();
				setShelfBooks(currentShelfBooks);
			} catch (error) {
				console.error("Error fetching shelf books:", error);
			}
		};

		fetchShelfBooks();
	}, []);

	// Search books based on query
	useEffect(() => {
		const searchBooks = async () => {
			if (query.trim()) {
				try {
					const searchResults = await search(query, 20);

					// Update search results with shelf information
					if (Array.isArray(searchResults)) {
						const updatedBooks = searchResults.map((searchBook) => {
							// Find if the search book exists on any shelf
							const bookFound = shelfBooks.find(
								(book) => book.id === searchBook.id
							);

							// Assign shelf value or 'none'
							return bookFound
								? { ...searchBook, shelf: bookFound.shelf }
								: { ...searchBook, shelf: "none" };
						});

						setBooks(updatedBooks);
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
	}, [query, shelfBooks]);

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	// Optional: Handle book shelf update
	const handleBookShelfChange = async (book: Book, newShelf: string) => {
		try {
			await update(book.id!, newShelf);

			// Update local state
			const updatedBooks = books.map((b) =>
				b.id === book.id ? { ...b, shelf: newShelf } : b
			);
			setBooks(updatedBooks);

			// Optionally, refresh shelf books
			const currentShelfBooks = await getAll();
			setShelfBooks(currentShelfBooks);
		} catch (error) {
			console.error("Error updating book shelf:", error);
		}
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
					{books && (
						<List
							books={books}
							onChange={(book, val) => handleBookShelfChange(book, val)}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default SearchBook;
