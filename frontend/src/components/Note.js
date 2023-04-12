import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteNote, setUpdateForm } from "../stores/notesReducer";

const Note = ({ note }) => {
	const dispatch = useDispatch();

	const handleDeleteNote = async (id) => {
		await axios.delete(`/api/notes/${id}`);
		dispatch(deleteNote(id));
	};

	const toggleUpdate = (note) => {
		const { _id, title, description } = note;
		dispatch(
			setUpdateForm({
				_id,
				title,
				description,
			})
		);
	};

	return (
		<div key={note._id}>
			<h3>{note.title}</h3>
			<button onClick={() => handleDeleteNote(note._id)}>Delete note</button>
			<button onClick={() => toggleUpdate(note)}>Update note</button>
		</div>
	);
};

export default Note;
