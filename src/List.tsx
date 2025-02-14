import BookChanger from "./BookChanger";
import { Book, bookShelfs } from "./Constraints";

type ListBooksProps = {
	books: Book[];
	onChange: (book: Book, val: string) => void;
	shelfVal?: string;
};
const List = ({ books, shelfVal, onChange }: ListBooksProps) => {
	if (shelfVal) books = books.filter((b) => b.shelf === shelfVal);

	return (
		<ol className="books-grid">
			{books.map((book) => (
				<li key={book.id}>
					<div className="book">
						<div className="book-top">
							{book.imageLinks && (
								<div
									className="book-cover"
									style={{
										width: 128,
										height: 193,
										backgroundImage: `url(${book.imageLinks.thumbnail})`,
									}}
								></div>
							)}
							<BookChanger
								shelfs={bookShelfs}
								book={book}
								onChange={(book: Book, val: string) => onChange(book, val)}
							/>
						</div>
						<div className="book-title">{book.title}</div>
						<div className="book-authors">{book.authors?.join(", ")}</div>
					</div>
				</li>
			))}
		</ol>
	);
};

export default List;
