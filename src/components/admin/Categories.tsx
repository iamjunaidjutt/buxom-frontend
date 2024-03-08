import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";

const Categories = () => {
	const navigate = useNavigate();

	const handleCreate = () => {
		navigate("/admin/categories/create");
	};

	return (
		<div className="p-5 flex flex-col gap-4 items-start border w-full">
			<h1 className="text-4xl font-nunitoSans font-bold">Categories</h1>
			<Button
				variant={"outline"}
				size={"lg"}
				className="text-black"
				onClick={handleCreate}
			>
				Create Category
			</Button>
		</div>
	);
};

export default Categories;
