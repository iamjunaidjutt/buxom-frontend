import MainBar from "@/components/home/MainBar";
import SubMenu from "@/components/home/SubMenu";
import Footer from "@/components/home/Footer";
import { Separator } from "@/components/ui/separator";
import MediaWall from "@/components/home/MediaWall";
import ProductsMain from "@/components/products/ProductsMain";

export default function Products() {
	return (
		<>
			<MainBar />
			<Separator className="opacity-50" />
			<SubMenu />
			<Separator className="opacity-50" />
			<ProductsMain />
			<MediaWall />
			<Footer />
		</>
	);
}
