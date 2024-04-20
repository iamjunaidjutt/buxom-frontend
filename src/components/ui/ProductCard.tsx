import React from "react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { ProductsProps } from "@/lib/types";
import { Link } from "react-router-dom";

const ProductCard: React.FC<ProductsProps> = ({ ...product }) => {
	const [focusName, setFocusName] = useState("");
	return (
		<div className="relative group w-[28rem] h-[50rem] m-5 font-nunitoSans">
			<div className="absolute -inset-2 rounded-2xl bg-pink blur opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out"></div>
			<div className="relative transition duration-600 ease-in-out h-full bg-white text-black p-5 rounded-2xl">
				<div className="relative w-96">
					<Link to={`/products/${product.id}`}>
						<img
							src={`http://localhost:8080${product.thumbnail}`}
							alt={product.name}
							className="object-center w-full h-96 rounded-xl"
						/>
					</Link>
					<div className="absolute top-2 space-x-2">
						{product.Badges.map((badge) => (
							<Badge
								key={badge.id}
								className="font-bold text-sm"
								style={{ background: `#${badge.color}` }}
							>
								{badge.name}
							</Badge>
						))}
					</div>
				</div>
				<div className="space-y-5">
					<div className=""></div>
					<div className="space-y-2">
						<p className="text-sm">
							{focusName === ""
								? product.shades[0].name
								: focusName}
						</p>
						<div className="space-x-2.5 flex flex-wrap">
							{product.shades.slice(0, 8).map((shade, index) => (
								<button
									key={shade.id}
									type="button"
									value={shade.name}
									aria-label={shade.name}
									data-variant-id="44543207571694"
									data-sku="43000031137"
									data-title={shade.name}
									data-price="$29.00"
									data-description={shade.code}
									onFocus={() => setFocusName(shade.name)}
									className={`repeat-x bg-center bg-cover w-8 h-8 rounded-full border-focus-2 border-transparent focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 p-2`}
									style={{
										background: `url(//buxomcosmetics.com/cdn/shop/files/Lips_White.png?v=1685021582) no-repeat center/cover, #${shade.code}`,
									}}
									autoFocus={index === 0}
								></button>
							))}
							{product.shades.length > 8 && (
								<Badge
									variant={"secondary"}
									className="text-md group-hover:border group-hover:border-black"
								>
									{product.shades.length - 8}
								</Badge>
							)}
						</div>
					</div>
					<div className=""></div>
					<div className="">
						<Link to={`/products/${product.id}`}>
							<h3 className="font-extrabold text-xl">
								{product.name}
							</h3>
						</Link>
					</div>
					<div className="text-sm space-y-2">
						<p>
							{product.description.length > 150
								? `${product.description.slice(0, 150)}...`
								: product.description}
						</p>
						<div className="flex flex-wrap text-gray-600">
							{product.Tags.slice(0, 5).map((tag, index) => (
								<React.Fragment key={tag.id}>
									<span>{tag.name}</span>
									{index < product.Tags.length - 1 && (
										<span>, </span>
									)}
								</React.Fragment>
							))}
						</div>
						<p className="font-extrabold text-base">
							${product.price}
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
