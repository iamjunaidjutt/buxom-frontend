interface props {
	large?: boolean;
	title?: string;
	heading?: string;
}

const SeperatorLine: React.FC<props> = ({ large, title, heading }) => {
	return (
		<div className="space-y-4">
			<div
				className={`${
					large
						? "mx-10 gap-72 after:w-[112.3rem]"
						: "mx-56 gap-32  after:w-[89.4rem]"
				} flex items-center  relative after:content-[''] after:h-[2px] after:bg-pink after:left-5 after:bottom-3 after:rounded-xl after:absolute after:duration-500 after:transition-opacity after:ease-in-out`}
			>
				{title && (
					<>
						<svg
							width="67"
							height="67"
							viewBox="0 0 67 67"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
						>
							<g filter="url(#filter0_f)">
								<rect
									x="9"
									y="9"
									width="49"
									height="49"
									fill="url(#pattern0)"
								></rect>
							</g>
							<g filter="url(#filter1_f)">
								<rect
									x="9"
									y="9"
									width="49"
									height="49"
									fill="url(#pattern1)"
								></rect>
							</g>
							<g filter="url(#filter2_f)">
								<path
									d="M33.7866 22.8359L34.2314 32.1387L41.1239 25.8751L34.8603 32.7677L44.1631 33.2124L34.8603 33.6571L41.1239 40.5497L34.2314 34.2861L33.7866 43.5889L33.3419 34.2861L26.4494 40.5497L32.7129 33.6571L23.4102 33.2124L32.7129 32.7677L26.4494 25.8751L33.3419 32.1387L33.7866 22.8359Z"
									fill="#FF26C2"
									fillOpacity="0.7"
								></path>
							</g>
							<g opacity="0.3" filter="url(#filter3_f)">
								<path
									d="M33.789 18.2227L34.483 31.5354L44.3873 22.6126L35.4645 32.5169L48.7773 33.2109L35.4645 33.9049L44.3873 43.8092L34.483 34.8864L33.789 48.1991L33.095 34.8864L23.1907 43.8092L32.1135 33.9049L18.8008 33.2109L32.1135 32.5169L23.1907 22.6126L33.095 31.5354L33.789 18.2227Z"
									fill="white"
								></path>
							</g>
							<path
								d="M33.7895 21.1055L34.3547 31.8469L42.3496 24.6512L35.154 32.6462L45.8954 33.2114L35.154 33.7765L42.3496 41.7715L34.3547 34.5758L33.7895 45.3172L33.2243 34.5758L25.2293 41.7715L32.425 33.7765L21.6836 33.2114L32.425 32.6462L25.2293 24.6512L33.2243 31.8469L33.7895 21.1055Z"
								fill="white"
							></path>
							<path
								opacity="0.2"
								d="M33.7866 16.0234L34.1287 32.3866L45.9411 21.058L34.6124 32.8704L50.9756 33.2124L34.6124 33.5545L45.9411 45.3668L34.1287 34.0382L33.7866 50.4014L33.4446 34.0382L21.6322 45.3668L32.9608 33.5545L16.5977 33.2124L32.9608 32.8704L21.6322 21.058L33.4446 32.3866L33.7866 16.0234Z"
								fill="white"
							></path>
							<defs>
								<filter
									id="filter0_f"
									x="0.352941"
									y="0.352941"
									width="66.2941"
									height="66.2941"
									filterUnits="userSpaceOnUse"
									colorInterpolationFilters="sRGB"
								>
									<feFlood
										floodOpacity="0"
										result="BackgroundImageFix"
									></feFlood>
									<feBlend
										mode="normal"
										in="SourceGraphic"
										in2="BackgroundImageFix"
										result="shape"
									></feBlend>
									<feGaussianBlur
										stdDeviation="4.32353"
										result="effect1_foregroundBlur"
									></feGaussianBlur>
								</filter>
								<pattern
									id="pattern0"
									patternContentUnits="objectBoundingBox"
									width="1"
									height="1"
								>
									<use
										xlinkHref="#image0"
										transform="translate(-0.188235 -0.188235) scale(0.0393277)"
									></use>
								</pattern>
								<filter
									id="filter1_f"
									x="0.352941"
									y="0.352941"
									width="66.2941"
									height="66.2941"
									filterUnits="userSpaceOnUse"
									colorInterpolationFilters="sRGB"
								>
									<feFlood
										floodOpacity="0"
										result="BackgroundImageFix"
									></feFlood>
									<feBlend
										mode="normal"
										in="SourceGraphic"
										in2="BackgroundImageFix"
										result="shape"
									></feBlend>
									<feGaussianBlur
										stdDeviation="4.32353"
										result="effect1_foregroundBlur"
									></feGaussianBlur>
								</filter>
								<pattern
									id="pattern1"
									patternContentUnits="objectBoundingBox"
									width="1"
									height="1"
								>
									<use
										xlinkHref="#image0"
										transform="translate(-0.188235 -0.188235) scale(0.0393277)"
									></use>
								</pattern>
								<filter
									id="filter2_f"
									x="3.41016"
									y="2.83594"
									width="60.7539"
									height="60.7539"
									filterUnits="userSpaceOnUse"
									colorInterpolationFilters="sRGB"
								>
									<feFlood
										floodOpacity="0"
										result="BackgroundImageFix"
									></feFlood>
									<feBlend
										mode="normal"
										in="SourceGraphic"
										in2="BackgroundImageFix"
										result="shape"
									></feBlend>
									<feGaussianBlur
										stdDeviation="10"
										result="effect1_foregroundBlur"
									></feGaussianBlur>
								</filter>
								<filter
									id="filter3_f"
									x="12.8008"
									y="12.2227"
									width="41.9766"
									height="41.9766"
									filterUnits="userSpaceOnUse"
									colorInterpolationFilters="sRGB"
								>
									<feFlood
										floodOpacity="0"
										result="BackgroundImageFix"
									></feFlood>
									<feBlend
										mode="normal"
										in="SourceGraphic"
										in2="BackgroundImageFix"
										result="shape"
									></feBlend>
									<feGaussianBlur
										stdDeviation="3"
										result="effect1_foregroundBlur"
									></feGaussianBlur>
								</filter>
								<image
									id="image0"
									width="35"
									height="35"
									xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAAXNSR0IArs4c6QAAASxJREFUWEdjZBhEgHEQuYVh1DG4YmM0ZEZDhtScOppmRtPMgKSZCZMm/y/Iy6U4/VFsAMj38xcs+p+YEEexWRQbAHLM5i1b//v6eFNsFkUG9PdP/M/IzMRgZ2vDcPrMGQY+Hj6GyMhwss0kWyMoRLp7ev7b2dkzaGioM7x+/YZh585dDNlZGWSbSbbGuXPn/ZeQkGAwMDRgkJKUZHj2/DnDhfMXGF69esOQmEhe+iHbMaCQmTx12n9PDw8GUVERhls3bzHsP3CQoay0mGwzydYIcsyKFSv/f/z0mcHE1ITh8OHD4GKFkixOkWNghdrWrdv+e3t7UWwWxQaAy5n5i/6Tm06QS2mqOGZQlcCk1kGjtTapIUaVNEOqpaPRRGqIjUbTaJoZTTOkhgAu9QA4qkokOrM0xAAAAABJRU5ErkJggg=="
								></image>
							</defs>
						</svg>
						<div className="w-full flex text-gray-200 justify-between  font-nunitoSans tracking-widest">
							<p className="text-sm font-semibold uppercase">
								{title}
							</p>
							<p className="font-bold">XO</p>
						</div>
					</>
				)}
			</div>
			{heading && (
				<div className={`${large ? "mx-14" : "mx-60"}`}>
					<h1
						className={`${
							large ? "text-7xl" : "text-5xl"
						} font-bold stroke-white text-black font-nunitoSans uppercase`}
					>
						{heading}
					</h1>
				</div>
			)}
		</div>
	);
};

export default SeperatorLine;
