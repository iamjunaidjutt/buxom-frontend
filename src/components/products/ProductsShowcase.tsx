import ProductSection from "../home/ProductSection";
import PrimaryBtn from "../ui/PrimaryBtn";
import { Separator } from "../ui/separator";

const ProductsShowcase = () => {
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
						<span>21</span> Results
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
			<ProductSection />
			<section className="w-full flex flex-col items-center gap-5">
				<p className="text-gray-300">
					Showing <span>12</span> of <span>21</span> items
				</p>
				<PrimaryBtn type="button" small>
					Show More
				</PrimaryBtn>
			</section>
		</div>
	);
};

export default ProductsShowcase;
