import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { redirectToCheckout } from "@/lib/paymentService";
import { CartItem, UsersProps } from "@/lib/types";
import { Loader2, CreditCard } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

interface CheckoutButtonProps {
	cartItems: CartItem[];
	onCheckoutStart?: () => void;
	className?: string;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({
	cartItems,
	onCheckoutStart,
	className = "",
}) => {
	const [loading, setLoading] = useState(false);
	const [showEmailInput, setShowEmailInput] = useState(false);
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState("");

	// Get user info from auth state if available
	const authState = useSelector((state: RootState) => state.auth);
	const isLoggedIn = authState?.isAuthenticated || false;
	const userEmail = authState?.user
		? (authState.user as unknown as UsersProps).email
		: "";
	const userId = authState?.user
		? (authState.user as unknown as UsersProps).id
		: "";

	const validateEmail = (email: string): boolean => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const handleCheckout = async () => {
		if (cartItems.length === 0) {
			return;
		}

		// If user is not logged in, show email input
		if (!isLoggedIn && !showEmailInput) {
			setShowEmailInput(true);
			return;
		}

		const customerEmail = isLoggedIn ? userEmail : email;

		// Validate email
		if (!customerEmail || !validateEmail(customerEmail)) {
			setEmailError("Please enter a valid email address");
			return;
		}

		setEmailError("");
		setLoading(true);

		try {
			onCheckoutStart?.();

			await redirectToCheckout(
				cartItems,
				customerEmail,
				isLoggedIn ? userId : undefined
			);
		} catch (error) {
			console.error("Checkout failed:", error);
			setLoading(false);

			// Show error to user
			alert(
				error instanceof Error
					? error.message
					: "Checkout failed. Please try again."
			);
		}
	};

	const handleEmailSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		handleCheckout();
	};

	if (showEmailInput && !isLoggedIn) {
		return (
			<div className="space-y-4">
				<form onSubmit={handleEmailSubmit} className="space-y-4">
					<div>
						<Label htmlFor="checkout-email">Email Address</Label>
						<Input
							id="checkout-email"
							type="email"
							placeholder="Enter your email"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
								setEmailError("");
							}}
							className={emailError ? "border-red-500" : ""}
							required
						/>
						{emailError && (
							<p className="text-sm text-red-500 mt-1">
								{emailError}
							</p>
						)}
					</div>

					<div className="flex space-x-2">
						<Button
							type="button"
							variant="outline"
							onClick={() => setShowEmailInput(false)}
							className="flex-1"
						>
							Cancel
						</Button>
						<Button
							type="submit"
							disabled={loading}
							className={`flex-1 ${className}`}
						>
							{loading ? (
								<>
									<Loader2 className="h-4 w-4 mr-2 animate-spin" />
									Processing...
								</>
							) : (
								<>
									<CreditCard className="h-4 w-4 mr-2" />
									Proceed to Payment
								</>
							)}
						</Button>
					</div>
				</form>
			</div>
		);
	}

	return (
		<Button
			onClick={handleCheckout}
			disabled={loading || cartItems.length === 0}
			className={`w-full ${className}`}
		>
			{loading ? (
				<>
					<Loader2 className="h-4 w-4 mr-2 animate-spin" />
					Redirecting to checkout...
				</>
			) : (
				<>
					<CreditCard className="h-4 w-4 mr-2" />
					{cartItems.length === 0 ? "Cart is empty" : "CHECKOUT"}
				</>
			)}
		</Button>
	);
};

export default CheckoutButton;
