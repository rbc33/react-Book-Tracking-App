import { Route, Routes } from "react-router-dom";
import "./App.css";
import SearchBook from "./SearchBook";
import ListBooks from "./ListBooks";

function App() {
	const token = localStorage.token;
	console.log(token);
	return (
		<Routes>
			<Route path="/search" element={<SearchBook />} />
			<Route path="/" element={<ListBooks />} />
		</Routes>
	);
}

export default App;
