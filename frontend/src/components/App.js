import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import { LogoutPage } from "../pages/LogoutPage";
import NotesPage from "../pages/NotesPage";
import { SignupPage } from "../pages/SignupPage";
import { NavBar } from "./NavBar";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<NotesPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/signup" element={<SignupPage />} />
					<Route path="/logout" element={<LogoutPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
