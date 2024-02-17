import NewsTab from "@/components/home/NewsTab";

import BX_W123 from "@/assets/news/BX_WI23_Homepage_PlumpShot_M5_BuxomNewsGrid_1_D_M.webp";
import BX_HO24 from "@/assets/news/BX_HO24_Homepage_Oct_M4_4_BuxomNews04_D.webp";
import BX_AHM from "@/assets/news/ahm_preferred04_1_1_1.webp";
import BX_HO23 from "@/assets/news/BX_HO23_Homepage_Oct_M4_2_BuxomNews02_D.avif";

const NewsSection = () => {
	return (
		<>
			<div className="flex gap-16 px-12 py-16">
				<NewsTab
					id={1}
					imgUrl={BX_W123}
					imgName="FIG 001"
					title="THE PLUMP SHOT™ POSSE"
				/>
				<NewsTab
					id={2}
					imgUrl={BX_HO24}
					imgName="FIG 002"
					title="PLUMP WITHOUT PAIN"
				/>
				<NewsTab
					id={3}
					imgUrl={BX_AHM}
					imgName="FIG 003"
					title="ASH K. HOLM"
				/>
				<NewsTab
					id={4}
					imgUrl={BX_HO23}
					imgName="FIG 004"
					title="KEEP IT SPICY"
				/>
			</div>
		</>
	);
};

export default NewsSection;
