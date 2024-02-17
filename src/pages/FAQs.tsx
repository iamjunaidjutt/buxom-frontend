import Questions from "@/components/faqs/Questions";
import Footer from "@/components/home/Footer";
import MainBar from "@/components/home/MainBar";
import MediaWall from "@/components/home/MediaWall";
import SubMenu from "@/components/home/SubMenu";
import { Separator } from "@/components/ui/separator";

const FAQs = () => {
	return (
		<>
			<MainBar />
			<Separator className="opacity-50" />
			<SubMenu />
			<Separator className="opacity-50" />
			<Questions />
			<MediaWall />
			<Footer />
		</>
	);
};

export default FAQs;
