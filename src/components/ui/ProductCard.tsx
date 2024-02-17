import BX_NewPlumpShot from "@/assets/prod_imgs/BX_NewPlumpShot_PDP_Silo_Texture_DreamyDolly_3000x3000.webp";
import { Badge } from "@/components/ui/badge";

const ProductCard = () => {
	const lipsColorCodes = [
		{
			name: "Dreamy Dolly",
			color: "Vibrant Mauve with red & violet shift",
			code: "#bd515a",
		},
		{
			name: "Spellbound Pink",
			color: "Opalescent Pink with gold & violet shift",
			code: "rgb(244, 149, 181)",
		},
		{
			name: "Enchanted Berry",
			color: "Warm Berry with gold & red shift",
			code: "rgb(187, 71, 56)",
		},
		{
			name: "Starstruck Coral",
			color: "Bright Peach with yellow & orange shift",
			code: "rgb(205, 101, 67)",
		},
		{
			name: "Cosmic Fireball",
			color: "Fiery Red with gold & orange shift",
			code: "rgb(204, 0, 0)",
		},
		{
			name: "Mystic Magenta",
			color: "Rich Magenta with blue & violet shift",
			code: "rgb(153, 0, 153)",
		},
		{
			name: "Astral Blue",
			color: "Icy Blue with silver & violet shift",
			code: "rgb(0, 0, 255)",
		},
		{
			name: "Galactic Gold",
			color: "Golden Yellow with gold & green shift",
			code: "rgb(255, 215, 0)",
		},
		{
			name: "Celestial Silver",
			color: "Shimmering Silver with silver & blue shift",
			code: "rgb(192, 192, 192)",
		},
		{
			name: "Luminous Lilac",
			color: "Soft Lavender with blue & pink shift",
			code: "rgb(204, 153, 255)",
		},
		{
			name: "Radiant Ruby",
			color: "Rich Ruby with red & pink shift",
			code: "rgb(227, 38, 54)",
		},
		{
			name: "Glowing Garnet",
			color: "Deep Red with gold & red shift",
			code: "rgb(156, 0, 0)",
		},
		{
			name: "Lustrous Latte",
			color: "Warm Brown with gold & red shift",
			code: "rgb(102, 51, 0)",
		},
		{
			name: "Brilliant Bronze",
			color: "Bronze with gold & red shift",
			code: "rgb(205, 127, 50)",
		},
		{
			name: "Dazzling Diamond",
			color: "Iridescent White with silver & blue shift",
			code: "rgb(255, 255, 255)",
		},
		{
			name: "Sparkling Sapphire",
			color: "Deep Blue with silver & blue shift",
			code: "rgb(0, 0, 128)",
		},
		{
			name: "Twinkling Topaz",
			color: "Golden Brown with gold & red shift",
			code: "rgb(255, 204, 0)",
		},
		{
			name: "Glimmering Gold",
			color: "Bright Gold with gold & yellow shift",
			code: "rgb(255, 215, 0)",
		},
		{
			name: "Shimmering Silver",
			color: "Shimmering Silver with silver & blue shift",
			code: "rgb(192, 192, 192)",
		},
		{
			name: "Radiant Ruby",
			color: "Rich Ruby with red & pink shift",
			code: "rgb(227, 38, 54)",
		},
		{
			name: "Glowing Garnet",
			color: "Deep Red with gold & red shift",
			code: "rgb(156, 0, 0)",
		},
		{
			name: "Lustrous Latte",
			color: "Warm Brown with gold & red shift",
			code: "rgb(102, 51, 0)",
		},
		{
			name: "Brilliant Bronze",
			color: "Bronze with gold & red shift",
			code: "rgb(205, 127, 50)",
		},
		{
			name: "Dazzling Diamond",
			color: "Iridescent White with silver & blue shift",
			code: "rgb(255, 255, 255)",
		},
		{
			name: "Sparkling Sapphire",
			color: "Deep Blue with silver & blue shift",
			code: "rgb(0, 0, 128)",
		},
		{
			name: "Twinkling Topaz",
			color: "Golden Brown with gold & red shift",
			code: "rgb(255, 204, 0)",
		},
		{
			name: "Glimmering Gold",
			color: "Bright Gold with gold & yellow shift",
			code: "rgb(255, 215, 0)",
		},
		{
			name: "Shimmering Silver",
			color: "Shimmering Silver with silver & blue shift",
			code: "rgb(192, 192, 192)",
		},
	];
	return (
		<div className="relative group w-[27rem] font-nunitoSans">
			<div className="absolute -inset-2 rounded-2xl bg-pink blur opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out"></div>
			<div className="relative transition duration-600 ease-in-out bg-white text-black p-5 rounded-2xl">
				<div className="relative w-96">
					<img
						src={BX_NewPlumpShot}
						alt="product1"
						className="object-center w-full h-96 rounded-xl"
					/>
					<div className="absolute top-2 space-x-2">
						<Badge className="font-bold text-sm">Bestseller</Badge>
						<Badge className="font-bold text-sm">New</Badge>
					</div>
				</div>
				<div className="space-y-5">
					<div className=""></div>
					<div className="space-y-2">
						<p className="text-sm">Dreamy Dolly</p>
						<div className="space-x-2.5">
							{lipsColorCodes.slice(0, 8).map((color) => (
								<button
									key={color.name}
									type="button"
									value={color.name}
									aria-label={color.name}
									data-variant-id="44543207571694"
									data-sku="43000031137"
									data-title={color.name}
									data-price="$29.00"
									data-description={color.color}
									style={{
										background: `url(//buxomcosmetics.com/cdn/shop/files/Lips_White.png?v=1685021582) no-repeat center/cover ${color.code}`,
									}}
									className="repeat-x bg-center bg-cover w-8 h-8 rounded-full focus:border-2 focus:border-black p-2"
								></button>
							))}
							{lipsColorCodes.length > 8 && (
								<Badge
									variant={"secondary"}
									className="text-md group-hover:border group-hover:border-black"
								>
									{lipsColorCodes.length - 8}
								</Badge>
							)}
						</div>
					</div>
					<div className=""></div>
					<div className="">
						<h3 className="font-extrabold text-xl">
							PLUMP SHOT™ LIP SERUM
						</h3>
					</div>
					<div className="text-sm space-y-2">
						<p>
							Try our NEW Plump Shot™ Collagen Peptides Advanced
							Plumping Blush! Select a FREE sample in cart with
							any Plump Shot™ purchase.
						</p>
						<p className="font-extrabold text-base">$29.00</p>
					</div>
					<button className="border border-black hover:bg-black hover:text-white transition duration-300 p-5 w-full rounded-full flex items-center justify-between">
						<span className="font-extrabold">ADD TO BAG</span>
						<span className="text-xl font-bold">+</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
