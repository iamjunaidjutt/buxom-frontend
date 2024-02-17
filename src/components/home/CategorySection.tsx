import CategoryTab from "@/components/home/CategoryTab";

import BX_HO23_Product from "@/assets/prod_imgs/BX_HO23_Homepage_Oct_M3_2_Lips_D_overlay.webp";
import BX_HO23_Bg from "@/assets/prod_imgs/BX_HO23_Homepage_Oct_M3_2_Lips_D.jpg";
import BX_HO24_Product from "@/assets/prod_imgs/BX_HO23_Homepage_Oct_M3_1_Eyes_D_overlay.webp";
import BX_HO24_Bg from "@/assets/prod_imgs/BX_HO23_Homepage_Oct_M3_1_Eyes_D.jpg";
import BX_HO25_Product from "@/assets/prod_imgs/BX_WI23_Homepage_PlumpShot_M4_Product_Face_D.webp";
import BX_HO25_Bg from "@/assets/prod_imgs/BX_HO23_Homepage_Oct_M3_2_Face_D.jpg";

const CategorySection = () => {
	return (
		<div className="flex gap-16 p-16">
			<a href="#">
				<CategoryTab
					prod_img_url={BX_HO23_Product}
					bg_img_url={BX_HO23_Bg}
					categoryName="LIPS"
				/>
			</a>
			<a href="#">
				<CategoryTab
					prod_img_url={BX_HO24_Product}
					bg_img_url={BX_HO24_Bg}
					categoryName="EYES"
				/>
			</a>
			<a href="#">
				<CategoryTab
					prod_img_url={BX_HO25_Product}
					bg_img_url={BX_HO25_Bg}
					categoryName="FACE"
				/>
			</a>
		</div>
	);
};

export default CategorySection;
