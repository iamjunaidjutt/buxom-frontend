import { configureStore } from "@reduxjs/toolkit";

import CartReducer from "@/features/CartSlice";
import ModalReducer from "@/features/modalSlice";
import AuthReducer from "@/features/authSlice";

const store = configureStore({
	reducer: {
		cart: CartReducer,
		modal: ModalReducer,
		auth: AuthReducer,
	},
});

export default store;
