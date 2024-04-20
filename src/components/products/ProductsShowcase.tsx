import { useEffect, useState } from "react";

import PrimaryBtn from "@/components/ui/PrimaryBtn";
import { Separator } from "@/components/ui/separator";
import { ProductsProps } from "@/lib/types";
import { useParams } from "react-router-dom";
import ProductCard from "../ui/ProductCard";

const ProductsShowcase = () => {
	const [products, setProducts] = useState<ProductsProps[]>([]);
	const params = useParams();
	const id = params.id;

	const fetchData = async () => {
		try {
			const response = await fetch(
				`http://localhost:8080/products/category/${id}`
			);
			const data = await response.json();
			console.log(data);
			setProducts(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			<section className="flex justify-between mx-60 py-5 text-sm">
				<div className="flex gap-5">
					<p className="uppercase font-nunitoSans tracking-widest">
						Filter By:
					</p>
					<a href="#" className="font-bold tracking-wider">
						Finish
					</a>
					<a href="#" className="font-bold tracking-wider">
						Coverage
					</a>
				</div>
				<div className="flex gap-5">
					<p className="font-semibold tracking-wider">
						<span>{products.length}</span> Results
					</p>
					<p className="uppercase font-nunitoSans tracking-widest">
						Sort By:
					</p>
					<a href="#" className="font-bold tracking-wider">
						Best Sellers
					</a>
				</div>
			</section>
			<Separator className="opacity-50" />
			{products && (
				<div className="my-20 flex flex-wrap justify-center">
					{products.map((product) => (
						<ProductCard key={product.id} {...product} />
					))}
				</div>
			)}
			<section className="w-full flex flex-col items-center gap-5">
				<p className="text-gray-300">
					Showing <span>12</span> of <span>{products.length}</span>{" "}
					items
				</p>
				<PrimaryBtn type="button" small>
					Show More
				</PrimaryBtn>
			</section>
		</div>
	);
};

export default ProductsShowcase;
