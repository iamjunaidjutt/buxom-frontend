import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

interface props {
	children: React.ReactNode;
	className?: string;
}

const GlowingCardWrapper: React.FC<props> = ({ children, className }) => {
	const { scrollY } = useScroll();
	const [scaleUp, setScaleUp] = useState(false);

	useMotionValueEvent(scrollY, "change", (latest) => {
		if (latest > 100 && latest < 1100) {
			setScaleUp(true);
		} else {
			setScaleUp(false);
		}
	});

	return (
		<motion.div
			className={`relative ${className}`}
			animate={{
				scaleX: scaleUp ? 1.05 : 1,
				transition: { duration: 0.7 },
			}}
		>
			<div
				className={`absolute -top-14  -inset-0.5 blur bg-pink ${className}`}
			></div>
			<div
				className={`relative border-2 border-gradient-to-b from-slate-50 to-white bg-black ${className} ${
					scaleUp ? "p-0" : "p-14"
				}`}
			>
				{children}
			</div>
		</motion.div>
	);
};

export default GlowingCardWrapper;
