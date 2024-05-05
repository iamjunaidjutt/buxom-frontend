import { CartItem, CartState, ModalProps } from "@/lib/types";
import { useSelector, useDispatch } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import {
	decreaseItemQuantity,
	increaseItemQuantity,
} from "@/features/CartSlice";

interface Props extends ModalProps {}

const CartModal: React.FC<Props> = ({ show, onClose }) => {
	const dispatch = useDispatch();
	const { cartItems, cartTotalPrice, cartTotalQuantity } = useSelector(
		(state: CartState) => state.cart
	);

	if (!show) return null;

	return (
		<>
			<div className="bg-black/60 fixed inset-0 z-50 top-0 w-screen h-screen" />
			<div className="fixed inset-0 z-50 transition-all duration-900 delay-900 ease-in-out">
				<div className="w-[27%] absolute right-0 bg-black h-full border-l border-white">
					<div className="flex flex-col justify-between py-10 items-center h-full overflow-y-scroll no-scrollbar scroll-smooth">
						<div className="flex justify-between w-full px-12 text-white">
							<h1 className="text-xl font-nunitoSans font-bold">
								Your Cart{" "}
								<span>
									(
									{cartTotalQuantity != null
										? cartTotalQuantity
										: 0}
									)
								</span>
							</h1>
							<span
								onClick={onClose}
								className="cursor-pointer border border-white rounded-full p-1"
							>
								<RxCross2 size={17} />
							</span>
						</div>
						{cartItems.length === 0 && (
							<div className="flex justify-center w-full px-12 py-4 text-white">
								<h1 className="text-base font-nunitoSans">
									Your cart is empty
								</h1>
							</div>
						)}
						<div className="space-y-1 scroll-y-overflow">
							{cartItems.map((item: CartItem) => (
								<div
									key={item.id}
									className="flex justify-between w-full px-12 py-4 text-white border border-white"
								>
									<div className="flex items-center space-x-4">
										<img
											src={`http://localhost:8080${item.thumbnail}`}
											alt={item.itemName}
											className="w-16 h-16 object-cover rounded-lg"
										/>
										<div className="flex flex-col">
											<h1 className="text-base font-nunitoSans font-bold">
												{item.itemName}
											</h1>
											<h1 className="text-base font-nunitoSans">
												${item.totalPrice}
											</h1>
										</div>
									</div>
									<div className="flex items-center space-x-4">
										<span
											onClick={() =>
												dispatch(
													decreaseItemQuantity(item)
												)
											}
											className="cursor-pointer"
										>
											-
										</span>
										<span>{item.quantity}</span>
										<span
											onClick={() =>
												dispatch(
													increaseItemQuantity(item)
												)
											}
											className="cursor-pointer"
										>
											+
										</span>
									</div>
								</div>
							))}
						</div>
						<div className="flex flex-col w-full">
							<div className="flex justify-between w-full px-12 py-10 text-white border-t border-white">
								<h1 className="text-base font-nunitoSans font-bold">
									Total Estimate
								</h1>
								<h1 className="text-base font-nunitoSans">
									${cartTotalPrice ? cartTotalPrice : 0}
								</h1>
							</div>
							<button className="bg-white text-black font-bold mx-12 px-4 py-2 rounded-lg border border-white hover:bg-black hover:text-white">
								CHECKOUT
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CartModal;
