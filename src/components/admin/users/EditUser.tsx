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
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import { UsersProps } from "@/lib/types";

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
	role: z.string(),
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

const EditUser = () => {
	const [user, setUser] = useState<UsersProps>();
	const [show, setShow] = useState(true);
	const navigate = useNavigate();
	const params = useParams();
	const userId = params.id;

	useEffect(() => {
		const fetchUser = async () => {
			try {
				// fetch user
				const response = await fetch(
					`http://localhost:8080/users/${userId}`
				);
				const data = await response.json();
				console.log(data);
				setUser({
					...data,
					firstName: data.first_name,
					lastName: data.last_name,
				});
				toast.success("User fetched successfully");
			} catch (error) {
				console.error(error);
				toast.error("Failed to fetch user");
			}
		};

		fetchUser();
	}, [userId]);

	useEffect(() => {
		form.setValue("firstname", user?.firstName);
		form.setValue("lastname", user?.lastName);
		form.setValue("email", user?.email);
		form.setValue("phone", user?.phone);
		form.setValue("password", user?.password);
		form.setValue("role", user?.role);
		form.setValue("smsUpdates", user?.UserPreference?.smsUpdates);
		form.setValue("newsLetter", user?.UserPreference?.newsLetter);
		form.setValue("month", user?.UserPreference?.month);
		form.setValue("day", user?.UserPreference?.day);
	}, [user]);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstname: user?.firstName,
			lastname: user?.lastName,
			email: user?.email,
			phone: user?.phone,
			password: user?.password,
			role: user?.role,
			month: user?.UserPreference?.month,
			day: user?.UserPreference?.day,
			smsUpdates: user?.UserPreference?.smsUpdates,
			newsLetter: user?.UserPreference?.newsLetter,
		},
	});

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		console.log(data);
		try {
			// then create the category
			const response = await fetch(
				"http://localhost:8080/users/update/" + userId,
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				}
			);

			if (response.ok) {
				const responseData = await response.json();
				console.log(responseData);
				form.reset();
				toast.success("User updated successfully");
				navigate("/admin/users");
			} else {
				throw new Error("Failed to update user");
			}
		} catch (error) {
			console.error(error);
			toast.error("Failed to update user");
		}
	};

	return (
		<div className="p-5 flex flex-col gap-4 items-start w-full">
			<h1 className="text-4xl font-nunitoSans font-bold">Edit User</h1>
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

export default EditUser;
