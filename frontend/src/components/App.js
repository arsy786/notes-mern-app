import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchNotes } from "../stores/notesReducer";
import CreateForm from "./CreateForm";
import Notes from "./Notes";
import UpdateForm from "./UpdateForm";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchNotes());
	}, [dispatch]);

	return (
		<div className="App">
			<Notes />
			<UpdateForm />
			<CreateForm />
		</div>
	);
}

export default App;
