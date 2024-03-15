import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { ImagesProps } from "@/lib/types";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import toast from "react-hot-toast";

const columns: ColumnDef<ImagesProps>[] = [
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
		accessorKey: "Image",
		header: "Image",
		cell: ({ row }) => {
			const imageUrl = row.original.imageURLs;
			console.log("image url: ", imageUrl);
			return (
				<img
					src={"http://localhost:8080" + imageUrl}
					alt={row.getValue("id")}
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
						<DropdownMenuItem>Delete Image</DropdownMenuItem>
						<DropdownMenuItem>
							<Link to={`update/${row.original.id}`}>
								Edit Image
							</Link>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];

const Images = () => {
	const [images, setImages] = useState<ImagesProps[]>([]);
	const navigate = useNavigate();

	const handleCreate = () => {
		navigate("/admin/images/create");
	};

	const fetchImages = async () => {
		try {
			// fetch shades
			const response = await fetch("http://localhost:8080/images");
			const data = await response.json();
			setImages(data);
			console.log(data);
		} catch (error) {
			console.error(error);
			toast.error("Failed to fetch images");
		}
	};

	useEffect(() => {
		fetchImages();
	}, []);

	return (
		<div className="p-5 flex flex-col gap-4 items-start w-full">
			<h1 className="text-4xl font-nunitoSans font-bold">Images</h1>
			<Button
				variant={"outline"}
				size={"lg"}
				className="text-black"
				onClick={handleCreate}
			>
				Create Image
			</Button>
			<div className="w-full">
				<DataTable columns={columns} data={images} filterCol="id" />
			</div>
		</div>
	);
};

export default Images;
