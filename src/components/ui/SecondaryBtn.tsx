import React from "react";

import { FiArrowUpRight } from "react-icons/fi";

interface props {
	children: React.ReactNode;
	type: "submit" | "button";
}

const SecondaryBtn: React.FC<props> = ({ children, type }) => {
	return (
		<div className="relative w-max mt-5 group">
			<div className="absolute -inset-0.5 rounded-3xl bg-pink blur opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out"></div>
			<button
				type={type}
				className="relative px-7 py-3 font-bold bg-black text-white rounded-3xl border border-white flex items-center gap-3 group-hover:bg-white group-hover:text-black group-hover:from-slate-50 group-hover:to-white transition duration-600 ease-in-out"
			>
				{children}
				<FiArrowUpRight size={20} />
			</button>
		</div>
	);
};

export default SecondaryBtn;
