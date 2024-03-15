import { useState } from "react";
import { BsCartCheckFill, BsCartXFill } from "react-icons/bs";
import { FaSignOutAlt } from "react-icons/fa";
import { FaBoxOpen, FaImages } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { IoSettingsOutline, IoChevronDown, IoChevronUp } from "react-icons/io5";
import { SlBadge } from "react-icons/sl";
import {
	MdOutlineStackedBarChart,
	MdOutlineTag,
	MdVerticalShades,
} from "react-icons/md";
import { Link } from "react-router-dom";

const SideBar = () => {
	const [open, setOpen] = useState<{
		products: boolean;
	}>({
		products: false,
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
				</li>

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
						<li className="pl-12 p-2 border-2 border-gray-900 hover:bg-gray-900 flex justify-between items-center">
							<Link
								to="/admin/shades"
								className="flex items-center gap-2 text-base font-medium"
							>
								<MdVerticalShades size={18} />
								Shades
							</Link>
						</li>

						<li className="pl-12 p-2 border-2 border-gray-900 hover:bg-gray-900 flex justify-between items-center">
							<Link
								to="/admin/tags"
								className="flex items-center gap-2 text-base font-medium"
							>
								<MdOutlineTag size={18} />
								Tags
							</Link>
						</li>

						<li className="pl-12 p-2 border-2 border-gray-900 hover:bg-gray-900 flex justify-between items-center">
							<Link
								to="/admin/badges"
								className="flex items-center gap-2 text-base font-medium"
							>
								<SlBadge size={18} />
								Badges
							</Link>
						</li>

						<li className="pl-12 p-2 border-2 border-gray-900 hover:bg-gray-900 flex justify-between items-center">
							<Link
								to="/admin/images"
								className="flex items-center gap-2 text-base font-medium"
							>
								<FaImages size={18} />
								Images
							</Link>
						</li>
					</ul>
				)}

				<li className="p-4 border-2 border-gray-900 hover:bg-gray-900 flex justify-between items-center">
					<Link
						to="/admin/carts"
						className="flex items-center gap-2 text-lg font-semibold"
					>
						<BsCartXFill size={20} />
						Carts
					</Link>
				</li>

				<li className="p-4 border-2 border-gray-900 hover:bg-gray-900 flex justify-between items-center">
					<Link
						to="/admin/orders"
						className="flex items-center gap-2 text-lg font-semibold"
					>
						<BsCartCheckFill size={20} />
						Orders
					</Link>
				</li>

				<li className="p-4 border-2 border-gray-900 hover:bg-gray-900 flex justify-between items-center">
					<Link
						to="/admin/users"
						className="flex items-center gap-2 text-lg font-semibold"
					>
						<IoMdPerson size={20} />
						Users
					</Link>
				</li>

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
