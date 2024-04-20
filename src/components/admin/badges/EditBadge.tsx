import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BadgesProps } from "@/lib/types";
import toast from "react-hot-toast";

const formSchema = z.object({
	name: z
		.string()
		.min(2, {
			message: "Name should be at least 2 characters",
		})
		.max(50),
	color: z.string().optional(),
});

const EditBadge = () => {
	const naviagate = useNavigate();
	const [badge, setBadge] = useState<BadgesProps>({
		id: "",
		name: "",
		color: "",
	});
	const params = useParams();

	useEffect(() => {
		const fetchBadge = async () => {
			try {
				const response = await fetch(
					"http://localhost:8080/badges/" + params.id
				);
				const data = await response.json();
				setBadge(data);
			} catch (error) {
				console.log(error);
				toast.error("Error fetching badge");
			}
		};

		fetchBadge();
	}, [params.id]);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			color: "000000",
		},
	});

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		console.log(data);
		try {
			// then create the category
			const response = await fetch(
				"http://localhost:8080/badges/update/" + params.id,
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				}
			);

			const responseData = await response.json();
			console.log(responseData);
			form.reset();
			toast.success("Badge updated successfully");
			naviagate("/admin/badges");
		} catch (error) {
			console.error("Error updating badge:", error);
			toast.error("Failed to update badge");
		}
	};

	return (
		<div className="p-5 flex flex-col gap-4 items-start w-full">
			<h1 className="text-4xl font-nunitoSans font-bold">Edit Badge</h1>
			<div className="w-5/12">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-4"
						encType="multipart/form-data"
					>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input
											placeholder="Name"
											{...field}
											className="text-black"
											value={badge.name}
											onChange={(e) =>
												setBadge({
													...badge,
													name: e.target.value,
												})
											}
										/>
									</FormControl>
									<FormDescription>
										This is your public display name.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="color"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Color Code</FormLabel>
									<FormControl>
										<Input
											placeholder="Color Code"
											{...field}
											className="text-black"
											value={badge.color}
											onChange={(e) =>
												setBadge({
													...badge,
													color: e.target.value,
												})
											}
										/>
									</FormControl>
									<FormDescription>
										This is the color code for the badge.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button
							type="submit"
							variant={"outline"}
							className="text-black"
							onClick={() => {
								form.setValue("name", badge.name),
									form.setValue("color", badge.color);
							}}
						>
							Edit Badge
						</Button>
					</form>
				</Form>
			</div>
		</div>
	);
};

export default EditBadge;
