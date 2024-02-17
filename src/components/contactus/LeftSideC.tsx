import { MdOutlineHelpOutline } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const LeftSideC = () => {
	return (
		<div className="space-y-16 bg-neutral-900 w-[16%] h-max rounded-lg px-5 py-12">
			<div className="space-y-4">
				<h3 className="uppercase flex gap-3 items-center text-base font-extrabold font-nunitoSans">
					<MdOutlineHelpOutline className="text-red-100" size={24} />
					Need Support?
				</h3>
				<div>
					<a href="#" className="border-b w-max text-sm">
						Contact Us
					</a>
				</div>
			</div>
			<div className="space-y-4">
				<h3 className="uppercase flex gap-3 items-center text-base font-extrabold font-nunitoSans">
					<IoChatbubbleEllipsesOutline
						className="text-red-100"
						size={24}
					/>
					Customer Service
				</h3>
				<p className="text-sm">Monday - Saturday: 9AM - 11PM ET</p>
				<div>
					<a href="#" className="border-b w-max text-sm">
						Chat Now
					</a>
				</div>
			</div>
		</div>
	);
};

export default LeftSideC;
