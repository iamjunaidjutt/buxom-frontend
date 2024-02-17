import ShowcaseTab from "./ShowcaseTab";

import BX_SU23_AboutUs_MeetBuxom from "@/assets/about/BX_SU23_AboutUs_M2_1_MeetBuxom.webp";
import BX_SU23_AboutUs_BigBoldSexy from "@/assets/about/BX_SU23_AboutUs_M2_2_BigBoldSexy.webp";
import BX_SU23_AboutUs_ThePlumpingRevolution from "@/assets/about/BX_SU23_AboutUs_M2_3_ThePlumpingRevolution_847K.webp";
import BX_SU23_AboutUs_ClinicalPlumping from "@/assets/about/BX_SU23_AboutUs_M2_4_ClinicalPlumping.webp";

const ShowcaseSection = () => {
	return (
		<div className="my-10 mb-24">
			<ShowcaseTab
				id={1}
				imageUrl={BX_SU23_AboutUs_MeetBuxom}
				heading="Meet Buxom"
				desc="It all began in 2006 with a range of Plumping Lip Glosses to stimulate the senses, with standout color to unleash your inner vixen. Today, we’re the lip plumping experts, with an array of pain-free plumpers and makeup must-haves that give you the confidence to be your boldest self."
			/>
			<ShowcaseTab
				id={2}
				imageUrl={BX_SU23_AboutUs_BigBoldSexy}
				heading="Big. Bold. Sexy."
				desc="We believe a swipe of lip color can instantly give anyone main character energy, to be the center of attention, take risks, turn heads, have fun, and be unapologetically themselves. That is what BIG. BOLD. SEXY. is all about."
			/>
			<ShowcaseTab
				id={3}
				imageUrl={BX_SU23_AboutUs_ThePlumpingRevolution}
				heading="The Plumping Revolution"
				desc="#1 for a reason. Our iconic Full-On Plumping Lip Polish is designed to unleash your sexy alter-ego and stimulate your senses. When you feel that tantalizing tingle, and see your lips reach their full pout-ential, your sultriest self is bound to come out and play.."
			/>
			<ShowcaseTab
				id={4}
				imageUrl={BX_SU23_AboutUs_ClinicalPlumping}
				heading="Clinical Plumping, Yes Please"
				desc="Our Advanced Plumping Lip Serum visibly plumps by 18% - and let's be honest...size matters. *In a U.S. clinical study of 30 people."
			/>
		</div>
	);
};

export default ShowcaseSection;
