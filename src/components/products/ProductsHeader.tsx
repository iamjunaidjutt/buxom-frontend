import { CategoriesProps } from "@/lib/types";
import { Separator } from "@/components/ui/separator";
import ProductsShowcase from "@/components/products/ProductsShowcase";

const ProductsHeader: React.FC<CategoriesProps> = ({
	name,
	imageURL,
	description,
	titleLine,
}) => {
	return (
		<div className="relative">
			<img
				src={`http://localhost:8080${imageURL}`}
				alt={name}
				className="w-full object-cover h-[27rem]"
			/>
			<div className="absolute top-0 left-0 w-full h-full bg-black opacity-20" />
			<section className="absolute top-36 z-50 space-y-2 left-16 w-1/2">
				<p className="font-bold text-sm tracking-widest">{titleLine}</p>
				<h1 className="font-extrabold font-nunitoSans text-8xl">
					{name}
				</h1>
				<p className="font-semibold w-2/4">{description}</p>
			</section>
			<Separator className="opacity-50" />
			<ProductsShowcase />
		</div>
	);
};

export default ProductsHeader;
