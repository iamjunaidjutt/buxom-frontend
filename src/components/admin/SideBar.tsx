import { useState } from "react";
import { BsCartXFill } from "react-icons/bs";
import { FaSignOutAlt } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { IoSettingsOutline, IoChevronDown, IoChevronUp } from "react-icons/io5";
import { MdOutlineStackedBarChart, MdVerticalShades } from "react-icons/md";
import { Link } from "react-router-dom";

const SideBar = () => {
	const [open, setOpen] = useState<{
		dashboard: boolean;
		categories: boolean;
		products: boolean;
		shades: boolean;
		orders: boolean;
		users: boolean;
	}>({
		dashboard: false,
		categories: false,
		products: false,
		shades: false,
		orders: false,
		users: false,
	});

	return (
		<nav className="flex flex-col justify-between border-2 border-gray-900 w-72 h-screen fixed inset-0">
			<ul className="">
				<li className="p-4 border-2 border-gray-900">
					<Link to="/admin/dashboard" className="text-xl font-bold">
						Buxom Cosmetics
					</Link>
				</li>
				<li className="p-4 border-2 border-gray-900 hover:bg-gray-900 flex justify-between items-center">
					<Link
						to="/admin/categories"
						className="flex items-center gap-2 text-lg font-semibold"
					>
						<MdOutlineStackedBarChart size={20} />
						Categories
					</Link>
					{open.categories ? (
						<IoChevronUp
							size={20}
							onClick={() =>
								setOpen({
									...open,
									categories: !open.categories,
								})
							}
							className="cursor-pointer"
						/>
					) : (
						<IoChevronDown
							size={20}
							onClick={() =>
								setOpen({
									...open,
									categories: !open.categories,
								})
							}
							className="cursor-pointer"
						/>
					)}
				</li>
				{open.categories && (
					<ul className="flex flex-col">
						<li className="p-2 border-b border-gray-900 hover:bg-gray-900 pl-10 font-medium">
							<Link to="/admin/categories/create">
								Create Category
							</Link>
						</li>
						<li className="p-2 border-b border-gray-900 hover:bg-gray-900 pl-10 font-medium">
							<Link to="/admin/categories/delete">
								Delete Category
							</Link>
						</li>
						<li className="p-2 border-b border-gray-900 hover:bg-gray-900 pl-10 font-medium">
							<Link to="/admin/categories">View Categories</Link>
						</li>
					</ul>
				)}
				<li className="p-4 border-2 border-gray-900 hover:bg-gray-900 flex justify-between items-center">
					<Link
						to="/admin/products"
						className="flex items-center gap-2 text-lg font-semibold"
					>
						<FaBoxOpen size={20} />
						Products
					</Link>
					{open.products ? (
						<IoChevronUp
							size={20}
							onClick={() =>
								setOpen({
									...open,
									products: !open.products,
								})
							}
							className="cursor-pointer"
						/>
					) : (
						<IoChevronDown
							size={20}
							onClick={() =>
								setOpen({
									...open,
									products: !open.products,
								})
							}
							className="cursor-pointer"
						/>
					)}
				</li>
				{open.products && (
					<ul className="flex flex-col">
						<li className="p-2 border-b border-gray-900 hover:bg-gray-900 pl-10 font-medium">
							<Link to="/admin/products/create">
								Create Product
							</Link>
						</li>
						<li className="p-2 border-b border-gray-900 hover:bg-gray-900 pl-10 font-medium">
							<Link to="/admin/products/delete">
								Delete Product
							</Link>
						</li>
						<li className="p-2 border-b border-gray-900 hover:bg-gray-900 pl-10 font-medium">
							<Link to="/admin/products">View Products</Link>
						</li>
					</ul>
				)}
				<li className="p-4 border-2 border-gray-900 hover:bg-gray-900 flex justify-between items-center">
					<Link
						to="/admin/shades"
						className="flex items-center gap-2 text-lg font-semibold"
					>
						<MdVerticalShades size={20} />
						Shades
					</Link>
					{open.shades ? (
						<IoChevronUp
							size={20}
							onClick={() =>
								setOpen({
									...open,
									shades: !open.shades,
								})
							}
							className="cursor-pointer"
						/>
					) : (
						<IoChevronDown
							size={20}
							onClick={() =>
								setOpen({
									...open,
									shades: !open.shades,
								})
							}
							className="cursor-pointer"
						/>
					)}
				</li>
				{open.shades && (
					<ul className="flex flex-col">
						<li className="p-2 border-b border-gray-900 hover:bg-gray-900 pl-10 font-medium">
							<Link to="/admin/shades/create">Create Shade</Link>
						</li>
						<li className="p-2 border-b border-gray-900 hover:bg-gray-900 pl-10 font-medium">
							<Link to="/admin/shades/delete">Delete Shade</Link>
						</li>
						<li className="p-2 border-b border-gray-900 hover:bg-gray-900 pl-10 font-medium">
							<Link to="/admin/shades">View Shades</Link>
						</li>
					</ul>
				)}
				<li className="p-4 border-2 border-gray-900 hover:bg-gray-900 flex justify-between items-center">
					<Link
						to="/admin/orders"
						className="flex items-center gap-2 text-lg font-semibold"
					>
						<BsCartXFill size={20} />
						Orders
					</Link>
					{open.orders ? (
						<IoChevronUp
							size={20}
							onClick={() =>
								setOpen({
									...open,
									orders: !open.orders,
								})
							}
							className="cursor-pointer"
						/>
					) : (
						<IoChevronDown
							size={20}
							onClick={() =>
								setOpen({
									...open,
									orders: !open.orders,
								})
							}
							className="cursor-pointer"
						/>
					)}
				</li>
				{open.orders && (
					<ul className="flex flex-col">
						<li className="p-2 border-b border-gray-900 hover:bg-gray-900 pl-10 font-medium">
							<Link to="/admin/orders/create">Create Order</Link>
						</li>
						<li className="p-2 border-b border-gray-900 hover:bg-gray-900 pl-10 font-medium">
							<Link to="/admin/orders/delete">Delete Order</Link>
						</li>
						<li className="p-2 border-b border-gray-900 hover:bg-gray-900 pl-10 font-medium">
							<Link to="/admin/orders">View Orders</Link>
						</li>
					</ul>
				)}
				<li className="p-4 border-2 border-gray-900 hover:bg-gray-900 flex justify-between items-center">
					<Link
						to="/admin/users"
						className="flex items-center gap-2 text-lg font-semibold"
					>
						<IoMdPerson size={20} />
						Users
					</Link>
					{open.users ? (
						<IoChevronUp
							size={20}
							onClick={() =>
								setOpen({
									...open,
									users: !open.users,
								})
							}
							className="cursor-pointer"
						/>
					) : (
						<IoChevronDown
							size={20}
							onClick={() =>
								setOpen({
									...open,
									users: !open.users,
								})
							}
							className="cursor-pointer"
						/>
					)}
				</li>
				{open.users && (
					<ul className="flex flex-col">
						<li className="p-2 border-b border-gray-900 hover:bg-gray-900 pl-10 font-medium">
							<Link to="/admin/users/create">Create User</Link>
						</li>
						<li className="p-2 border-b border-gray-900 hover:bg-gray-900 pl-10 font-medium">
							<Link to="/admin/users/delete">Delete User</Link>
						</li>
						<li className="p-2 border-b border-gray-900 hover:bg-gray-900 pl-10 font-medium">
							<Link to="/admin/users">View Users</Link>
						</li>
					</ul>
				)}
				<li className="p-4 border-2 border-gray-900 hover:bg-gray-900 flex justify-between items-center">
					<Link
						to="/admin"
						className="flex items-center gap-2 text-lg font-semibold"
					>
						<FaSignOutAlt size={20} />
						Sign Out
					</Link>
				</li>
			</ul>
			<div className="p-4 border-2 border-gray-900 hover:bg-gray-900 flex justify-between items-center">
				<Link
					to="/admin/settings"
					className="flex items-center gap-2 text-lg font-semibold"
				>
					<IoSettingsOutline size={20} />
					Settings
				</Link>
			</div>
		</nav>
	);
};

export default SideBar;
