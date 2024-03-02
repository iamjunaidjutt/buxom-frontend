import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "@/pages/Home";
import About from "@/pages/About";
import SignIn from "@/pages/SignIn";
import ContactUs from "./pages/ContactUs";
import ShippingAndReturn from "@/pages/ShippingAndReturn";
import FAQs from "@/pages/FAQs";
import StoreLocator from "@/pages/StoreLocator";
import SignUp from "@/pages/SignUp";
import Products from "@/pages/Products";

const router = createBrowserRouter([
	{ path: "/", element: <Home /> },
	{ path: "/about", element: <About /> },
	{ path: "/sign-in", element: <SignIn /> },
	{ path: "/contact-us", element: <ContactUs /> },
	{ path: "/shipping-and-return", element: <ShippingAndReturn /> },
	{ path: "/faqs", element: <FAQs /> },
	{ path: "/store-locator", element: <StoreLocator /> },
	{ path: "/sign-up", element: <SignUp /> },
	{ path: "/products", element: <Products /> },
]);

export default function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}
