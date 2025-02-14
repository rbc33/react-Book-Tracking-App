import { useEffect, useState } from "react";
import { getAll } from "./BooksAPI";
import { Book, Shelf, bookShelfs } from "./Constraints";
import List from "./List";
type BookShelfProps = {
	shelfs?: Shelf[];
};
const BookShelf = ({ shelfs = bookShelfs }: BookShelfProps) => {
	const [books, setBooks] = useState<Book[]>([]);

	useEffect(() => {
		const getBooks = async () => {
			try {
				const apiBooks = await getAll();
				if (apiBooks !== undefined) {
					setBooks(apiBooks);
				}
			} catch (error) {
				console.error("Error fetching books:", error);
			}
		};

		getBooks();
		// }, [hasChanged]);
	}, []);
	const handleChange = (book: Book, val: string) => {
		setBooks([
			...books.filter((b) => b.id !== book.id),
			{ ...book, shelf: val },
		]);
	};
	return (
		<>
			{shelfs.map((shelf) => (
				<div key={shelf.value} className="bookshelf">
					<h2 className="bookshelf-title">{shelf.name}</h2>
					<div className="bookshelf-books">
						<List
							shelfVal={shelf.value}
							books={books}
							onChange={(book, val) => handleChange(book, val)}
						/>
					</div>
				</div>
			))}
		</>
	);
};

export default BookShelf;
