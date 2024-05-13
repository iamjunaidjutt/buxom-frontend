import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const formSchema = z.object({
	firstname: z
		.string()
		.min(2, {
			message: "First name must be at least 2 characters long",
		})
		.max(50),
	lastname: z
		.string()
		.min(2, {
			message: "Last name must be at least 2 characters long",
		})
		.max(50),
	email: z.string().email(),
	password: z
		.string()
		.min(6, {
			message: "Password must be at least 6 characters long",
		})
		.max(100),
	phone: z
		.string()
		.min(10, {
			message: "Phone number must be at least 10 characters long",
		})
		.max(15),
	role: z.enum(["USER", "ADMIN"] as const),
});

const AdminSignUp = () => {
	const navigate = useNavigate();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstname: "",
			lastname: "",
			email: "",
			password: "",
			phone: "",
			role: "ADMIN",
		},
	});

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		console.log(data);
		try {
			// Send data to server
			const response = await fetch("http://localhost:8080/users/create", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			// If there's an error, then throw an error
			if (!response.ok) {
				throw new Error("An error occurred while trying to sign up");
			}

			// If successful, then redirect to admin
			toast.success("Sign up successful");
			navigate("/admin");
		} catch (error) {
			// TODO: If there's an error, then display the error message
			toast.error("An error occurred while trying to sign up");
			console.log(error);
		}
	};

	return (
		<div className="w-full">
			<div className="flex flex-col w-1/4 items-center gap-5 m-auto mt-36">
				<Link to="/admin">
					<h1 className="text-5xl font-bold uppercase underline">
						Buxom Admin
					</h1>
				</Link>
				<h3 className="text-4xl font-bold">Sign Up</h3>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="w-full space-y-2"
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
											className="text-black bg-white border-2 border-gray-300 rounded-md w-full p-2 focus:outline-none focus:border-blue-500 text-md"
										/>
									</FormControl>
									<FormDescription>
										This is your first name.
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
											className="text-black bg-white border-2 border-gray-300 rounded-md w-full p-2 focus:outline-none focus:border-blue-500 text-md"
										/>
									</FormControl>
									<FormDescription>
										This is your last name.
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
											className="text-black bg-white border-2 border-gray-300 rounded-md w-full p-2 focus:outline-none focus:border-blue-500 text-md"
										/>
									</FormControl>
									<FormDescription>
										This is your email.
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
											type="password"
											{...field}
											className="text-black bg-white border-2 border-gray-300 rounded-md w-full p-2 focus:outline-none focus:border-blue-500 text-md"
										/>
									</FormControl>
									<FormDescription>
										This is your password.
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
											className="text-black bg-white border-2 border-gray-300 rounded-md w-full p-2 focus:outline-none focus:border-blue-500 text-md"
										/>
									</FormControl>
									<FormDescription>
										This is your phone.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<p className="py-2">
							Already have an account?{" "}
							<Link
								to={"/admin/sign-in"}
								className="text-red-500"
							>
								Sign In
							</Link>
						</p>
						<div className="w-full text-center">
							<Button
								type="submit"
								variant={"outline"}
								className="text-black text-md font-bold"
								size={"lg"}
							>
								Sign Up
							</Button>
						</div>
					</form>
				</Form>
			</div>
		</div>
	);
};

export default AdminSignUp;
