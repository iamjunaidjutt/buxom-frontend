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
import { Textarea } from "@/components/ui/textarea";
import { useParams } from "react-router-dom";
import { CategoriesProps } from "@/lib/types";
import toast from "react-hot-toast";

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
	file: z.string().optional(),
});

const EditCategory = () => {
	const [uFile, setUFile] = useState<File | undefined>();
	const [category, setCategory] = useState<CategoriesProps>({
		id: "",
		name: "",
		description: "",
		imageUrl: "",
	});
	const { id } = useParams<{ id: string }>();

	useEffect(() => {
		const fetchCategory = async () => {
			try {
				const response = await fetch(
					"http://localhost:8080/categories/" + id
				);
				if (!response.ok) {
					throw new Error("Failed to fetch category");
				}
				const data = await response.json();
				setCategory(data);
			} catch (error) {
				console.error("Error fetching category:", error);
				toast.error("Failed to fetch category");
			}
		};
		fetchCategory();
	}, [id]);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: category?.name || "",
			description: category?.description || "",
			file: "",
		},
	});

	const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setUFile(file);
		}
	};

	const uploadImage = async () => {
		try {
			if (!uFile) {
				throw new Error("No file selected");
			}

			const formData = new FormData();
			formData.append("file", uFile);

			const response = await fetch("http://localhost:8080/upload", {
				method: "POST",
				body: formData,
			});

			if (!response.ok) {
				throw new Error("Failed to upload image");
			}

			const data = await response.json();
			return data;
		} catch (error) {
			console.error("Error uploading image:", error);
			toast.error("Failed to upload image");
		}
	};

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		console.log(data);

		// first upload the image to the server
		if (uFile) {
			const imageUrl = await uploadImage();
			setCategory({
				...category,
				imageUrl,
			});
			data.file = imageUrl;
		} else {
			data.file = category.imageUrl;
		}

		// then edit the category
		try {
			const response = await fetch(
				"http://localhost:8080/categories/update/" + id,
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
		} catch (error) {
			console.error("Error editing category:", error);
			toast.error("Failed to edit category");
		}
	};

	return (
		<div className="p-5 flex flex-col gap-4 items-start w-full">
			<h1 className="text-4xl font-nunitoSans font-bold">
				Edit Category
			</h1>
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
											value={category?.name}
											className="text-black"
											onChange={(e) => {
												setCategory({
													...category,
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
											value={category?.description}
											className="text-black"
											onChange={(e) => {
												setCategory({
													...category,
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
							name="file"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Image</FormLabel>
									<FormControl>
										<Input
											type="file"
											{...field}
											value={category?.imageUrl}
											className="text-black"
											onChange={fileChangeHandler}
										/>
									</FormControl>
									<FormDescription>
										Upload the image for the category.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<img
							src={uFile ? URL.createObjectURL(uFile) : ""}
							alt=""
							className="w-auto h-28 object-cover"
						/>
						<Button
							type="submit"
							variant={"outline"}
							className="text-black"
							onClick={() => {
								form.setValue("name", category.name);
								form.setValue(
									"description",
									category.description
								);
							}}
						>
							Edit Category
						</Button>
					</form>
				</Form>
			</div>
		</div>
	);
};

export default EditCategory;
