import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
	name: "notes",
	initialState: [],
	reducers: {
		setNotes: (state, action) => {
			return action.payload;
		},
		addNote: (state, action) => {
			state.push(action.payload);
		},
		removeNote: (state, action) => {
			state.filter((note) => note.id !== action.payload);
		},
		amendNote: (state, action) => {
			return state.map((note) =>
				note.id === action.payload.id ? action.payload : note
			);
		},
	},
});

export const { setNotes, addNote, removeNote, amendNote } = notesSlice.actions;

export default notesSlice.reducer;
