import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ProductsProps } from "@/lib/types";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "../ui/badge";
import PrimaryBtn from "../ui/PrimaryBtn";

const ProductDetails = () => {
	const [focusShade, setFocusShade] = useState<{
		name: string;
		description: string;
	}>({
		name: "",
		description: "",
	});
	const [product, setProduct] = useState<ProductsProps>({
		id: "",
		name: "",
		description: "",
		thumbnail: "",
		price: 0,
		stock: 0,
		discount: 0,
		shades: [],
		Badges: [],
		Image: [],
		Tags: [],
		category: {
			id: "",
			name: "",
			titleLine: "",
			description: "",
			imageURL: "",
		},
	});
	const params = useParams();
	const id = params.id;

	const fetchData = async () => {
		try {
			const response = await fetch(
				`http://localhost:8080/products/${id}`
			);
			const data = await response.json();
			console.log(data);
			setProduct(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="bg-white text-black py-20">
			<div className="container mx-auto">
				<div className="grid grid-cols-2 gap-4">
					<div className="flex gap-20">
						<Carousel
							opts={{
								align: "start",
							}}
							orientation="vertical"
							className=" max-w-xs max-h-[30rem]"
						>
							<CarouselContent className="-mt-1 h-[30rem]">
								{product.Image.map((image, index) => (
									<CarouselItem
										key={index}
										className="md:basis-0"
									>
										<img
											src={`http://localhost:8080${image.imageURLs}`}
											alt={product.name}
											className="w-[4rem] object-cover h-[4rem] border-2 border-gray-200 rounded-md cursor-pointer hover:border-gray-400 transition duration-300 ease-in-out"
											onClick={() => {
												setProduct({
													...product,
													thumbnail: image.imageURLs,
												});
											}}
										/>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious />
							<CarouselNext />
						</Carousel>
						<img
							src={`http://localhost:8080${product.thumbnail}`}
							alt={product.name}
							className="object-cover h-[27rem] w-[27rem] border-2 border-gray-200 rounded-md cursor-pointer hover:border-gray-400 transition duration-300 ease-in-out"
						/>
					</div>
					<div className=" space-y-3">
						<div className="flex gap-2">
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
						<h1 className="text-4xl font-bold">{product.name}</h1>
						<p className="text-sm">{product.description}</p>
						<p className="text-lg font-semibold">
							${product.price.toFixed(2)}
						</p>
						<div className="flex flex-col gap-2">
							<p className="text-sm">
								{/* {focusShade.name === ""
									? product.shades[0].name
									: focusShade.name} */}
								Shades
							</p>
							<div className="flex gap-3">
								{product.shades.map((shade, index) => (
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
										onFocus={() => {
											setFocusShade({
												name: shade.name,
												description: shade.description,
											});
										}}
										className={`repeat-x bg-center bg-cover w-8 h-8 rounded-full border-focus-2 border-transparent focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 p-2`}
										style={{
											background: `url(//buxomcosmetics.com/cdn/shop/files/Lips_White.png?v=1685021582) no-repeat center/cover, #${shade.code}`,
										}}
										autoFocus={index === 0}
									></button>
								))}
							</div>
							<p className="text-sm">{focusShade.description}</p>
							<PrimaryBtn type="button" dark>
								Add to Cart
							</PrimaryBtn>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
