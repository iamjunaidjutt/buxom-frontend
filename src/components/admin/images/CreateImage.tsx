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
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const formSchema = z.object({
	file: z.string(),
});

const CreateImage = () => {
	const navigate = useNavigate();
	const [uFile, setUFile] = useState<File | undefined>();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
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
		try {
			// first upload the image to the server
			const result = await uploadImage();
			data.file = result.path;
			const response = await fetch(
				"http://localhost:8080/images/create",
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
			toast.success("Image created successfully");
			navigate("/admin/images");
		} catch (error) {
			console.log(error);
			toast.error("Error creating image");
		}
	};

	return (
		<div className="p-5 flex flex-col gap-4 items-start w-full">
			<h1 className="text-4xl font-nunitoSans font-bold">Create Image</h1>
			<div className="w-5/12">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-4"
						encType="multipart/form-data"
					>
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
										Upload the image.
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
						>
							Create Image
						</Button>
					</form>
				</Form>
			</div>
		</div>
	);
};

export default CreateImage;
