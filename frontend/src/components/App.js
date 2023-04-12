import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	addNote,
	deleteNote,
	fetchNotes,
	setCreateForm,
	setNotes,
	setUpdateForm,
	updateNote,
} from "../stores/notesReducer";

function App() {
	// Selector
	const notes = useSelector((state) => state.notes.notes);
	const createForm = useSelector((state) => state.notes.createForm);
	const updateForm = useSelector((state) => state.notes.updateForm);

	// Dispatch
	const dispatch = useDispatch();

	// State
	// const [createForm, setCreateForm] = useState({
	// 	title: "",
	// 	description: "",
	// });
	// const [updateForm, setUpdateForm] = useState({
	// 	_id: null,
	// 	title: "",
	// 	description: "",
	// });

	// Use Effect
	useEffect(() => {
		// fetchNotes();
		dispatch(fetchNotes());
	}, []);

	// Functions
	// const fetchNotes = async () => {
	// 	// Fetch the notes
	// 	const res = await axios.get("http://localhost:3000/api/notes");

	// 	// Set to state
	// 	dispatch(setNotes(res.data.notes));
	// };

	const updateCreateFormField = (e) => {
		const { name, value } = e.target;

		dispatch(
			setCreateForm({
				...createForm,
				[name]: value,
			})
		);
	};

	const createNote = async (e) => {
		e.preventDefault();

		// Create the note
		const res = await axios.post("http://localhost:3000/api/notes", createForm);

		// Update the state
		dispatch(addNote(res.data.note));

		// Clear the form
		dispatch(
			setCreateForm({
				title: "",
				description: "",
			})
		);
	};

	const handleDeleteNote = async (id) => {
		// Delete the note
		await axios.delete(`http://localhost:3000/api/notes/${id}`);

		// Update the state
		dispatch(deleteNote(id));
	};

	const toggleUpdate = (note) => {
		// Get the current note values
		const { title, description } = note;

		// Set the state
		dispatch(
			setUpdateForm({
				...updateForm,
				id: note._id,
				title,
				description,
			})
		);
	};

	const handleUpdateNote = (e) => {
		e.preventDefault();
		const { title, description } = updateForm;

		// Update the note
		axios.put(`http://localhost:3000/api/notes/${updateForm._id}`, {
			title,
			description,
		});

		// Update the state
		dispatch(updateNote(updateForm));

		// Clear the form
		dispatch(
			setUpdateForm({
				_id: null,
				title: "",
				description: "",
			})
		);
	};

	const handleUpdateFieldChange = (e) => {
		const { name, value } = e.target;

		dispatch(
			setUpdateForm({
				...updateForm,
				[name]: value,
			})
		);
	};

	return (
		<div className="App">
			<h1>Hello</h1>
			<div>
				<h2>Notes:</h2>
				{notes &&
					notes.map((note) => {
						return (
							<div key={note._id}>
								<h3>{note.title}</h3>
								<button onClick={() => handleDeleteNote(note._id)}>
									Delete note
								</button>
								<button onClick={() => toggleUpdate(note)}>Update note</button>
							</div>
						);
					})}
			</div>

			{updateForm._id && (
				<div>
					<h2>Update note</h2>
					<form onSubmit={handleUpdateNote}>
						<input
							onChange={handleUpdateFieldChange}
							value={updateForm.title}
							name="title"
						/>
						<textarea
							onChange={handleUpdateFieldChange}
							value={updateForm.description}
							name="description"
						></textarea>
						<button type="submit">Update note</button>
					</form>
				</div>
			)}

			{!updateForm._id && (
				<div>
					<h2>Create note</h2>
					<form onSubmit={createNote}>
						<input
							onChange={updateCreateFormField}
							value={createForm.title}
							name="title"
						/>
						<textarea
							onChange={updateCreateFormField}
							value={createForm.description}
							name="description"
						></textarea>
						<button type="submit">Create note</button>
					</form>
				</div>
			)}
		</div>
	);
}

export default App;
