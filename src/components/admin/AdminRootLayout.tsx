import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";

const AdminRootLayout = () => {
	const isAuthenticated = useSelector(
		(state: any) => state.auth.isAuthenticated
	);
	const navigate = useNavigate();

	if (!isAuthenticated) {
		navigate("/admin/signin");
	}

	return (
		<div className="w-full">
			{isAuthenticated && <SideBar />}
			<div
				className={`${
					isAuthenticated ? "pl-72" : ""
				} min-h-screen py-2 flex flex-col items-center justify-between`}
			>
				<Outlet />
				<footer className="mt-20 text-pink">
					&copy; Buxom Cosmetics
				</footer>
			</div>
		</div>
	);
};

export default AdminRootLayout;
