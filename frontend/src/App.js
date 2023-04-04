import axios from "axios";
import { useEffect, useState } from "react";

function App() {
	// State
	const [notes, setNotes] = useState(null);
	const [createForm, setCreateForm] = useState({
		title: "",
		description: "",
	});
	const [updateForm, setUpdateForm] = useState({
		_id: null,
		title: "",
		description: "",
	});

	// Use Effect
	useEffect(() => {
		fetchNotes();
	}, []);

	// Functions
	const fetchNotes = async () => {
		// Fetch the notes
		const res = await axios.get("http://localhost:3000/api/notes");

		// Set to state
		setNotes(res.data.notes);
	};

	const updateCreateFormField = (e) => {
		const { name, value } = e.target;

		setCreateForm({
			...createForm,
			[name]: value,
		});
	};

	const createNote = async (e) => {
		e.preventDefault();

		// Create the note
		const res = await axios.post("http://localhost:3000/api/notes", createForm);

		// Update the state
		setNotes([...notes, res.data.note]);

		// Clear the form
		setCreateForm({
			title: "",
			description: "",
		});
	};

	const deleteNote = async (id) => {
		// Delete the note
		await axios.delete(`http://localhost:3000/api/notes/${id}`);

		// Update the state
		setNotes(notes.filter((note) => note._id !== id));
	};

	const toggleUpdate = (note) => {
		// Get the current note values
		const { title, description } = note;

		// Set the state
		setUpdateForm({
			...updateForm,
			_id: note._id,
			title,
			description,
		});
	};

	const updateNote = (e) => {
		e.preventDefault();
		const { title, description } = updateForm;

		// Update the note
		axios.put(`http://localhost:3000/api/notes/${updateForm._id}`, {
			title,
			description,
		});

		// Update the state
		setNotes(
			notes.map((note) => (note._id === updateForm._id ? updateForm : note))
		);

		// Clear the form
		setUpdateForm({
			_id: null,
			title: "",
			description: "",
		});
	};

	const handleUpdateFieldChange = (e) => {
		const { name, value } = e.target;

		setUpdateForm({
			...updateForm,
			[name]: value,
		});
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
								<button onClick={() => deleteNote(note._id)}>
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
					<form onSubmit={updateNote}>
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
