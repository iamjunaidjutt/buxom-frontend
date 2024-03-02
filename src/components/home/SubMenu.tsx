import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoSearch, IoBagHandleSharp } from "react-icons/io5";

import BarLogo from "@/assets/logos/buxom-logo.webp";
import ShopMakeupMenu from "@/components/home/ShopMakeupMenu";
import ArtistryMenu from "./ArtistryMenu";

const SubMenu = () => {
	const [isOpenSMM, setIsOpenSMM] = useState(false);
	const [isOpenArtistry, setIsOpenArtistry] = useState(false);

	useEffect(() => {
		if (isOpenSMM || isOpenArtistry) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [isOpenSMM, isOpenArtistry]);

	return (
		<div className={`flex justify-around items-center py-3 px-20`}>
			<div className="space-x-5">
				<a
					href="#"
					className="font-extrabold relative after:content-[''] after:h-[1px] after:w-[0%] after:bg-white after:left-0 after:-bottom-2 after:rounded-xl after:absolute after:duration-500 after:hover:w-full after:transition-all after:ease-in-out"
					onClick={() => setIsOpenSMM(true)}
				>
					SHOP MAKEUP
				</a>
				<ShopMakeupMenu
					show={isOpenSMM}
					onClose={() => setIsOpenSMM(false)}
				/>
				<a
					href="#"
					className="font-extrabold relative after:content-[''] after:h-[1px] after:w-[0%] after:bg-white after:left-0 after:-bottom-2 after:rounded-xl after:absolute after:duration-500 after:hover:w-full after:transition-all after:ease-in-out"
					onClick={() => setIsOpenArtistry(true)}
				>
					ARTISTRY
				</a>
				<ArtistryMenu
					show={isOpenArtistry}
					onClose={() => setIsOpenArtistry(false)}
				/>
			</div>
			<div>
				<Link to="/">
					<img src={BarLogo} alt="Buxom Logo" />
				</Link>
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
