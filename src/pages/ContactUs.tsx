import Footer from "@/components/home/Footer";
import MainBar from "@/components/home/MainBar";
import MediaWall from "@/components/home/MediaWall";
import SubMenu from "@/components/home/SubMenu";
import Contactus from "@/components/contactus/Contactus";
import { Separator } from "@/components/ui/separator";

const ContactUs = () => {
	return (
		<>
			<MainBar />
			<Separator className="opacity-50" />
			<SubMenu />
			<Separator className="opacity-50" />
			<Contactus />
			<MediaWall />
			<Footer />
		</>
	);
};

export default ContactUs;
