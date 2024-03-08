import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const AdminRootLayout = () => {
	return (
		<div className="w-full">
			<SideBar />
			<div className="pl-72 min-h-screen py-2 flex flex-col items-center justify-between">
				<Outlet />
				<footer className="mt-20 text-pink">
					&copy; Buxom Cosmetics
				</footer>
			</div>
		</div>
	);
};

export default AdminRootLayout;
