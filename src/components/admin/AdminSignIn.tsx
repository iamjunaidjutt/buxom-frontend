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
	email: z.string().email(),
	password: z
		.string()
		.min(6, {
			message: "Password must be at least 6 characters long",
		})
		.max(100),
	role: z.enum(["USER", "ADMIN"] as const),
});

const AdminSignIn = () => {
	const naviagate = useNavigate();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
			role: "ADMIN",
		},
	});

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		console.log(data);

		try {
			// Send data to the server to authenticate the user
			const response = await fetch("http://localhost:8080/users/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			// If there's an error, then throw an error
			if (!response.ok) {
				if (response.status === 400) {
					toast.error("Invalid credentials. Enter correct password!");
					return;
				} else if (response.status === 401) {
					toast.error("Invalid credentials. Unauthorized!");
					return;
				} else if (response.status === 404) {
					toast.error("User not found!");
					return;
				} else {
					toast.error(
						"Something went wrong. Please try again later!"
					);
					return;
				}
			}

			// If successful, then redirect to admin dashboard
			naviagate("/admin/dashboard");
		} catch (error) {
			// TODO: If there's an error, then display the error message
			toast.error("An error occurred while trying to sign in");
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
				<h3 className="text-4xl font-bold">Sign In</h3>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="w-full space-y-2"
					>
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
						<p className="py-2">
							Create an account?{" "}
							<Link
								to={"/admin/sign-up"}
								className="text-red-500"
							>
								Sign Up
							</Link>
						</p>
						<div className="w-full text-center">
							<Button
								type="submit"
								variant={"outline"}
								className="text-black text-md font-bold"
								size={"lg"}
							>
								Sign In
							</Button>
						</div>
					</form>
				</Form>
			</div>
		</div>
	);
};

export default AdminSignIn;
