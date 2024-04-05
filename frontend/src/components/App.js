import { useSelector } from "react-redux";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import { LogoutPage } from "../pages/LogoutPage";
import NotesPage from "../pages/NotesPage";
import { SignupPage } from "../pages/SignupPage";
import RequireAuth from "./RequireAuth";

function App() {
	const isLoggedIn = useSelector((state) => state.auth.loggedIn);

	const renderNavLinks = () => {
		return isLoggedIn ? (
			<>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/logout">Logout</Link>
				</li>
			</>
		) : (
			<>
				<li>
					<Link to="/login">Login</Link>
				</li>
				<li>
					<Link to="/signup">Signup</Link>
				</li>
			</>
		);
	};

	return (
		<div className="App">
			<BrowserRouter>
				<ul>{renderNavLinks()}</ul>
				<Routes>
					<Route
						index
						element={
							<RequireAuth>
								<NotesPage />
							</RequireAuth>
						}
					/>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/signup" element={<SignupPage />} />
					<Route path="/logout" element={<LogoutPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
