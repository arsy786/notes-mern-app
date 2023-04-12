import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	loading: true,
	notes: null,
	error: null,
	createForm: {
		title: "",
		description: "",
	},
	updateForm: {
		_id: "",
		title: "",
		description: "",
	},
};

// Generates pending, fulfilled and rejected action types
export const fetchNotes = createAsyncThunk("notes/fetchNotes", async () => {
	const res = await axios.get("http://localhost:3000/api/notes");
	return res.data.notes;
});

export const notesSlice = createSlice({
	name: "notes",
	initialState,
	reducers: {
		// setNotes: (state, action) => {
		// 	state.notes = action.payload;
		// },
		setCreateForm: (state, action) => {
			state.createForm = action.payload;
		},
		setUpdateForm: (state, action) => {
			state.updateForm = action.payload;
		},
		addNote: (state, action) => {
			state.notes.push(action.payload);
		},
		deleteNote: (state, action) => {
			state.notes = state.notes.filter((note) => note.id !== action.payload);
		},
		updateNote: (state, action) => {
			state.notes = state.notes.map((note) =>
				note.id === action.payload.id ? action.payload : note
			);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchNotes.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchNotes.fulfilled, (state, action) => {
				state.loading = false;
				state.notes = action.payload;
				state.error = "";
			})
			.addCase(fetchNotes.rejected, (state, action) => {
				state.loading = false;
				state.notes = [];
				state.error = action.error.message;
			});
	},
});

export const {
	setNotes,
	setCreateForm,
	setUpdateForm,
	addNote,
	deleteNote,
	updateNote,
} = notesSlice.actions;

export default notesSlice.reducer;