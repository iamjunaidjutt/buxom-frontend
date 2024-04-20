import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import BX_WI23_Homepage_Hero from "@/assets/img/BX_WI23_Homepage_PlumpShotLip_D.webp";
import BX_1Q24_Homepage_Hero from "@/assets/img/BX_1Q24_VDay_HP_D.webp";

import GlowingCardWrapper from "@/components/ui/GlowingCardWrapper";
import SecondaryBtn from "@/components/ui/SecondaryBtn";
import { useNavigate } from "react-router-dom";

const LandingSection = () => {
	const { scrollY } = useScroll();
	const [scaleUp, setScaleUp] = useState(false);
	const navigate = useNavigate();

	useMotionValueEvent(scrollY, "change", (latest) => {
		if (latest > 100 && latest < 1100) {
			setScaleUp(true);
		} else {
			setScaleUp(false);
		}
	});

	return (
		<div className="space-y-28">
			{/* Hero */}
			<GlowingCardWrapper className={`my-14 ml-7 mr-5`}>
				<div
					className={`bg-black text-white relative transition-all duration-700 ${
						scaleUp ? "p-14" : "p-14"
					}`}
				>
					<motion.img
						src={BX_1Q24_Homepage_Hero}
						alt="Homepage Image"
						className="h-screen object-cover object-center"
						animate={{
							scale: scaleUp ? 1.07 : 1,
							transition: { duration: 0.7 },
						}}
					/>
					<div
						className={`absolute top-0 flex flex-col items-start justify-center h-screen space-y-5 transition-all duration-700 ${
							scaleUp ? "w-1/2" : ""
						}`}
					>
						<h1 className="text-7xl font-bold stroke-white text-black">
							BE YOUR OWN BAE
						</h1>
						<p className="w-3/4">
							Turn V-Day into me-day with a three-piece gift +
							FREE Shipping when you spend $40+. Select gifts in
							cart.
						</p>
						<SecondaryBtn
							type="button"
							onClick={() => navigate("/products")}
						>
							SHOP NOW
						</SecondaryBtn>
					</div>
				</div>
			</GlowingCardWrapper>
			<GlowingCardWrapper className="my-14 ml-7 mr-5">
				<div
					className={`bg-black text-white relative ${
						scaleUp ? "p-14" : ""
					}`}
				>
					<motion.img
						src={BX_WI23_Homepage_Hero}
						alt="Homepage Image"
						className="h-screen object-cover object-center"
						animate={{
							scale: scaleUp ? 1.065 : 1,
							transition: { duration: 0.7 },
						}}
					/>
					<div
						className={`absolute top-0 right-0 flex flex-col items-start justify-center h-screen space-y-5 w-1/2  ${
							scaleUp ? "w-1/2" : ""
						}`}
					>
						<p className="font-bold">
							NEW PLUMP SHOT™ COLLAGEN PEPTIDES LIP SERUM
						</p>
						<h1 className="text-7xl font-bold stroke-white text-black">
							MULTI-CHROME TINTS
						</h1>
						<p className="w-3/4">
							Visibly plump lips by 18%* without pain in five NEW
							hypnotic, color-shifting shades. Get Free Shipping
							with any Plump Shot™ purchase!
						</p>
						<SecondaryBtn
							type="button"
							onClick={() => navigate("/products")}
						>
							SHOP NOW
						</SecondaryBtn>
					</div>
				</div>
			</GlowingCardWrapper>
		</div>
	);
};

export default LandingSection;
