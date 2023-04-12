import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import NotesPage from "../pages/NotesPage";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/login">Login</Link>
					</li>
				</ul>
				<Routes>
					<Route index element={<NotesPage />} />
					<Route path="/login" element={<LoginPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
