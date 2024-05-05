import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoSearch, IoBagHandleSharp } from "react-icons/io5";

import BarLogo from "@/assets/logos/buxom-logo.webp";
import ShopMakeupMenu from "@/components/home/ShopMakeupMenu";
import ArtistryMenu from "@/components/home/ArtistryMenu";
import CartModal from "./CartModal";

const SubMenu = () => {
	const [isOpenSMM, setIsOpenSMM] = useState(false);
	const [isOpenArtistry, setIsOpenArtistry] = useState(false);
	const [isCartOpen, setIsCartOpen] = useState(false);

	useEffect(() => {
		if (isOpenSMM || isOpenArtistry || isCartOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [isOpenSMM, isOpenArtistry, isCartOpen]);

	return (
		<div className={`flex justify-around items-center py-3 px-20`}>
			<div className="space-x-5">
				<span
					className="font-extrabold relative after:content-[''] after:h-[1px] after:w-[0%] after:bg-white after:left-0 after:-bottom-2 after:rounded-xl after:absolute after:duration-500 after:hover:w-full after:transition-all after:ease-in-out cursor-pointer"
					onClick={() => setIsOpenSMM(true)}
				>
					SHOP MAKEUP
				</span>
				<ShopMakeupMenu
					show={isOpenSMM}
					onClose={() => setIsOpenSMM(false)}
				/>
				<span
					className="font-extrabold relative after:content-[''] after:h-[1px] after:w-[0%] after:bg-white after:left-0 after:-bottom-2 after:rounded-xl after:absolute after:duration-500 after:hover:w-full after:transition-all after:ease-in-out cursor-pointer"
					onClick={() => setIsOpenArtistry(true)}
				>
					ARTISTRY
				</span>
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
				<span className="border rounded-full inline-block p-2 cursor-pointer">
					<IoSearch size={25} />
				</span>
				<span
					className="border rounded-full inline-block p-2 cursor-pointer"
					onClick={(e) => {
						e.preventDefault();
						setIsCartOpen(true);
					}}
				>
					<IoBagHandleSharp size={25} />
				</span>
				<CartModal
					show={isCartOpen}
					onClose={() => setIsCartOpen(false)}
				/>
			</div>
		</div>
	);
};

export default SubMenu;
