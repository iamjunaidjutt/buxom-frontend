// modalSlice.js
import { createSlice } from "@reduxjs/toolkit";

interface Modal {
	id: number;
	isOpen: boolean;
}

const initialState = {
	modals: [] as Modal[],
};

const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		openModal: (state, action) => {
			state.modals.push(action.payload);
		},
		closeModal: (state, action) => {
			state.modals = state.modals.filter(
				(modal) => modal.id !== action.payload
			);
		},
		toggleModal: (state, action) => {
			const modalIndex = state.modals.findIndex(
				(modal) => modal.id === action.payload
			);
			if (modalIndex !== -1) {
				state.modals[modalIndex].isOpen =
					!state.modals[modalIndex].isOpen;
			}
		},
	},
});

export const { openModal, closeModal, toggleModal } = modalSlice.actions;

export default modalSlice.reducer;
