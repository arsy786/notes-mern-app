import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	loading: false,
	error: null,
	notes: [],
	createForm: {
		title: "",
		description: "",
	},
	updateForm: {
		_id: null,
		title: "",
		description: "",
	},
};

// Generates pending, fulfilled and rejected action types
export const fetchNotes = createAsyncThunk("notes/fetchNotes", async () => {
	const res = await axios.get("/api/notes");
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
				note._id === action.payload.id ? action.payload : note
			);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchNotes.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchNotes.fulfilled, (state, action) => {
				state.loading = false;
				state.notes = action.payload;
			})
			.addCase(fetchNotes.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export const {
	// setNotes,
	setCreateForm,
	setUpdateForm,
	addNote,
	deleteNote,
	updateNote,
} = notesSlice.actions;

export default notesSlice.reducer;
