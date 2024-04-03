import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateForm from "../components/CreateForm";
import Notes from "../components/Notes";
import UpdateForm from "../components/UpdateForm";
import { fetchNotes } from "../stores/notesReducer";

const NotesPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchNotes());
	}, [dispatch]);

	return (
		<div>
			<Notes />
			<UpdateForm />
			<CreateForm />
		</div>
	);
};

export default NotesPage;
