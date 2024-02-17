import CategorySection from "@/components/home/CategorySection";
import Footer from "@/components/home/Footer";
import LandingSection from "@/components/home/LandingSection";
import LimitedEditionSection from "@/components/home/LimitedEditionSection";
import MainBar from "@/components/home/MainBar";
import MediaWall from "@/components/home/MediaWall";
import NewsSection from "@/components/home/NewsSection";
import ProductSection from "@/components/home/ProductSection";
import SubMenu from "@/components/home/SubMenu";
import VideoSection from "@/components/home/VideoSection";
import SeperatorLine from "@/components/ui/SeperatorLine";
import { Separator } from "@/components/ui/separator";

const Home = () => {
	return (
		<>
			<MainBar />
			<Separator className="opacity-50" />
			<SubMenu />
			<Separator className="opacity-50" />
			<LandingSection />
			<LimitedEditionSection />
			<SeperatorLine title="BABE FAVES" heading="BABE FAVES" />
			<ProductSection />
			<VideoSection />
			<CategorySection />
			<SeperatorLine large title="BIG BOLD SEXY" heading="BUXOM NEWS" />
			<NewsSection />
			<SeperatorLine title="MOST LOVED" heading="MOST LOVED" />
			<MediaWall />
			<Footer />
		</>
	);
};

export default Home;
