import React from "react";

import BX_1Q24_YearofDolly from "@/assets/img/BX_1Q24_YearofDolly_5050Banner2_D_M.webp";

import SecondaryBtn from "@/components/ui/SecondaryBtn";

const LimitedEditionSection = () => {
	return (
		<div className="flex py-14 mx-14 ">
			{/* Limited Edition Section */}
			<div className="flex flex-col items-start justify-center space-y-5">
				<p className="font-bold">LIMITED EDITION</p>
				<h1 className="text-4xl font-bold text-white">
					DOLLY&apos;S B-DAY SURPRISE BOX
				</h1>
				<p className="w-10/12">
					It&apos;s serving surprise party for your routine. The glam
					guests of honor? Four full-size mystery faves in our #1
					shade, DOLLY.
				</p>
				<SecondaryBtn>UNBOX NOW</SecondaryBtn>
			</div>
			<div className="rounded-lg shadow-lg ">
				<img
					src={BX_1Q24_YearofDolly}
					alt="Limited Edition Picture"
					className="h-[32rem] object-cover object-center "
				/>
			</div>
		</div>
	);
};

export default LimitedEditionSection;
