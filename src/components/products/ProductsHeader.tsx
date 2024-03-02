import { ProductsHeaderProps } from "@/lib/types";
import { Separator } from "@/components/ui/separator";
import ProductsShowcase from "@/components/products/ProductsShowcase";

const ProductsHeader: React.FC<ProductsHeaderProps> = ({
	category,
	titleLine,
}) => {
	return (
		<div className="relative">
			<img src={category.imageUrl} alt={category.name} />
			<section className="absolute top-44 space-y-2 left-16 w-1/2">
				<p className="font-bold text-sm tracking-widest">{titleLine}</p>
				<h1 className="font-extrabold font-nunitoSans text-8xl">
					{category.name}
				</h1>
				<p className="font-semibold w-2/4">{category.description}</p>
			</section>
			<Separator className="opacity-50" />
			<ProductsShowcase />
		</div>
	);
};

export default ProductsHeader;
