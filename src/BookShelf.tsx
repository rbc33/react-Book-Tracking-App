import { useEffect, useState } from "react";
import { getAll } from "./BooksAPI";
import { Book, Shelf, bookShelfs, initBooks } from "./Constraints";
import List from "./List";
type BookShelfProps = {
	shelfs?: Shelf[];
};
const BookShelf = ({ shelfs = bookShelfs }: BookShelfProps) => {
	const [books, setBooks] = useState<Book[]>(initBooks); // Estado local para los libros
	const [hasChanged, setHasChanged] = useState(false);

	useEffect(() => {
		const getBooks = async () => {
			try {
				const apiBooks = await getAll(); // Asegúrate de que getAll() esté definido y retorne un array de libros
				if (apiBooks !== undefined) {
					setBooks(apiBooks); // Actualiza el estado con los libros obtenidos
				}
			} catch (error) {
				console.error("Error fetching books:", error);
			}
		};

		getBooks(); // Llama a la función para obtener los libros

		return () => {
			// Aquí puedes limpiar cualquier efecto secundario si es necesario
		};
	}, [hasChanged]);
	// const handleChange = (bookID: string, val: string) => {
	// 	update(bookID, val).then(() => setHasChanged(!hasChanged));
	// };

	return (
		<>
			{shelfs.map((shelf) => (
				<div key={shelf.value} className="bookshelf">
					<h2 className="bookshelf-title">{shelf.name}</h2>

					<div key={`${shelf.value}-shelf`} className="bookshelf-books">
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
