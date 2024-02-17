import React from "react";

interface props {
	id: number;
	imageUrl: string;
	heading: string;
	desc: string;
}

const ShowcaseTab: React.FC<props> = ({ id, imageUrl, heading, desc }) => {
	const evenId = id % 2 === 0;
	return (
		<div className="flex">
			{!evenId && (
				<img
					src={imageUrl}
					alt={heading + "picture"}
					className="w-1/2"
				/>
			)}
			<div className="flex flex-col justify-center p-16 gap-2">
				<h3 className=" font-nunitoSans text-7xl font-bold uppercase">
					{heading}
				</h3>
				<p className="font-md">{desc}</p>
			</div>
			{evenId && (
				<img
					src={imageUrl}
					alt={heading + "picture"}
					className="w-1/2"
				/>
			)}
		</div>
	);
};

export default ShowcaseTab;
