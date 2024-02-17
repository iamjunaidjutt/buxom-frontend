const SupportMenu = () => {
	return (
		<div className="absolute right-0 top-7 rounded-3xl border bg-gradient-to-b from-slate-50 to-white z-30">
			<div className="absolute inset-0 blur bg-pink rounded-3xl z-30"></div>
			{/* Dropdown */}
			<div className="relative w-max rounded-3xl bg-black text-white font-nunitoSans text-md font-extrabold flex flex-col gap-4 items-start p-8 z-30">
				{/* Menu button */}
				<a href="#" className="hover:stroke">
					FAQS
				</a>
				<a href="#" className="hover:stroke">
					RETURNS
				</a>
				<a href="#" className="hover:stroke">
					LIVE CHAT
				</a>
				<a href="#" className="hover:stroke">
					CONTACT US
				</a>
			</div>
		</div>
	);
};

export default SupportMenu;
