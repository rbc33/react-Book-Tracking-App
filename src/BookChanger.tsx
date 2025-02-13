import { Shelf } from "./Constraints";

type BookChangerProps = {
	shelfs: Shelf[];
	handleChange: (s: string) => void;
};

const BookChanger = ({ shelfs, handleChange }: BookChangerProps) => {
	// const onChange = (val: string) => {
	// 	update(bookID, val);
	// };
	return (
		<div className="book-shelf-changer">
			<select
				onChange={(e) => {
					handleChange(e.target.value);
				}}
				defaultValue={"none"}
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
