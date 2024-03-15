import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import {
	BadgesProps,
	CategoriesProps,
	ImagesProps,
	ProductsProps,
	ShadesProps,
	TagsProps,
} from "@/lib/types";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

const columns: ColumnDef<ProductsProps>[] = [
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
		accessorKey: "category",
		header: "Category",
		cell: ({ row }) => {
			const category: CategoriesProps = row.getValue("category");
			return <span>{category.name}</span>;
		},
	},
	{
		accessorKey: "description",
		header: "Description",
	},
	{
		accessorKey: "price",
		header: "Price",
		cell: ({ row }) => {
			const price: number = row.getValue("price");
			return <span>${price}</span>;
		},
	},
	{
		accessorKey: "stock",
		header: "Stock",
	},
	{
		accessorKey: "Tags",
		header: "Tags",
		cell: ({ row }) => {
			const tags: TagsProps[] = row.getValue("Tags");
			return (
				<div className="flex flex-wrap gap-2">
					{tags.map((tag: TagsProps) => (
						<span
							key={tag.id}
							className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md"
						>
							{tag.name}
						</span>
					))}
				</div>
			);
		},
	},
	{
		accessorKey: "Badges",
		header: "Badges",
		cell: ({ row }) => {
			const badges: BadgesProps[] = row.getValue("Badges");
			return (
				<div className="flex flex-wrap gap-2">
					{badges.map((badge: BadgesProps) => (
						<span
							key={badge.id}
							className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md"
						>
							{badge.name}
						</span>
					))}
				</div>
			);
		},
	},
	{
		accessorKey: "shades",
		header: "Shades",
		cell: ({ row }) => {
			const shades: ShadesProps[] = row.getValue("shades");
			return (
				<div className="flex flex-wrap gap-2">
					{shades.map((shade: ShadesProps) => (
						<span
							key={shade.id}
							className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md"
						>
							{shade.name}
						</span>
					))}
				</div>
			);
		},
	},
	{
		accessorKey: "Image",
		header: "Images",
		cell: ({ row }) => {
			const images: ImagesProps[] = row.getValue("Image");
			return (
				<div className="flex flex-wrap gap-2">
					{images.map((image: ImagesProps) => (
						<img
							key={image.id}
							src={`http://localhost:8080/${image.imageURLs}`}
							alt={image.id}
							className="h-20 w-auto object-cover rounded-md"
						/>
					))}
				</div>
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
						<DropdownMenuItem>Delete Product</DropdownMenuItem>
						<DropdownMenuItem>
							<Link to={`update/${row.original.id}`}>
								Edit Product
							</Link>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];

const Products = () => {
	const [products, setProducts] = useState<ProductsProps[]>([]);
	const navigate = useNavigate();

	const handleCreate = () => {
		navigate("/admin/products/create");
	};

	const fetchProducts = async () => {
		// fetch data from server
		const response = await fetch("http://localhost:8080/products");
		const data = await response.json();
		console.log(data);
		setProducts(data);
	};

	useEffect(() => {
		// fetch data
		fetchProducts();
	}, []);

	return (
		<div className="p-5 flex flex-col gap-4 items-start w-full">
			<h1 className="text-4xl font-nunitoSans font-bold">Products</h1>
			<Button
				variant={"outline"}
				size={"lg"}
				className="text-black"
				onClick={handleCreate}
			>
				Create Product
			</Button>
			<div className="w-full">
				<DataTable columns={columns} data={products} filterCol="name" />
			</div>
		</div>
	);
};

export default Products;
