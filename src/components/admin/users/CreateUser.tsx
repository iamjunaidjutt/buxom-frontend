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
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const formSchema = z.object({
	firstname: z
		.string()
		.min(2, {
			message: "First name should be at least 2 characters long",
		})
		.max(191),
	lastname: z
		.string()
		.min(2, { message: "Last name should be at least 2 characters long" })
		.max(191),
	email: z.string().email(),
	phone: z.string().optional(),
	password: z
		.string()
		.min(8, { message: "Password should be at least 8 characters long" })
		.max(191),
	role: z.enum(["USER", "ADMIN"]),
	month: z.string().optional(),
	day: z
		.number()
		.min(1, {
			message: "Day should be at least 1",
		})
		.max(31)
		.optional(),
	smsUpdates: z.boolean().optional(),
	newsLetter: z.boolean().optional(),
});

const monthOptions = [
	{
		value: "jan",
		label: "January",
	},
	{
		value: "feb",
		label: "February",
	},
	{
		value: "mar",
		label: "March",
	},
	{
		value: "apr",
		label: "April",
	},
	{
		value: "may",
		label: "May",
	},
	{
		value: "jun",
		label: "June",
	},
	{
		value: "jul",
		label: "July",
	},
	{
		value: "aug",
		label: "August",
	},
	{
		value: "sep",
		label: "September",
	},
	{
		value: "oct",
		label: "October",
	},
	{
		value: "nov",
		label: "November",
	},
	{
		value: "dec",
		label: "December",
	},
];

const CreateUser = () => {
	const [show, setShow] = useState(true);
	const navigate = useNavigate();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstname: "",
			lastname: "",
			email: "",
			phone: "",
			password: "",
			role: "USER",
			month: "JANUARY",
			day: 1,
			smsUpdates: false,
			newsLetter: false,
		},
	});

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		console.log(data);
		try {
			// then create the category
			const response = await fetch("http://localhost:8080/users/create", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				const responseData = await response.json();
				console.log(responseData);
				form.reset();
				toast.success("User created successfully");
				navigate("/admin/users");
			} else {
				throw new Error("Failed to create user");
			}
		} catch (error) {
			console.error(error);
			toast.error("Failed to create user");
		}
	};

	return (
		<div className="p-5 flex flex-col gap-4 items-start w-full">
			<h1 className="text-4xl font-nunitoSans font-bold">Create User</h1>
			<div className="w-5/12">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-4"
						encType="multipart/form-data"
					>
						<FormField
							control={form.control}
							name="firstname"
							render={({ field }) => (
								<FormItem>
									<FormLabel>First Name</FormLabel>
									<FormControl>
										<Input
											placeholder="First Name"
											{...field}
											className="text-black"
										/>
									</FormControl>
									<FormDescription>
										This is your public display first name.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="lastname"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Last Name</FormLabel>
									<FormControl>
										<Input
											placeholder="Last Name"
											{...field}
											className="text-black"
										/>
									</FormControl>
									<FormDescription>
										This is your public display last name.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											placeholder="Email"
											{...field}
											className="text-black"
										/>
									</FormControl>
									<FormDescription>
										This is your public display email.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="phone"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Phone</FormLabel>
									<FormControl>
										<Input
											placeholder="Phone"
											{...field}
											className="text-black"
										/>
									</FormControl>
									<FormDescription>
										This is your public display phone
										number.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input
											placeholder="Password"
											{...field}
											className="text-black"
											type="password"
										/>
									</FormControl>
									<FormDescription>
										This is your private password.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="role"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Role</FormLabel>
									<FormControl>
										<Select
											onValueChange={(value) => {
												field.onChange(value);
												if (value === "ADMIN") {
													setShow(false);
												} else {
													setShow(true);
												}
											}}
											defaultValue={field.value}
										>
											<SelectTrigger
												className="text-black"
												{...field}
											>
												<SelectValue placeholder="Role" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="USER">
													User
												</SelectItem>
												<SelectItem value="ADMIN">
													Admin
												</SelectItem>
											</SelectContent>
										</Select>
									</FormControl>
									<FormDescription>
										This is your public display role.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						{show && (
							<FormField
								control={form.control}
								name="month"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Month</FormLabel>
										<FormControl>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
												<SelectTrigger
													className="text-black"
													{...field}
												>
													<SelectValue placeholder="Month" />
												</SelectTrigger>
												<SelectContent>
													{monthOptions.map(
														(option) => (
															<SelectItem
																key={
																	option.value
																}
																value={
																	option.value
																}
															>
																{option.label}
															</SelectItem>
														)
													)}
												</SelectContent>
											</Select>
										</FormControl>
										<FormDescription>
											This is your public display month.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
						)}
						{show && (
							<FormField
								control={form.control}
								name="day"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Day</FormLabel>
										<FormControl>
											<Input
												placeholder="Day"
												{...field}
												className="text-black"
												type="number"
												min={1}
												max={31}
											/>
										</FormControl>
										<FormDescription>
											This is your public display day.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
						)}
						{show && (
							<FormField
								control={form.control}
								name="smsUpdates"
								render={({ field }) => (
									<FormItem className="flex flex-row items-start space-x-3 space-y-0">
										<FormLabel>SMS Updates</FormLabel>
										<FormControl>
											<Checkbox
												className="text-black border-white"
												checked={field.value}
												onCheckedChange={field.onChange}
											/>
										</FormControl>
										<FormDescription>
											Check this if you want to receive
											SMS updates.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
						)}
						{show && (
							<FormField
								control={form.control}
								name="newsLetter"
								render={({ field }) => (
									<FormItem className="flex flex-row items-start space-x-3 space-y-0">
										<FormLabel>News Letter</FormLabel>
										<FormControl>
											<Checkbox
												className="text-black border-white"
												checked={field.value}
												onCheckedChange={field.onChange}
											/>
										</FormControl>
										<FormDescription>
											Check this if you want to receive
											news letters.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
						)}
						<Button
							type="submit"
							variant={"outline"}
							className="text-black"
							onClick={() => {
								form.setValue(
									"day",
									Number(form.getValues("day"))
								);
							}}
						>
							Create User
						</Button>
					</form>
				</Form>
			</div>
		</div>
	);
};

export default CreateUser;
