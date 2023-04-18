import React from "react";
import { useSelector } from "react-redux";

import Note from "./Note";

const Notes = () => {
	const notes = useSelector((state) => state.notes.notes);

	return (
		<div>
			<h2>Notes:</h2>
			{notes &&
				notes.map((note, index) => {
					return <Note note={note} key={index} />;
				})}
		</div>
	);
};

export default Notes;
