import { useState } from "react";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import SupportMenu from "@/components/home/SupportMenu";

const MainBar = () => {
	const [isClicked, setIsClicked] = useState<boolean>(false);
	const items = [
		{
			id: 1,
			text: "Free three pieces gift + shipping when you spend $100 or more. Select gift in cart. ",
			linkText: "Shop now",
			link: "#",
		},
		{
			id: 2,
			text: "Free three pieces gift + shipping when you spend $100 or more. ",
			linkText: "Shop now",
			link: "#",
		},
	];
	return (
		<div className="w-full py-1 flex items-center">
			<div className="max-w-lg ml-[42rem]">
				<Carousel>
					<CarouselContent>
						{items.map((item) => (
							<CarouselItem key={item.id} className="text-center">
								<div>
									<p className="text-sm font-medium text-center text-white inline">
										{item.text}
									</p>
									<a
										href={item.link}
										className="text-sm font-medium text-center text-gray-200 underline"
									>
										{item.linkText}
									</a>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="bg-neutral text-white border-0 hover:bg-neutral hover:text-white" />
					<CarouselNext className="bg-neutral text-white border-0 hover:bg-neutral hover:text-white" />
				</Carousel>
			</div>
			<div className="ml-[18rem]">
				<a
					href="#"
					className="text-sm font-medium text-center text-white hover:text-gray-300"
				>
					Sign&nbsp;In
				</a>
				<span className="text-sm font-medium text-center text-white mx-3">
					|
				</span>
				<a
					href="#"
					className={`text-sm font-medium text-center text-white inline-flex items-center ${
						isClicked ? "relative" : "hover:text-gray-300"
					}`}
					onClick={() => setIsClicked((prev) => !prev)}
				>
					Support&nbsp;
					{isClicked ? (
						<IoMdArrowDropup size={17} />
					) : (
						<IoMdArrowDropdown size={17} />
					)}
					{isClicked && <SupportMenu />}
				</a>
			</div>
		</div>
	);
};

export default MainBar;
