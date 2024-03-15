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
import { TagsProps } from "@/lib/types";
import toast from "react-hot-toast";

const formSchema = z.object({
	name: z
		.string()
		.min(2, {
			message: "Name should be at least 2 characters",
		})
		.max(50),
});

const EditTag = () => {
	const navigate = useNavigate();
	const [tag, setTag] = useState<TagsProps>({
		id: "",
		name: "",
	});
	const params = useParams();

	useEffect(() => {
		const fetchTags = async () => {
			try {
				const response = await fetch(
					"http://localhost:8080/tags/" + params.id
				);
				const data = await response.json();
				setTag(data);
			} catch (error) {
				console.error(error);
				toast.error("Failed to fetch tags");
			}
		};
		fetchTags();
	}, [params.id]);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
		},
	});

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		console.log(data);
		try {
			// then create the category
			const response = await fetch(
				"http://localhost:8080/tags/update" + params.id,
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
			toast.success("Tag updated successfully");
			navigate("/admin/tags");
		} catch (error) {
			console.error(error);
			toast.error("Failed to update tag");
		}
	};

	return (
		<div className="p-5 flex flex-col gap-4 items-start w-full">
			<h1 className="text-4xl font-nunitoSans font-bold">Edit Tag</h1>
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
											value={tag.name}
											onChange={(e) =>
												setTag({
													...tag,
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
						<Button
							type="submit"
							variant={"outline"}
							className="text-black"
							onClick={() => form.setValue("name", tag.name)}
						>
							Edit Tag
						</Button>
					</form>
				</Form>
			</div>
		</div>
	);
};

export default EditTag;
