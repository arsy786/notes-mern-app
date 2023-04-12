import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUpdateForm, updateNote } from "../stores/notesReducer";

const UpdateForm = () => {
	const updateForm = useSelector((state) => state.notes.updateForm);
	const dispatch = useDispatch();

	const handleUpdateFieldChange = (e) => {
		const { name, value } = e.target;

		dispatch(
			setUpdateForm({
				...updateForm,
				[name]: value,
			})
		);
	};

	const handleUpdateNote = (e) => {
		e.preventDefault();
		const { title, description } = updateForm;

		// Update the note
		axios.put(`/api/notes/${updateForm._id}`, {
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

	return (
		<div>
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
		</div>
	);
};

export default UpdateForm;
