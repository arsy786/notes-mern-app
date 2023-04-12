import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotes } from "../stores/notesReducer";
import CreateForm from "./CreateForm";
import Notes from "./Notes";
import UpdateForm from "./UpdateForm";

function App() {
	// Selector
	const notes = useSelector((state) => state.notes.notes);

	// Dispatch
	const dispatch = useDispatch();

	// Use Effect
	useEffect(() => {
		dispatch(fetchNotes());
	}, [notes, dispatch]);

	return (
		<div className="App">
			<Notes />
			<UpdateForm />
			<CreateForm />
		</div>
	);
}

export default App;
