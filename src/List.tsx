import BookChanger from "./BookChanger";
import { Book, bookShelfs } from "./Constraints";
import { update } from "./BooksAPI";

type ListBooksProps = {
	books: Book[];
	onChange?: () => void;
	shelfVal?: string;
};
const List = ({ books, shelfVal, onChange }: ListBooksProps) => {
	if (shelfVal) books = books.filter((b) => b.shelf === shelfVal);
	const handleChange = (bookID: string, val: string) => {
		if (onChange) {
			update(bookID, val).then(() => onChange());
		} else {
			update(bookID, val);
		}
	};
	return (
		<ol className="books-grid">
			{books.map((book) => (
				<li key={book.id}>
					<div key={`${book.id}-book`} className="book">
						<div key={`${book.id}-top`} className="book-top">
							<div
								key={`${book.id}-cover`}
								className="book-cover"
								style={{
									width: 128,
									height: 193,
									backgroundImage: `url(${book.imageLinks.thumbnail})`,
								}}
							></div>
							<BookChanger
								shelfs={bookShelfs}
								handleChange={(val) => handleChange(book.id!, val)}
							/>
						</div>
						<div key={`${book.id}-title`} className="book-title">
							{book.title}
						</div>
						<div key={`${book.id}-authors`} className="book-authors">
							{book.authors?.map((a) => a)}
						</div>
					</div>
				</li>
			))}
		</ol>
	);
};

export default List;
