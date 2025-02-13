import { useEffect, useState } from "react";
import { getAll } from "./BooksAPI";
import { Book, Shelf, bookShelfs } from "./Constraints";
import List from "./List";
type BookShelfProps = {
	shelfs?: Shelf[];
};
const BookShelf = ({ shelfs = bookShelfs }: BookShelfProps) => {
	const [books, setBooks] = useState<Book[]>([]);
	const [hasChanged, setHasChanged] = useState(false);

	useEffect(() => {
		let isMounted = true;

		const getBooks = async () => {
			try {
				const apiBooks = await getAll();
				if (isMounted && apiBooks) {
					setBooks(Array.isArray(apiBooks) ? apiBooks : []);
				}
			} catch (error) {
				if (isMounted) {
					console.error("Error fetching books:", error);
					setBooks([]);
				}
			}
		};

		getBooks();

		return () => {
			isMounted = false;
		};
	}, [hasChanged]);

	return (
		<>
			{shelfs.map((shelf) => (
				<div key={shelf.value} className="bookshelf">
					<h2 className="bookshelf-title">{shelf.name}</h2>
					<div className="bookshelf-books">
						<List
							shelfVal={shelf.value}
							books={books}
							onChange={() => setHasChanged(!hasChanged)}
						/>
					</div>
				</div>
			))}
		</>
	);
};

export default BookShelf;
