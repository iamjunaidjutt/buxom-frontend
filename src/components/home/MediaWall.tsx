import rabbit from "@/assets/logos/rabbit.avif";

const MediaWall = () => {
	return (
		<div className="flex mx-8 my-32 overflow-hidden whitespace-nowrap group">
			<div className="flex space-x-8 group-hover:paused animate-loop-scroll">
				<h3 className="font-nunitoSans w-max text-5xl font-extrabold text-nowrap">
					CRUELTY-FREE
				</h3>
				<img src={rabbit} alt="rabbit" className="w-max h-max" />
				<h3 className="font-nunitoSans w-max text-5xl font-extrabold text-nowrap">
					CRUELTY-FREE
				</h3>
				<img src={rabbit} alt="rabbit" className="w-max h-max" />
				<h3 className="font-nunitoSans w-max text-5xl font-extrabold text-nowrap">
					CRUELTY-FREE
				</h3>
				<img src={rabbit} alt="rabbit" className="w-max h-max" />
				<h3 className="font-nunitoSans w-max text-5xl font-extrabold text-nowrap">
					CRUELTY-FREE
				</h3>
				<img src={rabbit} alt="rabbit" className="w-max h-max" />
			</div>
			<div className="flex space-x-8 group-hover:paused animate-loop-scroll">
				<h3 className="font-nunitoSans w-max text-5xl font-extrabold text-nowrap">
					CRUELTY-FREE
				</h3>
				<img src={rabbit} alt="rabbit" className="w-max h-max" />
				<h3 className="font-nunitoSans w-max text-5xl font-extrabold text-nowrap">
					CRUELTY-FREE
				</h3>
				<img src={rabbit} alt="rabbit" className="w-max h-max" />
				<h3 className="font-nunitoSans w-max text-5xl font-extrabold text-nowrap">
					CRUELTY-FREE
				</h3>
				<img src={rabbit} alt="rabbit" className="w-max h-max" />
				<h3 className="font-nunitoSans w-max text-5xl font-extrabold text-nowrap">
					CRUELTY-FREE
				</h3>
				<img src={rabbit} alt="rabbit" className="w-max h-max" />
			</div>
		</div>
	);
};

export default MediaWall;
