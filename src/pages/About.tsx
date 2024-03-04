import AboutLanding from "@/components/about/AboutLanding";
import ShowcaseSection from "@/components/about/ShowcaseSection";
import SeperatorLine from "@/components/ui/SeperatorLine";
import CompeteSection from "@/components/about/CompeteSection";
import ProductCard from "@/components/ui/ProductCard";

const About = () => {
	return (
		<>
			<AboutLanding />
			<ShowcaseSection />
			<SeperatorLine large />
			<CompeteSection />
			<SeperatorLine title="Babe Faves" heading="Babe Faves" />
			<div className="my-20 mx-60">
				<ProductCard />
			</div>
		</>
	);
};

export default About;
