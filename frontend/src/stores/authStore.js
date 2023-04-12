import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
	name: "auth",
	initialState: loginForm{
    email: "",
    password: "",
  },
	reducers: {
		// setCreateForm: (state, action) => {
		// 	state.createForm = action.payload;
		// },
		// setUpdateForm: (state, action) => {
		// 	state.updateForm = action.payload;
		// },
		// addNote: (state, action) => {
		// 	state.notes.push(action.payload);
		// },
		// deleteNote: (state, action) => {
		// 	state.notes = state.notes.filter((note) => note.id !== action.payload);
		// },
		updateLoginForm: (state, action) => {
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
} = authSlice.actions;

export default authSlice.reducer;
