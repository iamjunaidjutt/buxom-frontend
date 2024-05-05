import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import { CategoriesProps, ModalProps } from "@/lib/types";

interface Props extends ModalProps {}

const ShopMakeupMenu: React.FC<Props> = ({ show, onClose }) => {
	const navigate = useNavigate();
	const [categories, setCategories] = useState<CategoriesProps[]>([]);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const res = await fetch("http://localhost:8080/categories");
				if (!res.ok) {
					throw new Error("Failed to fetch categories");
				}
				const data = await res.json();
				setCategories(data);
			} catch (error) {
				console.error("Error fetching categories:", error);
			}
		};
		fetchCategories();
	}, []);

	if (!show || !categories) return null; // Ensure categories is not null

	const handleCategoryClick = (categoryId: string) => {
		navigate(`/products/category/${categoryId}`);
		onClose();
	};

	return ReactDOM.createPortal(
		<>
			<div className="bg-black/60 fixed inset-0 z-50 top-32 w-screen h-screen" />
			<div className="fixed inset-0 z-50 top-32 transition-all duration-900 delay-900 ease-in-out">
				<nav className="w-[30%] bg-black h-full border-r border-white">
					<div className="flex flex-col py-10 items-center h-full overflow-y-scroll no-scrollbar scroll-smooth">
						{categories.map((category) => (
							<div
								key={category.id}
								className={`text-white font-bold relative text-2xl my-3 w-10/12 h-28 hover:border-2 border-red-600 rounded-xl cursor-pointer`}
								onClick={() => handleCategoryClick(category.id)}
							>
								<img
									src={`http://localhost:8080${category.imageURL}`}
									alt={category.name}
									className="w-full h-full mx-auto border object-cover rounded-xl"
								/>
								<span className="absolute text-white text-xl pl-5 top-10">
									{category.name}
								</span>
							</div>
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