import { Link } from "react-router-dom";

const SupportMenu = () => {
	return (
		<div className="absolute right-0 top-7 rounded-3xl border bg-gradient-to-b from-slate-50 to-white z-30">
			<div className="absolute inset-0 blur bg-pink rounded-3xl z-30"></div>
			{/* Dropdown */}
			<div className="relative w-max rounded-3xl bg-black text-white font-nunitoSans text-md font-extrabold flex flex-col gap-4 items-start p-8 z-30">
				{/* Menu button */}
				<Link to="/faqs#" className="hover:stroke">
					FAQS
				</Link>
				<Link to="/shipping-and-return" className="hover:stroke">
					RETURNS
				</Link>
				<Link to="#" className="hover:stroke">
					LIVE CHAT
				</Link>
				<Link to="/contact-us" className="hover:stroke">
					CONTACT US
				</Link>
			</div>
		</div>
	);
};

export default SupportMenu;
