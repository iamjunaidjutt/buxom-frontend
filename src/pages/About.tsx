import { Separator } from "@/components/ui/separator";

import MainBar from "@/components/home/MainBar";
import SubMenu from "@/components/home/SubMenu";
import AboutLanding from "@/components/about/AboutLanding";
import ShowcaseSection from "@/components/about/ShowcaseSection";
import MediaWall from "@/components/home/MediaWall";
import Footer from "@/components/home/Footer";
import SeperatorLine from "@/components/ui/SeperatorLine";
import CompeteSection from "@/components/about/CompeteSection";
import ProductCard from "@/components/ui/ProductCard";

const About = () => {
	return (
		<>
			<MainBar />
			<Separator className="opacity-50" />
			<SubMenu />
			<Separator className="opacity-50" />
			<AboutLanding />
			<ShowcaseSection />
			<SeperatorLine large />
			<CompeteSection />
			<SeperatorLine title="Babe Faves" heading="Babe Faves" />
			<div className="my-20 mx-60">
				<ProductCard />
			</div>
			<MediaWall />
			<Footer />
		</>
	);
};

export default About;
