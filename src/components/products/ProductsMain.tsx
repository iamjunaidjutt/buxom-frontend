import { useParams } from "react-router-dom";
import ProductsHeader from "./ProductsHeader";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CategoriesProps } from "@/lib/types";

export default function ProductsMain() {
	const [category, setCategory] = useState<CategoriesProps>({
		id: "",
		name: "",
		titleLine: "",
		description: "",
		imageURL: "",
	});
	const params = useParams();
	const id = params.id;

	const fetchData = async () => {
		try {
			const response = await fetch(
				`http://localhost:8080/categories/${id}`
			);
			const data = await response.json();
			console.log(data);
			setCategory(data);
		} catch (error) {
			console.log(error);
			toast.error("Failed to fetch data");
		}
	};
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<ProductsHeader {...category} />
		</>
	);
}
