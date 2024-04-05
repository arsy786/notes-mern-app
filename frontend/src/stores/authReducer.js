import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	loginForm: {
		email: "",
		password: "",
	},
	signupForm: {
		email: "",
		password: "",
	},
	loggedIn: null,
	loading: false,
	error: null,
};

export const checkAuth = createAsyncThunk("auth/checkAuth", async () => {
	const res = await axios.get("/api/auth/check-auth");
	console.log(res);
	return res.data;
});

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setLoginForm: (state, action) => {
			state.loginForm = action.payload;
		},
		setLoggedIn: (state, action) => {
			state.loggedIn = action.payload;
		},
		setSignupForm: (state, action) => {
			state.signupForm = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(checkAuth.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(checkAuth.fulfilled, (state, action) => {
				state.loading = false;
				state.loggedIn = true;
			})
			.addCase(checkAuth.rejected, (state, action) => {
				state.loading = false;
				state.loggedIn = false;
				state.error = action.error.message;
			});
	},
});

export const { setLoginForm, setLoggedIn, setSignupForm } = authSlice.actions;

export default authSlice.reducer;
