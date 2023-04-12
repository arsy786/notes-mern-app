import React from "react";
import { useSelector } from "react-redux";

import Note from "./Note";

const Notes = () => {
	const notes = useSelector((state) => state.notes.notes);

	return (
		<div>
			<h2>Notes:</h2>
			{notes &&
				notes.map((note) => {
					return <Note note={note} key={note._id} />;
				})}
		</div>
	);
};

export default Notes;
