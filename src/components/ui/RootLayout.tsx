import { Outlet } from "react-router-dom";

import MainBar from "@/components/home/MainBar";
import SubMenu from "@/components/home/SubMenu";
import { Separator } from "@/components/ui/separator";
import MediaWall from "@/components/home/MediaWall";
import Footer from "@/components/home/Footer";

const RootLayout = () => {
	return (
		<>
			{/* Main Navigation */}
			<MainBar />
			<Separator className="opacity-50" />
			<SubMenu />
			<Separator className="opacity-50" />
			{/* Page Content */}
			<Outlet />
			{/* Footer Section */}
			<MediaWall />
			<Footer />
		</>
	);
};

export default RootLayout;
