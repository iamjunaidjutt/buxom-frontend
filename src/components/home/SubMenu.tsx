import { IoSearch, IoBagHandleSharp } from "react-icons/io5";

import BarLogo from "@/assets/logos/buxom-logo.webp";

const SubMenu = () => {
	return (
		<div className="flex justify-around items-center py-3 px-20">
			<div className="space-x-5">
				<a
					href="#"
					className="font-extrabold relative after:content-[''] after:h-[1px] after:w-[0%] after:bg-white after:left-0 after:-bottom-2 after:rounded-xl after:absolute after:duration-500 after:hover:w-full after:transition-all after:ease-in-out"
				>
					SHOP MAKEUP
				</a>
				<a
					href="#"
					className="font-extrabold relative after:content-[''] after:h-[1px] after:w-[0%] after:bg-white after:left-0 after:-bottom-2 after:rounded-xl after:absolute after:duration-500 after:hover:w-full after:transition-all after:ease-in-out"
				>
					ARTISTRY
				</a>
			</div>
			<div className="">
				<a href="#">
					<img src={BarLogo} alt="Buxom Logo" />
				</a>
			</div>
			<div className="space-x-3">
				<a href="#" className="border rounded-full inline-block p-2">
					<IoSearch size={25} />
				</a>
				<a href="#" className="border rounded-full inline-block p-2">
					<IoBagHandleSharp size={25} />
				</a>
			</div>
		</div>
	);
};

export default SubMenu;
