import { configureStore } from "@reduxjs/toolkit";

import CartReducer from "@/features/CartSlice";
import ModalReducer from "@/features/modalSlice";

const store = configureStore({
	reducer: {
		cart: CartReducer,
		modal: ModalReducer,
	},
});

export default store;
