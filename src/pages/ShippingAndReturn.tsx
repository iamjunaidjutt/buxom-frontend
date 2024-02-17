import Footer from "@/components/home/Footer";
import MainBar from "@/components/home/MainBar";
import MediaWall from "@/components/home/MediaWall";
import SubMenu from "@/components/home/SubMenu";
import Policy from "@/components/shippingandreturn/Policy";
import { Separator } from "@/components/ui/separator";

const ShippingAndReturn = () => {
	return (
		<>
			<MainBar />
			<Separator className="opacity-50" />
			<SubMenu />
			<Separator className="opacity-50" />
			<Policy />
			<MediaWall />
			<Footer />
		</>
	);
};

export default ShippingAndReturn;
