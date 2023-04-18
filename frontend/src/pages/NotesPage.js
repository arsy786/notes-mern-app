import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateForm from "../components/CreateForm";
import Notes from "../components/Notes";
import UpdateForm from "../components/UpdateForm";
import { fetchNotes } from "../stores/notesReducer";

const NotesPage = () => {
	// Selector
	// const notes = useSelector((state) => state.notes.notes);

	// Dispatch
	const dispatch = useDispatch();

	// Use Effect
	useEffect(() => {
		dispatch(fetchNotes());
	}, []);

	return (
		<div>
			<Notes />
			<UpdateForm />
			<CreateForm />
		</div>
	);
};

export default NotesPage;
