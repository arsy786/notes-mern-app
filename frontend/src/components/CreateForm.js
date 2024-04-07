import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	addNote,
	resetCreateForm,
	setCreateForm,
} from "../stores/notesReducer";

const CreateForm = () => {
	const createForm = useSelector((state) => state.notes.createForm);
	const updateForm = useSelector((state) => state.notes.updateForm);
	const dispatch = useDispatch();

	const createNote = async (e) => {
		e.preventDefault();
		const res = await axios.post("/api/notes", createForm);
		dispatch(addNote(res.data.note));
		dispatch(resetCreateForm());
	};

	const updateCreateFormField = (e) => {
		const { name, value } = e.target;
		dispatch(
			setCreateForm({
				...createForm,
				[name]: value,
			})
		);
	};

	return (
		<div>
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
						/>
						<button type="submit">Create note</button>
					</form>
				</div>
			)}
		</div>
	);
};

export default CreateForm;
