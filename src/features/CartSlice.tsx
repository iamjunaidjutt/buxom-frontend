import { CartItem, CartState } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CartState = {
	cartItems: [],
	cartTotalPrice: 0,
	cartTotalQuantity: 0,
};

export const CartSlice = createSlice({
	name: "Cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<CartItem>) => {
			state.cartItems.push(action.payload);
			state.cartTotalPrice += action.payload.totalPrice;
			state.cartTotalQuantity += action.payload.quantity;
		},
		removeFromCart: (state, action: PayloadAction<CartItem>) => {
			const index = state.cartItems.findIndex(
				(item) => item.id === action.payload.id
			);
			state.cartItems.splice(index, 1);
			state.cartTotalPrice -= action.payload.totalPrice;
			state.cartTotalQuantity -= action.payload.quantity;
		},
		clearCart: (state) => {
			state.cartItems = [];
			state.cartTotalPrice = 0;
			state.cartTotalQuantity = 0;
		},
		increaseItemQuantity: (state, action: PayloadAction<CartItem>) => {
			const index = state.cartItems.findIndex(
				(item) => item.id === action.payload.id
			);
			state.cartItems[index].quantity += 1;
			state.cartItems[index].totalPrice +=
				state.cartItems[index].itemPrice;
			state.cartTotalPrice += state.cartItems[index].itemPrice;
			state.cartTotalQuantity += 1;
		},
		decreaseItemQuantity: (state, action: PayloadAction<CartItem>) => {
			const index = state.cartItems.findIndex(
				(item) => item.id === action.payload.id
			);
			state.cartItems[index].quantity -= 1;
			state.cartItems[index].totalPrice -=
				state.cartItems[index].itemPrice;
			state.cartTotalPrice -= state.cartItems[index].itemPrice;
			state.cartTotalQuantity -= 1;
			if (state.cartItems[index].quantity === 0) {
				state.cartItems.splice(index, 1);
			}
		},
	},
});

export const {
	addToCart,
	removeFromCart,
	clearCart,
	increaseItemQuantity,
	decreaseItemQuantity,
} = CartSlice.actions;

export default CartSlice.reducer;
