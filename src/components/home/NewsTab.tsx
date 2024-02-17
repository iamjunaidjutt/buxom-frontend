import React from "react";

import { LuArrowUpRight } from "react-icons/lu";

interface props {
	id: number;
	imgUrl: string;
	imgName: string;
	title: string;
}

const NewsTab: React.FC<props> = ({ id, imgUrl, imgName, title }) => {
	const evenId = id % 2 === 0;

	return (
		<div className={`${evenId ? "py-20" : ""} space-y-6`}>
			<p className="text-4xl font-bold">0{id}</p>
			<div
				className={`${
					evenId ? "w-[17rem] h-[17rem]" : "w-[33rem] h-[50rem]"
				} group relative`}
			>
				<div
					className={`absolute inset-0 blur group-hover:bg-pink`}
				></div>
				<a href="#">
					<img
						src={imgUrl}
						alt={imgName}
						className={
							"w-full h-full object-cover relative group-hover:border-2 bg-gradient-to-b from-slate-50 to-white"
						}
					/>
				</a>

				<div className="absolute -top-14 -left-14 hidden group-hover:block">
					<svg
						className="icon icon-bottom"
						width="115"
						height="115"
						viewBox="0 0 115 115"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
					>
						<g filter="url(#filter0_f_14005_206769)">
							<rect
								x="15"
								y="15"
								width="85"
								height="85"
								fill="url(#pattern0)"
							></rect>
						</g>
						<g filter="url(#filter1_f_14005_206769)">
							<rect
								x="15"
								y="15"
								width="85"
								height="85"
								fill="url(#pattern1)"
							></rect>
						</g>
						<g filter="url(#filter2_f_14005_206769)">
							<path
								d="M58 39L58.7715 55.1375L70.7279 44.2721L59.8625 56.2285L76 57L59.8625 57.7715L70.7279 69.7279L58.7715 58.8625L58 75L57.2285 58.8625L45.2721 69.7279L56.1375 57.7715L40 57L56.1375 56.2285L45.2721 44.2721L57.2285 55.1375L58 39Z"
								fill="#FF26C2"
								fill-opacity="0.7"
							></path>
						</g>
						<g opacity="0.3" filter="url(#filter3_f_14005_206769)">
							<path
								d="M58 31L59.2039 54.0935L76.3848 38.6152L60.9065 55.7961L84 57L60.9065 58.2039L76.3848 75.3848L59.2039 59.9065L58 83L56.7961 59.9065L39.6152 75.3848L55.0935 58.2039L32 57L55.0935 55.7961L39.6152 38.6152L56.7961 54.0935L58 31Z"
								fill="white"
							></path>
						</g>
						<path
							d="M58 36L58.9804 54.633L72.8492 42.1508L60.367 56.0196L79 57L60.367 57.9804L72.8492 71.8492L58.9804 59.367L58 78L57.0196 59.367L43.1508 71.8492L55.633 57.9804L37 57L55.633 56.0196L43.1508 42.1508L57.0196 54.633L58 36Z"
							fill="white"
						></path>
						<path
							opacity="0.2"
							d="M58.0012 27.1836L58.5946 55.5687L79.0854 35.917L59.4337 56.4078L87.8188 57.0012L59.4337 57.5946L79.0854 78.0854L58.5946 58.4337L58.0012 86.8188L57.4078 58.4337L36.917 78.0854L56.5687 57.5946L28.1836 57.0012L56.5687 56.4078L36.917 35.917L57.4078 55.5687L58.0012 27.1836Z"
							fill="white"
						></path>
						<defs>
							<filter
								id="filter0_f_14005_206769"
								x="0"
								y="0"
								width="115"
								height="115"
								filterUnits="userSpaceOnUse"
								color-interpolation-filters="sRGB"
							>
								<feFlood
									flood-opacity="0"
									result="BackgroundImageFix"
								></feFlood>
								<feBlend
									mode="normal"
									in="SourceGraphic"
									in2="BackgroundImageFix"
									result="shape"
								></feBlend>
								<feGaussianBlur
									stdDeviation="7.5"
									result="effect1_foregroundBlur_14005_206769"
								></feGaussianBlur>
							</filter>
							<pattern
								id="pattern0"
								patternContentUnits="objectBoundingBox"
								width="1"
								height="1"
							>
								<use
									xlinkHref="#image0_14005_206769"
									transform="translate(-0.188235 -0.188235) scale(0.0393277)"
								></use>
							</pattern>
							<filter
								id="filter1_f_14005_206769"
								x="0"
								y="0"
								width="115"
								height="115"
								filterUnits="userSpaceOnUse"
								color-interpolation-filters="sRGB"
							>
								<feFlood
									flood-opacity="0"
									result="BackgroundImageFix"
								></feFlood>
								<feBlend
									mode="normal"
									in="SourceGraphic"
									in2="BackgroundImageFix"
									result="shape"
								></feBlend>
								<feGaussianBlur
									stdDeviation="7.5"
									result="effect1_foregroundBlur_14005_206769"
								></feGaussianBlur>
							</filter>
							<pattern
								id="pattern1"
								patternContentUnits="objectBoundingBox"
								width="1"
								height="1"
							>
								<use
									xlinkHref="#image0_14005_206769"
									transform="translate(-0.188235 -0.188235) scale(0.0393277)"
								></use>
							</pattern>
							<filter
								id="filter2_f_14005_206769"
								x="20"
								y="19"
								width="76"
								height="76"
								filterUnits="userSpaceOnUse"
								color-interpolation-filters="sRGB"
							>
								<feFlood
									flood-opacity="0"
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
									result="effect1_foregroundBlur_14005_206769"
								></feGaussianBlur>
							</filter>
							<filter
								id="filter3_f_14005_206769"
								x="26"
								y="25"
								width="64"
								height="64"
								filterUnits="userSpaceOnUse"
								color-interpolation-filters="sRGB"
							>
								<feFlood
									flood-opacity="0"
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
									result="effect1_foregroundBlur_14005_206769"
								></feGaussianBlur>
							</filter>
							<image
								id="image0_14005_206769"
								width="35"
								height="35"
								xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAAXNSR0IArs4c6QAAASxJREFUWEdjZBhEgHEQuYVh1DG4YmM0ZEZDhtScOppmRtPMgKSZCZMm/y/Iy6U4/VFsAMj38xcs+p+YEEexWRQbAHLM5i1b//v6eFNsFkUG9PdP/M/IzMRgZ2vDcPrMGQY+Hj6GyMhwss0kWyMoRLp7ev7b2dkzaGioM7x+/YZh585dDNlZGWSbSbbGuXPn/ZeQkGAwMDRgkJKUZHj2/DnDhfMXGF69esOQmEhe+iHbMaCQmTx12n9PDw8GUVERhls3bzHsP3CQoay0mGwzydYIcsyKFSv/f/z0mcHE1ITh8OHD4GKFkixOkWNghdrWrdv+e3t7UWwWxQaAy5n5i/6Tm06QS2mqOGZQlcCk1kGjtTapIUaVNEOqpaPRRGqIjUbTaJoZTTOkhgAu9QA4qkokOrM0xAAAAABJRU5ErkJggg=="
							></image>
						</defs>
					</svg>
				</div>
				<div className="absolute -bottom-14 -right-14 hidden group-hover:block">
					<svg
						className="icon icon-bottom"
						width="115"
						height="115"
						viewBox="0 0 115 115"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
					>
						<g filter="url(#filter0_f_14005_206769)">
							<rect
								x="15"
								y="15"
								width="85"
								height="85"
								fill="url(#pattern0)"
							></rect>
						</g>
						<g filter="url(#filter1_f_14005_206769)">
							<rect
								x="15"
								y="15"
								width="85"
								height="85"
								fill="url(#pattern1)"
							></rect>
						</g>
						<g filter="url(#filter2_f_14005_206769)">
							<path
								d="M58 39L58.7715 55.1375L70.7279 44.2721L59.8625 56.2285L76 57L59.8625 57.7715L70.7279 69.7279L58.7715 58.8625L58 75L57.2285 58.8625L45.2721 69.7279L56.1375 57.7715L40 57L56.1375 56.2285L45.2721 44.2721L57.2285 55.1375L58 39Z"
								fill="#FF26C2"
								fill-opacity="0.7"
							></path>
						</g>
						<g opacity="0.3" filter="url(#filter3_f_14005_206769)">
							<path
								d="M58 31L59.2039 54.0935L76.3848 38.6152L60.9065 55.7961L84 57L60.9065 58.2039L76.3848 75.3848L59.2039 59.9065L58 83L56.7961 59.9065L39.6152 75.3848L55.0935 58.2039L32 57L55.0935 55.7961L39.6152 38.6152L56.7961 54.0935L58 31Z"
								fill="white"
							></path>
						</g>
						<path
							d="M58 36L58.9804 54.633L72.8492 42.1508L60.367 56.0196L79 57L60.367 57.9804L72.8492 71.8492L58.9804 59.367L58 78L57.0196 59.367L43.1508 71.8492L55.633 57.9804L37 57L55.633 56.0196L43.1508 42.1508L57.0196 54.633L58 36Z"
							fill="white"
						></path>
						<path
							opacity="0.2"
							d="M58.0012 27.1836L58.5946 55.5687L79.0854 35.917L59.4337 56.4078L87.8188 57.0012L59.4337 57.5946L79.0854 78.0854L58.5946 58.4337L58.0012 86.8188L57.4078 58.4337L36.917 78.0854L56.5687 57.5946L28.1836 57.0012L56.5687 56.4078L36.917 35.917L57.4078 55.5687L58.0012 27.1836Z"
							fill="white"
						></path>
						<defs>
							<filter
								id="filter0_f_14005_206769"
								x="0"
								y="0"
								width="115"
								height="115"
								filterUnits="userSpaceOnUse"
								color-interpolation-filters="sRGB"
							>
								<feFlood
									flood-opacity="0"
									result="BackgroundImageFix"
								></feFlood>
								<feBlend
									mode="normal"
									in="SourceGraphic"
									in2="BackgroundImageFix"
									result="shape"
								></feBlend>
								<feGaussianBlur
									stdDeviation="7.5"
									result="effect1_foregroundBlur_14005_206769"
								></feGaussianBlur>
							</filter>
							<pattern
								id="pattern0"
								patternContentUnits="objectBoundingBox"
								width="1"
								height="1"
							>
								<use
									xlinkHref="#image0_14005_206769"
									transform="translate(-0.188235 -0.188235) scale(0.0393277)"
								></use>
							</pattern>
							<filter
								id="filter1_f_14005_206769"
								x="0"
								y="0"
								width="115"
								height="115"
								filterUnits="userSpaceOnUse"
								color-interpolation-filters="sRGB"
							>
								<feFlood
									flood-opacity="0"
									result="BackgroundImageFix"
								></feFlood>
								<feBlend
									mode="normal"
									in="SourceGraphic"
									in2="BackgroundImageFix"
									result="shape"
								></feBlend>
								<feGaussianBlur
									stdDeviation="7.5"
									result="effect1_foregroundBlur_14005_206769"
								></feGaussianBlur>
							</filter>
							<pattern
								id="pattern1"
								patternContentUnits="objectBoundingBox"
								width="1"
								height="1"
							>
								<use
									xlinkHref="#image0_14005_206769"
									transform="translate(-0.188235 -0.188235) scale(0.0393277)"
								></use>
							</pattern>
							<filter
								id="filter2_f_14005_206769"
								x="20"
								y="19"
								width="76"
								height="76"
								filterUnits="userSpaceOnUse"
								color-interpolation-filters="sRGB"
							>
								<feFlood
									flood-opacity="0"
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
									result="effect1_foregroundBlur_14005_206769"
								></feGaussianBlur>
							</filter>
							<filter
								id="filter3_f_14005_206769"
								x="26"
								y="25"
								width="64"
								height="64"
								filterUnits="userSpaceOnUse"
								color-interpolation-filters="sRGB"
							>
								<feFlood
									flood-opacity="0"
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
									result="effect1_foregroundBlur_14005_206769"
								></feGaussianBlur>
							</filter>
							<image
								id="image0_14005_206769"
								width="35"
								height="35"
								xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAAXNSR0IArs4c6QAAASxJREFUWEdjZBhEgHEQuYVh1DG4YmM0ZEZDhtScOppmRtPMgKSZCZMm/y/Iy6U4/VFsAMj38xcs+p+YEEexWRQbAHLM5i1b//v6eFNsFkUG9PdP/M/IzMRgZ2vDcPrMGQY+Hj6GyMhwss0kWyMoRLp7ev7b2dkzaGioM7x+/YZh585dDNlZGWSbSbbGuXPn/ZeQkGAwMDRgkJKUZHj2/DnDhfMXGF69esOQmEhe+iHbMaCQmTx12n9PDw8GUVERhls3bzHsP3CQoay0mGwzydYIcsyKFSv/f/z0mcHE1ITh8OHD4GKFkixOkWNghdrWrdv+e3t7UWwWxQaAy5n5i/6Tm06QS2mqOGZQlcCk1kGjtTapIUaVNEOqpaPRRGqIjUbTaJoZTTOkhgAu9QA4qkokOrM0xAAAAABJRU5ErkJggg=="
							></image>
						</defs>
					</svg>
				</div>
			</div>
			<div className="space-y-1">
				<p className="text-md font-nunitoSans">{imgName}</p>
				<a
					href="#"
					className="group flex justify-between items-center text-xl font-nunitoSans font-extrabold"
				>
					<span>{title}</span>
					<LuArrowUpRight
						size={18}
						className="hidden group-hover:block"
					/>
				</a>
			</div>
		</div>
	);
};

export default NewsTab;
