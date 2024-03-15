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
import AllCategories from "@/components/admin/categories/Categories";
import CreateCategory from "@/components/admin/categories/CreateCategory";
import EditCategory from "@/components/admin/categories/EditCategory";
import AllProducts from "@/components/admin/products/Products";
import CreateProduct from "@/components/admin/products/CreateProduct";
import AllOrders from "@/components/admin/Orders";
import AllUsers from "@/components/admin/Users";
import Settings from "@/components/admin/Settings";
import AllShades from "@/components/admin/shades/Shades";
import CreateShade from "@/components/admin/shades/CreateShade";
import EditShade from "@/components/admin/shades/EditShade";
import AllTags from "@/components/admin/tags/Tags";
import CreateTag from "@/components/admin/tags/CreateTag";
import EditTag from "@/components/admin/tags/EditTag";
import AllBadges from "@/components/admin/badges/Badges";
import CreateBadge from "@/components/admin/badges/CreateBadge";
import EditBadge from "@/components/admin/badges/EditBadge";
import AllImages from "@/components/admin/images/Images";
import CreateImage from "@/components/admin/images/CreateImage";
import EditImage from "@/components/admin/images/EditImage";

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
					{ path: "update/:id", element: <EditCategory /> },
				],
			},
			{
				path: "shades",
				children: [
					{ index: true, element: <AllShades /> },
					{ path: "create", element: <CreateShade /> },
					{ path: "update/:id", element: <EditShade /> },
				],
			},
			{
				path: "tags",
				children: [
					{ index: true, element: <AllTags /> },
					{ path: "create", element: <CreateTag /> },
					{ path: "update/:id", element: <EditTag /> },
				],
			},
			{
				path: "badges",
				children: [
					{ index: true, element: <AllBadges /> },
					{ path: "create", element: <CreateBadge /> },
					{ path: "update/:id", element: <EditBadge /> },
				],
			},
			{
				path: "images",
				children: [
					{ index: true, element: <AllImages /> },
					{ path: "create", element: <CreateImage /> },
					{ path: "update/:id", element: <EditImage /> },
				],
			},
			{
				path: "products",
				children: [
					{ index: true, element: <AllProducts /> },
					{ path: "create", element: <CreateProduct /> },
				],
			},
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
