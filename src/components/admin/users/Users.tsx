import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { UsersProps } from "@/lib/types";
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

const columns: ColumnDef<UsersProps>[] = [
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
		accessorKey: "first_name",
		header: "First Name",
	},
	{
		accessorKey: "last_name",
		header: "Last Name",
	},
	{
		accessorKey: "email",
		header: "Email",
	},
	{
		accessorKey: "phone",
		header: "Phone",
	},
	{
		accessorKey: "role",
		header: "Role",
	},
	{
		accessorKey: "UserPreference",
		header: "User Preferences",
		cell: ({ row }) => {
			return (
				<div>
					<table className="w-full">
						<thead>
							<tr>
								<th className="border border-gray-300 p-2">
									Month
								</th>
								<th className="border border-gray-300 p-2">
									Day
								</th>
								<th className="border border-gray-300 p-2">
									Newsletter
								</th>
								<th className="border border-gray-300 p-2">
									SMS Updates
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="border border-gray-300 p-2">
									{row.original.UserPreference?.month
										? row.original.UserPreference.month
										: "Not Set"}
								</td>
								<td className="border border-gray-300 p-2">
									{row.original.UserPreference?.day
										? row.original.UserPreference.day
										: "Not Set"}
								</td>
								<td className="border border-gray-300 p-2">
									{row.original.UserPreference?.newsLetter
										? "Yes"
										: "No"}
								</td>
								<td className="border border-gray-300 p-2">
									{row.original.UserPreference?.smsUpdates
										? "Yes"
										: "No"}
								</td>
							</tr>
						</tbody>
					</table>
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
						<DropdownMenuItem>Delete User</DropdownMenuItem>
						<DropdownMenuItem>
							<Link to={`update/${row.original.id}`}>
								Edit User
							</Link>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];

const Users = () => {
	const [users, setUsers] = useState<UsersProps[]>([]);
	const navigate = useNavigate();

	const handleCreate = () => {
		navigate("/admin/users/create");
	};

	const fetchUsers = async () => {
		try {
			// fetch users
			const response = await fetch("http://localhost:8080/users");
			if (!response.ok) {
				if (response.status === 401) {
					toast.error("Unauthorized");
					return;
				}
			}
			const data = await response.json();
			setUsers(data);
			console.log(data);
			toast.success("Users fetched successfully");
		} catch (error) {
			console.error(error);
			toast.error("Failed to fetch users");
		}
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<div className="p-5 flex flex-col gap-4 items-start w-full">
			<h1 className="text-4xl font-nunitoSans font-bold">Users</h1>
			<Button
				variant={"outline"}
				size={"lg"}
				className="text-black"
				onClick={handleCreate}
			>
				Create User
			</Button>
			<div className="w-full">
				<DataTable columns={columns} data={users} filterCol="email" />
			</div>
		</div>
	);
};

export default Users;
