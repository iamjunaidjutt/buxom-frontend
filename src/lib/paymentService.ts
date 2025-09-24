import { CartItem } from "@/lib/types";

const API_BASE_URL = "http://localhost:8080/api";

export interface CheckoutSessionRequest {
	products: Array<{
		id: string;
		quantity: number;
	}>;
	customerEmail: string;
	successUrl: string;
	cancelUrl: string;
	userId?: string;
	orderId?: string;
}

export interface CheckoutSessionResponse {
	sessionId: string;
	url: string;
	amount: number;
}

export interface PaymentSessionDetails {
	session: {
		id: string;
		payment_status: string;
		customer_email: string;
		amount_total: number;
		metadata: Record<string, string>;
	};
}

/**
 * Create a Stripe checkout session
 */
export const createCheckoutSession = async (
	cartItems: CartItem[],
	customerEmail: string,
	userId?: string
): Promise<CheckoutSessionResponse> => {
	try {
		const products = cartItems.map((item) => ({
			id: item.id,
			quantity: item.quantity,
		}));

		const requestData: CheckoutSessionRequest = {
			products,
			customerEmail,
			successUrl: `${window.location.origin}/checkout/success`,
			cancelUrl: `${window.location.origin}/checkout/cancel`,
			userId,
		};

		const response = await fetch(
			`${API_BASE_URL}/payments/create-checkout-session`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(requestData),
			}
		);

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(
				errorData.error || "Failed to create checkout session"
			);
		}

		return await response.json();
	} catch (error) {
		console.error("Error creating checkout session:", error);
		throw error;
	}
};

/**
 * Get payment session details
 */
export const getPaymentSessionDetails = async (
	sessionId: string
): Promise<PaymentSessionDetails> => {
	try {
		const response = await fetch(
			`${API_BASE_URL}/payments/session/${sessionId}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.error || "Failed to get session details");
		}

		return await response.json();
	} catch (error) {
		console.error("Error getting session details:", error);
		throw error;
	}
};

/**
 * Redirect to Stripe Checkout
 */
export const redirectToCheckout = async (
	cartItems: CartItem[],
	customerEmail: string,
	userId?: string
): Promise<void> => {
	try {
		const { url } = await createCheckoutSession(
			cartItems,
			customerEmail,
			userId
		);

		// Redirect to Stripe Checkout
		window.location.href = url;
	} catch (error) {
		console.error("Error redirecting to checkout:", error);
		throw error;
	}
};
