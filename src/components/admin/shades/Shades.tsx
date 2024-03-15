import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { ShadesProps } from "@/lib/types";
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

const columns: ColumnDef<ShadesProps>[] = [
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
		accessorKey: "description",
		header: "Description",
	},
	{
		accessorKey: "code",
		header: "Code",
		cell: ({ row }) => {
			return <span>#{row.original.code}</span>;
		},
	},
	{
		accessorKey: "color",
		header: "Color",
		cell: ({ row }) => {
			const color = "#" + row.original.code;
			return (
				<div
					className="w-8 h-8 rounded-full"
					style={{ backgroundColor: color }}
				></div>
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
						<DropdownMenuItem>Delete Shade</DropdownMenuItem>
						<DropdownMenuItem>
							<Link to={`update/${row.original.id}`}>
								Edit Shade
							</Link>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];

const Shades = () => {
	const [shades, setShades] = useState<ShadesProps[]>([]);
	const navigate = useNavigate();

	const handleCreate = () => {
		navigate("/admin/shades/create");
	};

	const fetchShades = async () => {
		try {
			// fetch shades
			const response = await fetch("http://localhost:8080/shades");
			const data = await response.json();
			setShades(data);
		} catch (error) {
			console.error(error);
			toast.error("Failed to fetch shades");
		}
	};

	useEffect(() => {
		fetchShades();
	}, []);

	return (
		<div className="p-5 flex flex-col gap-4 items-start w-full">
			<h1 className="text-4xl font-nunitoSans font-bold">Shades</h1>
			<Button
				variant={"outline"}
				size={"lg"}
				className="text-black"
				onClick={handleCreate}
			>
				Create Shade
			</Button>
			<div className="w-full">
				<DataTable columns={columns} data={shades} filterCol="name" />
			</div>
		</div>
	);
};

export default Shades;
