import ReactDom from "react-dom";
import { IoClose } from "react-icons/io5";

import { CategoriesProps, ModalProps } from "@/lib/types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface props extends ModalProps {}

const ShopMakeupMenu: React.FC<props> = ({ show, onClose }) => {
	const [categories, setCategories] = useState<CategoriesProps[]>([]);
	const fetchCategories = async () => {
		const res = await fetch("http://localhost:8080/categories");
		const data = await res.json();
		setCategories(data);
		console.log(data);
	};

	useEffect(() => {
		fetchCategories();
	}, []);

	if (!show) return null;
	return ReactDom.createPortal(
		<>
			<div className="bg-black/60 fixed inset-0 z-50 top-32 w-screen h-screen" />
			<div className="fixed inset-0 z-50 top-32 transition-all duration-900 delay-900 ease-in-out">
				<nav className="w-[30%] bg-black h-full border-r border-white">
					<div className="flex flex-col py-10 items-center h-full overflow-y-scroll no-scrollbar scroll-smooth">
						{categories.map((category) => (
							<Link
								key={category.id}
								to={`/products/category/${category.id}`}
								className={`text-white font-bold relative text-2xl my-3 w-10/12 h-28 hover:border-2 border-red-600 rounded-xl`}
							>
								<img
									src={`http://localhost:8080${category.imageURL}`}
									alt={category.name}
									className="w-full h-full mx-auto border object-cover rounded-xl	"
								/>
								<span className="absolute text-white text-xl pl-5 top-10">
									{category.name}
								</span>
							</Link>
						))}
					</div>
				</nav>
			</div>
			<span className="fixed inset-0 z-50 top-36 left-[37rem]">
				<button onClick={onClose}>
					<IoClose size={25} className="border rounded-full p-1" />
				</button>
			</span>
		</>,
		document.getElementById("portal")!
	);
};

export default ShopMakeupMenu;
