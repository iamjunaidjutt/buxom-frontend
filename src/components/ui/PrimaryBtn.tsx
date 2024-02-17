import React from "react";

interface Props {
	children: React.ReactNode;
	type: "submit" | "button";
}

const PrimaryBtn: React.FC<Props> = ({ children, type }) => {
	return (
		<div className="relative w-full mt-5 group">
			<div className="absolute w-full -inset-0.5 rounded-3xl bg-pink blur opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out"></div>
			<button
				type={type}
				className="relative w-full py-3 font-bold bg-white text-black rounded-3xl border border-white flex items-center justify-center gap-3 group-hover:bg-black group-hover:text-white group-hover:from-slate-50 group-hover:to-white transition duration-600 ease-in-out"
			>
				{children}
			</button>
		</div>
	);
};

export default PrimaryBtn;
