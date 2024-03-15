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
import { useNavigate } from "react-router-dom";
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
	code: z
		.string()
		.min(6, { message: "Code should be at least 6 characters" }),
});

const CreateShade = () => {
	const navigate = useNavigate();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			description: "",
			code: "000000",
		},
	});

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		console.log(data);
		try {
			// then create the category
			const response = await fetch(
				"http://localhost:8080/shades/create",
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
			toast.success("Shade created successfully");
			navigate("/admin/shades");
		} catch (error) {
			console.error("Error creating shade:", error);
			toast.error("Failed to create shade");
		}
	};

	return (
		<div className="p-5 flex flex-col gap-4 items-start w-full">
			<h1 className="text-4xl font-nunitoSans font-bold">Create Shade</h1>
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
							name="code"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Code</FormLabel>
									<FormControl>
										<Input
											placeholder="Color Code"
											{...field}
											className="text-black"
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
						>
							Create Shade
						</Button>
					</form>
				</Form>
			</div>
		</div>
	);
};

export default CreateShade;
