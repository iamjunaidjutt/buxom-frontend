import { useState } from "react";

import BX_NewPlumpShot from "@/assets/prod_imgs/BX_NewPlumpShot_PDP_Silo_Texture_DreamyDolly.webp";
import { Badge } from "@/components/ui/badge";

import { ProductsProps } from "@/lib/types";
import React from "react";

const ProductCard: React.FC<ProductsProps> = ({ ...props }) => {
	const [focusName, setFocusName] = useState("");
	const lipsColorCodes = props.shades;
	return (
		<div className="relative group w-[28rem] h-[50rem] m-5 font-nunitoSans">
			<div className="absolute -inset-2 rounded-2xl bg-pink blur opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out"></div>
			<div className="relative transition duration-600 ease-in-out h-full bg-white text-black p-5 rounded-2xl">
				<div className="relative w-96">
					<img
						src={
							props.images[0].imageURLs
								? props.images[0].imageURLs
								: BX_NewPlumpShot
						}
						alt={props.name}
						className="object-center w-full h-96 rounded-xl"
					/>
					<div className="absolute top-2 space-x-2">
						{props.badges.map((badge) => (
							<Badge key={badge.id} className="font-bold text-sm">
								{badge.name}
							</Badge>
						))}
					</div>
				</div>
				<div className="space-y-5">
					<div className=""></div>
					<div className="space-y-2">
						<p className="text-sm">{focusName}</p>
						<div className="space-x-2.5">
							{lipsColorCodes.slice(0, 8).map((color, index) => (
								<button
									key={color.name}
									type="button"
									value={color.name}
									aria-label={color.name}
									data-variant-id="44543207571694"
									data-sku="43000031137"
									data-title={color.name}
									data-price="$29.00"
									data-description={color.code}
									onFocus={() => setFocusName(color.name)}
									className={`repeat-x bg-center bg-cover w-8 h-8 rounded-full border-focus-2 border-transparent focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 p-2`}
									style={{
										background: `url(//buxomcosmetics.com/cdn/shop/files/Lips_White.png?v=1685021582) no-repeat center/cover, ${color.code}`,
									}}
									autoFocus={index === 0}
								></button>
							))}
							{lipsColorCodes.length > 8 && (
								<Badge
									variant={"secondary"}
									className="text-md group-hover:border group-hover:border-black"
								>
									{lipsColorCodes.length - 8}
								</Badge>
							)}
						</div>
					</div>
					<div className=""></div>
					<div className="">
						<h3 className="font-extrabold text-xl">{props.name}</h3>
					</div>
					<div className="text-sm space-y-2">
						<p>
							{props.description.length > 150
								? `${props.description.slice(0, 150)}...`
								: props.description}
						</p>
						<div className="flex flex-wrap text-gray-600">
							{props.tags.slice(0, 5).map((tag, index) => (
								<React.Fragment key={tag.id}>
									<span>{tag.name}</span>
									{index < props.tags.length - 1 && (
										<span>, </span>
									)}
								</React.Fragment>
							))}
						</div>
						<p className="font-extrabold text-base">
							${props.price}
						</p>
					</div>
					<button className="border border-black hover:bg-black hover:text-white transition duration-300 p-5 w-full rounded-full flex items-center justify-between">
						<span className="font-extrabold">ADD TO BAG</span>
						<span className="text-xl font-bold">+</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
