import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import { LogoutPage } from "../pages/LogoutPage";
import NotesPage from "../pages/NotesPage";
import { SignupPage } from "../pages/SignupPage";
import RequireAuth from "./RequireAuth";

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
					<li>
						<Link to="/signup">Signup</Link>
					</li>
					<li>
						<Link to="/logout">Logout</Link>
					</li>
				</ul>
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
