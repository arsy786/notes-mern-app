import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateForm from "../components/CreateForm";
import Notes from "../components/Notes";
import UpdateForm from "../components/UpdateForm";
import { fetchNotes } from "../stores/notesReducer";

const NotesPage = () => {
	const isLoading = useSelector((state) => state.notes.loading);
	const dispatch = useDispatch();
	console.log(isLoading);

	useEffect(() => {
		dispatch(fetchNotes());
	}, [dispatch]);

	if (isLoading) {
		return <div>Loading Notes...</div>;
	}

	return (
		<div>
			<Notes />
			<UpdateForm />
			<CreateForm />
		</div>
	);
};

export default NotesPage;
