import { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import SecondaryBtn from "@/components/ui/SecondaryBtn";

const VideoSection = () => {
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
		<div className="relative">
			<video
				ref={videoRef}
				id="video-element"
				playsInline
				autoPlay
				loop
				preload="none"
				muted
				poster="files/preview_images/8983aa77fc7247b6a690dc86e8f7c819.thumbnail.0000000000.jpg"
				className="w-full h-auto"
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
			<div className="absolute top-0 left-16 flex flex-col items-start justify-center h-screen space-y-5 w-1/2">
				<p className="font-bold">THE TROUBLEMAKER</p>
				<h3 className="text-7xl font-bold stroke-white-thin text-transparent">
					NEW FULL-ON LIPSTICK
				</h3>
				<SecondaryBtn>SHOP NOW</SecondaryBtn>
			</div>
		</div>
	);
};

export default VideoSection;
