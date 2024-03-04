import CategorySection from "@/components/home/CategorySection";
import LandingSection from "@/components/home/LandingSection";
import LimitedEditionSection from "@/components/home/LimitedEditionSection";
import NewsSection from "@/components/home/NewsSection";
import ProductSection from "@/components/home/ProductSection";
import VideoSection from "@/components/home/VideoSection";
import SeperatorLine from "@/components/ui/SeperatorLine";

const Home = () => {
	return (
		<>
			<LandingSection />
			<LimitedEditionSection />
			<SeperatorLine title="BABE FAVES" heading="BABE FAVES" />
			<ProductSection />
			<VideoSection />
			<CategorySection />
			<SeperatorLine large title="BIG BOLD SEXY" heading="BUXOM NEWS" />
			<NewsSection />
			<SeperatorLine title="MOST LOVED" heading="MOST LOVED" />
		</>
	);
};

export default Home;
