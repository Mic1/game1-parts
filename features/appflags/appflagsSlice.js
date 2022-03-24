import { createSlice } from "@reduxjs/toolkit";

export const appflagsSlice = createSlice({
	name: "appflags",
	initialState: {
		showMenu: false,
		currLink: "AntiScrabble",
		testRender: false,
	},
	reducers: {
		toggleMenu: (state) => {
			state.showMenu = !state.showMenu;
		},
		setCurrentLink: (state, action) => {
			state.currLink = action.payload;
		},
		testRenderer: (state) => {
			state.testRender = !state.testRender;
		},
	},
});

// Action creators are generated for each case reducer function
export const { toggleMenu, setCurrentLink, testRenderer } =
	appflagsSlice.actions;

export default appflagsSlice.reducer;
