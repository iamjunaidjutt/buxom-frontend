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
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

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
		.max(100),
	file: z.string().optional(),
});

const CreateCategory = () => {
	const [uFile, setUFile] = useState<File | undefined>();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			description: "",
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
		// upload to server using multer
		const formData = new FormData();
		formData.append("file", uFile);
		console.log(uFile);
		const response = await fetch("http://localhost:8080/upload", {
			method: "POST",
			body: formData,
		});
		console.log("data response: " + response);
		const data = await response.json();
		return data;
	};

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		console.log(data);

		// first upload the image to the server
		const result = await uploadImage();
		data.file = result.path;
		// then create the category
		const response = await fetch(
			"http://localhost:8080/categories/create",
			{
				method: "POST",
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
			<h1 className="text-4xl font-nunitoSans font-bold">
				Create Category
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
											className="text-black"
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
						<Button
							type="submit"
							variant={"outline"}
							className="text-black"
						>
							Create Category
						</Button>
					</form>
				</Form>
			</div>
		</div>
	);
};

export default CreateCategory;
