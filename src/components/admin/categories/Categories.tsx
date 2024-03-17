import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { CategoriesProps } from "@/lib/types";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

const columns: ColumnDef<CategoriesProps>[] = [
	{
		accessorKey: "id",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
				>
					ID
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => {
			// auto generate id
			return row.index + 1;
		},
	},
	{
		accessorKey: "name",
		header: "Name",
	},
	{
		accessorKey: "titleLine",
		header: "Title Line",
		cell: ({ row }) => {
			return row.getValue("titleLine") || "Not Set";
		},
	},
	{
		accessorKey: "description",
		header: "Description",
	},
	{
		accessorKey: "imageURL",
		header: "Image",
		cell: ({ row }) => {
			const imageUrl = row.getValue("imageURL");
			console.log("image url: ", imageUrl);
			return (
				<img
					src={"http://localhost:8080" + imageUrl}
					alt={row.getValue("name")}
					className="h-28 w-auto object-cover rounded-md"
				/>
			);
		},
	},
	{
		accessorKey: "actions",
		header: "Actions",
		cell: ({ row }) => {
			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Delete Category</DropdownMenuItem>
						<DropdownMenuItem>
							<Link to={`edit/${row.original.id}`}>
								Edit Category
							</Link>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];

const Categories = () => {
	const [categories, setCategories] = useState<CategoriesProps[]>([]);
	const navigate = useNavigate();

	const handleCreate = () => {
		navigate("/admin/categories/create");
	};

	const fetchCategories = async () => {
		// fetch data from server
		const response = await fetch("http://localhost:8080/categories");
		const data = await response.json();
		console.log(data);
		setCategories(data);
	};

	useEffect(() => {
		// fetch data
		fetchCategories();
	}, []);

	return (
		<div className="p-5 flex flex-col gap-4 items-start w-full">
			<h1 className="text-4xl font-nunitoSans font-bold">Categories</h1>
			<Button
				variant={"outline"}
				size={"lg"}
				className="text-black"
				onClick={handleCreate}
			>
				Create Category
			</Button>
			<div className="w-full">
				<DataTable
					columns={columns}
					data={categories}
					filterCol="name"
				/>
			</div>
		</div>
	);
};

export default Categories;
