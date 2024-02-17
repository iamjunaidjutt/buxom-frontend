import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { BsEnvelope } from "react-icons/bs";
import { FiClock, FiPhoneCall } from "react-icons/fi";
import BX_SU23_ContactUs from "@/assets/contactus/BX_SU23_Contact_M1_Hero_D_600x600.avif";
import { Separator } from "@/components/ui/separator";

const RightSideC = () => {
	return (
		<div className="space-y-10 w-[50%]">
			<h1 className="uppercase text-5xl font-bold mb-20">Contact Us</h1>
			<img
				src={BX_SU23_ContactUs}
				alt="banner"
				className=" object-cover w-full"
			/>
			<h3 className="uppercase text-4xl font-bold">Have a question?</h3>
			<p>
				We’re here to help! Our friendly and knowledgeable Beauty
				Advisors want to make sure you have the best experience
				possible. Reach us via email or phone between the hours listed
				below. Please also refer to our FAQs page for immediate answers
				to commonly asked questions.
			</p>
			<div className="flex gap-56">
				<section className="space-y-10">
					<div className="flex gap-5 items-center">
						<BsEnvelope className="text-red-100" size={24} />
						<div>
							<h3 className="uppercase text-base font-extrabold font-nunitoSans">
								Email Us:
							</h3>
							<div>
								<a href="#" className="border-b w-max text-sm">
									customerservice@buxomcosmetics.com
								</a>
							</div>
						</div>
					</div>
					<div className="flex gap-5 items-center">
						<IoChatbubbleEllipsesOutline
							className="text-red-100"
							size={24}
						/>
						<div className="space-y-3">
							<h3 className="uppercase text-base font-extrabold font-nunitoSans">
								Live Chat:
							</h3>
							<p>Monday - Saturday: 9AM - 11PM ET</p>
							<div>
								<a href="#" className="border-b w-max text-sm">
									Chat Now
								</a>
							</div>
						</div>
					</div>
				</section>
				<section className="space-y-16">
					<div className="flex gap-5 items-center">
						<FiPhoneCall className="text-red-100" size={24} />
						<div>
							<h3 className="uppercase text-base font-extrabold font-nunitoSans">
								Contact Us:
							</h3>
							<div>
								<a href="#" className="border-b w-max text-sm">
									1-844-383-3463
								</a>
							</div>
						</div>
					</div>
					<div className="flex gap-5 items-center">
						<FiClock className="text-red-100" size={24} />
						<div className="space-y-0">
							<h3 className="uppercase text-base font-extrabold font-nunitoSans">
								Hours:
							</h3>
							<p>Monday - Saturday: 9AM - 11PM ET</p>
						</div>
					</div>
				</section>
			</div>
			<Separator className="my-28" />
			<div className="space-y-7">
				<h3 className="uppercase text-4xl font-bold">
					Hours of Operation
				</h3>
				<p className="uppercase text-gray-300 text-lg font-bold tracking-tighter">
					TO BE MINDFUL OF OUR TEAMS’ WELL-BEING DURING THIS
					UNPRECEDENTED TIME WE HAVE ADJUSTED OUR OPERATIONS. YOUR
					ORDER MAY INCUR A LONGER PROCESSING AND/OR SHIPPING TIME.
				</p>
				<p className="text-gray-200">
					Please note Customer Service is closed or may have
					abbreviated hours for the following US holidays: New Year’s
					Day, Memorial Day, Fourth of July, Labor Day, Thanksgiving,
					Christmas Eve, Christmas Day and New Year’s Eve. Additional
					federal holiday closures may also apply.
				</p>
			</div>
		</div>
	);
};

export default RightSideC;
