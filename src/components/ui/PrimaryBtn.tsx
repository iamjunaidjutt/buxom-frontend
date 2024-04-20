import React from "react";

interface Props {
	children: React.ReactNode;
	type: "submit" | "button";
	small?: boolean;
	dark?: boolean;
}

const PrimaryBtn: React.FC<Props> = ({ children, type, small, dark }) => {
	return (
		<div className={`relative mt-5 group ${small ? "w-fit" : "w-full"}`}>
			<div
				className={`absolute w-full -inset-0.5 rounded-3xl bg-pink blur transition duration-500 ease-in-out`}
			></div>
			<button
				type={type}
				className={`relative w-full py-3 font-bold ${
					dark
						? "bg-black text-white group-hover:bg-white group-hover:text-black"
						: "bg-white text-black"
				} rounded-3xl border ${
					dark
						? " group-hover:text-black group-hover:bg-white"
						: "border-white group-hover:bg-black group-hover:text-white group-hover:from-slate-50 group-hover:to-white"
				}"" flex items-center justify-center gap-3 transition duration-600 ease-in-out uppercase ${
					small ? "px-10" : ""
				}`}
			>
				{children}
			</button>
		</div>
	);
};

export default PrimaryBtn;
