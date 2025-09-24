import { loadStripe } from "@stripe/stripe-js";

// Make sure to replace this with your actual publishable key
const stripePromise = loadStripe(
	import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY ||
		"pk_test_your_publishable_key_here"
);

export default stripePromise;
