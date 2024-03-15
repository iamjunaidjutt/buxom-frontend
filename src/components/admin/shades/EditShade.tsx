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
import { Textarea } from "@/components/ui/textarea";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ShadesProps } from "@/lib/types";

const formSchema = z.object({
	name: z
		.string()
		.min(2, {
			message: "Name should be at least 2 characters",
		})
		.max(50),
	description: z
		.string()
		.min(7, {
			message: "Description should be at least 7 characters",
		})
		.max(1000),
	code: z
		.string()
		.min(6, { message: "Code should be at least 6 characters" }),
});

const EditShade = () => {
	const [shade, setShade] = useState<ShadesProps>({
		id: "",
		name: "",
		description: "",
		code: "",
	});
	const params = useParams();
	const id = params.id;

	useEffect(() => {
		const fetchShade = async () => {
			try {
				const response = await fetch(
					"http://localhost:8080/shades/" + id
				);
				const data = await response.json();
				setShade(data);
			} catch (error) {
				console.error(error);
				toast.error("Failed to fetch shade");
			}
		};

		fetchShade();
	}, [id]);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: shade.name,
			description: shade.description,
			code: shade.code,
		},
	});

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		console.log(data);

		// then create the category
		const response = await fetch(
			"http://localhost:8080/shades/update/" + id,
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
	};

	return (
		<div className="p-5 flex flex-col gap-4 items-start w-full">
			<h1 className="text-4xl font-nunitoSans font-bold">Edit Shade</h1>
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
											value={shade.name}
											onChange={(e) => {
												setShade({
													...shade,
													name: e.target.value,
												});
											}}
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
							name="description"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Description</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Description"
											{...field}
											className="text-black"
											value={shade.description}
											onChange={(e) => {
												setShade({
													...shade,
													description: e.target.value,
												});
											}}
										/>
									</FormControl>
									<FormDescription>
										This is your public display description.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="code"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Code</FormLabel>
									<FormControl>
										<Input
											placeholder="Color Code"
											{...field}
											className="text-black"
											value={shade.code}
											onChange={(e) => {
												setShade({
													...shade,
													code: e.target.value,
												});
											}}
										/>
									</FormControl>
									<FormDescription>
										This is your public display hex color
										code.
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
								form.setValue("name", shade.name);
								form.setValue("description", shade.description);
								form.setValue("code", shade.code);
							}}
						>
							Edit Shade
						</Button>
					</form>
				</Form>
			</div>
		</div>
	);
};

export default EditShade;
