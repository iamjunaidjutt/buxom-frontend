import { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import GlowingCardWrapper from "../ui/GlowingCardWrapper";

const AboutVideo = () => {
	const videoRef = useRef(null);
	const [isPaused, setIsPaused] = useState(true);

	const playNPause = () => {
		if (videoRef.current?.paused) {
			videoRef.current?.play();
		} else {
			videoRef.current?.pause();
		}
		setIsPaused(!isPaused);
	};

	return (
		<GlowingCardWrapper className={`my-14 ml-7 mr-5`}>
			<div className="relative">
				<video
					ref={videoRef}
					id="video-element"
					playsInline
					autoPlay
					loop
					preload="none"
					muted
					className="w-full h-auto"
					poster="files/preview_images/8983aa77fc7247b6a690dc86e8f7c819.thumbnail.0000000000.jpg"
				>
					<source
						src="https://cdn.shopify.com/videos/c/vp/8983aa77fc7247b6a690dc86e8f7c819/8983aa77fc7247b6a690dc86e8f7c819.SD-480p-1.2Mbps-18825453.mp4"
						type="video/mp4"
					></source>
					<source
						src="https://cdn.shopify.com/videos/c/vp/8983aa77fc7247b6a690dc86e8f7c819/8983aa77fc7247b6a690dc86e8f7c819.HD-1080p-4.8Mbps-18825453.mp4"
						type="video/mp4"
					></source>
					<source
						src="https://cdn.shopify.com/videos/c/vp/8983aa77fc7247b6a690dc86e8f7c819/8983aa77fc7247b6a690dc86e8f7c819.HD-720p-3.0Mbps-18825453.mp4"
						type="video/mp4"
					></source>
					<source
						src="https://cdn.shopify.com/videos/c/vp/8983aa77fc7247b6a690dc86e8f7c819/8983aa77fc7247b6a690dc86e8f7c819.m3u8"
						type="application/x-mpegURL"
					></source>
				</video>
				<button
					onClick={playNPause}
					className="flex items-center justify-center w-12 h-12 bg-black hover:bg-white hover:text-black transition duration-500 ease-in-out rounded-full absolute bottom-28 right-20 z-30"
				>
					{isPaused ? <FaPause /> : <FaPlay />}
				</button>
			</div>
		</GlowingCardWrapper>
	);
};

export default AboutVideo;
