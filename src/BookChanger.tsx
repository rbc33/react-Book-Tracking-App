import { update } from "./BooksAPI";
import { Book, Shelf } from "./Constraints";

type BookChangerProps = {
	shelfs: Shelf[];
	book: Book;
	onChange: (book: Book, val: string) => void;
};

const BookChanger = ({ shelfs, book, onChange }: BookChangerProps) => {
	const handleChange = (val: string) => {
		update(book.id!, val).then(() => onChange(book, val));
	};
	return (
		<div className="book-shelf-changer">
			<select
				value={book.shelf}
				onChange={(e) => {
					handleChange(e.target.value);
				}}
				defaultValue={book.shelf}
			>
				<option value="none" disabled>
					Move to...
				</option>
				{shelfs.map((s) => (
					<option key={s.value} value={s.value}>
						{s.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default BookChanger;
