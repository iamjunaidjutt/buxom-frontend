import { useEffect, useState } from "react";

import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/lib/types";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const ProductSection = () => {
	const [data, setData] = useState<products[]>();
	const fetchProducts = async () => {
		try {
			const res = await fetch("http://localhost:8080/products");
			const data = await res.json();
			setData(data.products);
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<div className="mb-28 mt-10">
			<div className="mx-60">
				<Carousel
					opts={{
						align: "start",
					}}
					className="w-full"
				>
					<CarouselPrevious className="bg-neutral text-white border-1 border-white hover:bg-neutral hover:text-white" />
					<CarouselNext className="bg-neutral text-white border-0 hover:bg-neutral hover:text-white" />
					<CarouselContent>
						{data?.map((product) => (
							<CarouselItem
								key={product.id}
								className="md:basis-1/2 lg:basis-1/3"
							>
								<ProductCard key={product.id} {...product} />
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</div>
	);
};

export default ProductSection;
