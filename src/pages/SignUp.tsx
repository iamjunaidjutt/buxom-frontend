import Footer from "@/components/home/Footer";
import MainBar from "@/components/home/MainBar";
import MediaWall from "@/components/home/MediaWall";
import SubMenu from "@/components/home/SubMenu";
import CreateAccount from "@/components/signup/CreateAccount";
import { Separator } from "@/components/ui/separator";

const SignUp = () => {
	return (
		<>
			<MainBar />
			<Separator className="opacity-50" />
			<SubMenu />
			<Separator className="opacity-50" />
			<CreateAccount />
			<MediaWall />
			<Footer />
		</>
	);
};

export default SignUp;
