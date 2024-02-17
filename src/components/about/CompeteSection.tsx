import BX_SU23_OurPhilosophy from "@/assets/about/BX_SU23_AboutUs_M3_2_OurPhikosophy_MeetDolly.webp";
import BX_About_Vid from "@/assets/about/e615822894d04db5a8e2f7d36809eb5d.SD-480p-1.5Mbps-18425206.mp4";

import AboutNewTab from "./AboutNewTab";

const CompeteSection = () => {
	return (
		<div className="mb-56">
			<div className="flex gap-24 text-sm mx-80 my-3 font-nunitoSans font-medium text-gray-50">
				<p className="uppercase">Our Philosophy</p>
				<p className="w-3/12">
					Size matters. Unleash your plumpest pout with our
					transformative textures, sensorial experiences, and
					cruelty-free formulas.
				</p>
			</div>
			<h3 className="text-8xl w-8/12 font-bold stroke-white text-black px-16 py-8 uppercase">
				WE’RE NOT LIKE OTHER PLUMPERS…
			</h3>
			<div className="flex gap-16 mx-16 my-10">
				<AboutNewTab
					vidUrl={BX_About_Vid}
					vidDesc="LOOK HOT, BUT FEEL COOL. OUR PAINLESS PLUMPING FORMULAS GIVES YOU ALL THE VOLUME, NONE OF THE PAIN AND AN ADDICTIVE COOLING TINGLE."
					title="All Gain, No Pain"
				/>
				<AboutNewTab
					imgUrl={BX_SU23_OurPhilosophy}
					imgName="Buxom Our Philosophy"
					imgDesc="SHE'S MAUVE, SHE'S FAB, SHE IS THE MOMENT. TRY OUR UNIVERSALLY FLATTERING, BEST-SELLING SHADE FOR YOUR LIPS, EYES AND CHEEKS AND STUN IN SHOWSTOPPING LOOKS THAT DEMAND ATTENTION."
					title="Meet Dolly"
				/>
			</div>
		</div>
	);
};

export default CompeteSection;
