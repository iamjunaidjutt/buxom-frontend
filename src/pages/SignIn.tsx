import Footer from "@/components/home/Footer";
import MainBar from "@/components/home/MainBar";
import MediaWall from "@/components/home/MediaWall";
import SubMenu from "@/components/home/SubMenu";
import AccountLogin from "@/components/signIn/AccountLogin";
import { Separator } from "@/components/ui/separator";

const SignIn = () => {
	return (
		<>
			<MainBar />
			<Separator className="opacity-50" />
			<SubMenu />
			<Separator className="opacity-50" />
			<AccountLogin />
			<MediaWall />
			<Footer />
		</>
	);
};

export default SignIn;
