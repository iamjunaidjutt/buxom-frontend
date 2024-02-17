import React from "react";
import { motion } from "framer-motion";

interface props {
	categoryName: string;
	prod_img_url: string;
	bg_img_url: string;
}

const CategoryTab: React.FC<props> = ({
	categoryName,
	prod_img_url,
	bg_img_url,
}) => {
	return (
		<div className="relative w-[34rem]">
			<div className="bg-gradient-to-b from-zinc-500 from-25% via-zinc-950 via-75% to-black to-100%">
				<motion.img
					whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
					src={bg_img_url}
					alt="bg-image"
					className="object-cover mix-blend-overlay"
				/>
				<motion.img
					whileHover={{ y: -30, transition: { duration: 0.5 } }}
					src={prod_img_url}
					alt="product-image"
					className="object-cover absolute top-14"
				/>
				<div className="text-center bg-black py-14">
					<p className="font-bold">SHOP</p>
					<h3 className="text-5xl font-bold font-nunitoSans stroke-white-thin text-transparent">
						{categoryName}
					</h3>
				</div>
			</div>
		</div>
	);
};

export default CategoryTab;
