import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "@/pages/Home";
import About from "@/pages/About";
import SignIn from "@/pages/SignIn";
import ContactUs from "@/pages/ContactUs";
import ShippingAndReturn from "@/pages/ShippingAndReturn";
import FAQs from "@/pages/FAQs";
import StoreLocator from "@/pages/StoreLocator";
import SignUp from "@/pages/SignUp";
import Products from "@/pages/Products";
import Admin from "@/pages/Admin";
import ErrorPage from "@/pages/ErrorPage";

import RootLayout from "@/components/ui/RootLayout";
import AdminRootLayout from "@/components/admin/AdminRootLayout";
import AdminSignUp from "@/components/admin/AdminSignUp";
import AdminSignIn from "@/components/admin/AdminSignIn";
import Dashboard from "@/components/admin/Dashboard";
import AllCategories from "@/components/admin/Categories";
import AllProducts from "@/components/admin/Products";
import AllOrders from "@/components/admin/Orders";
import AllUsers from "@/components/admin/Users";
import Settings from "@/components/admin/Settings";
import CreateCategory from "./components/admin/categories/CreateCategory";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "/about", element: <About /> },
			{ path: "/sign-in", element: <SignIn /> },
			{ path: "/contact-us", element: <ContactUs /> },
			{ path: "/shipping-and-return", element: <ShippingAndReturn /> },
			{ path: "/faqs", element: <FAQs /> },
			{ path: "/store-locator", element: <StoreLocator /> },
			{ path: "/sign-up", element: <SignUp /> },
			{ path: "/products", element: <Products /> },
		],
	},
	{
		path: "/admin",
		element: <AdminRootLayout />,
		children: [
			{ index: true, element: <Admin /> },
			{ path: "sign-in", element: <AdminSignIn /> },
			{ path: "sign-up", element: <AdminSignUp /> },
			{ path: "dashboard", element: <Dashboard /> },
			{
				path: "categories",
				children: [
					{ index: true, element: <AllCategories /> },
					{ path: "create", element: <CreateCategory /> },
					// { path: "edit/:id", element: <EditCategory /> },
				],
			},
			{ path: "products", element: <AllProducts /> },
			{ path: "orders", element: <AllOrders /> },
			{ path: "users", element: <AllUsers /> },
			{ path: "settings", element: <Settings /> },
		],
	},
]);

export default function App() {
	return (
		<>
			<Toaster position="top-center" reverseOrder={false} />
			<RouterProvider router={router} />
		</>
	);
}
