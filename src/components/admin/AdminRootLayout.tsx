import { Outlet } from "react-router-dom";

const AdminRootLayout = () => {
	return (
		<div className="min-h-screen py-2 flex flex-col items-center justify-between">
			<Outlet />
			<footer className="mt-20 text-pink">&copy; Buxom Cosmetics</footer>
		</div>
	);
};

export default AdminRootLayout;
