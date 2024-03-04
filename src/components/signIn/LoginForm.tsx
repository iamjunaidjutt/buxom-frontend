import React, { useState } from "react";
import PrimaryBtn from "@/components/ui/PrimaryBtn";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState<{ email: string; password: string }>({
		email: "",
		password: "",
	});

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Email Validation
		if (email.trim() === "") {
			setError((prevError) => ({
				...prevError,
				email: "Email is required",
			}));
		} else if (!email.includes("@")) {
			setError((prevError) => ({
				...prevError,
				email: "Email is invalid",
			}));
		} else {
			setError((prevError) => ({ ...prevError, email: "" }));
		}

		// Password Validation
		if (password.trim() === "") {
			setError((prevError) => ({
				...prevError,
				password: "Password is required",
			}));
		} else if (password.length < 6) {
			setError((prevError) => ({
				...prevError,
				password: "Password must be at least 8 characters",
			}));
		} else {
			setError((prevError) => ({ ...prevError, password: "" }));
		}

		// If there are no errors, submit the form
		if (!error.email && !error.password) {
			const response = await fetch("http://localhost:8080/users/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password, role: "USER" }),
			});

			if (!response.ok) {
				toast.error("Something went wrong, please try again");
				return;
			}

			navigate("/");
		}

		// Reset the form
		setEmail("");
		setPassword("");
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-7 text-left">
			<div className="flex flex-col w-full">
				<label htmlFor="email">
					Email <span className=" text-red-600">*</span>
				</label>
				{error.email && (
					<p className="text-red-600 text-xs">{error.email}</p>
				)}
				<input
					type="text"
					id="email"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="border-b border-gray-200 bg-transparent focus:outline-none focus:border-b-2 focus:border-white focus:py-1"
				/>
			</div>
			<div className="flex flex-col w-full">
				<label htmlFor="password">
					Password <span className=" text-red-600">*</span>
				</label>
				{error.password && (
					<p className="text-red-600 text-xs">{error.password}</p>
				)}
				<input
					type="password"
					id="password"
					name="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="border-b border-gray-200 bg-transparent focus:outline-none focus:border-b-2 focus:border-white focus:py-1"
				/>
			</div>
			<div>
				<a href="#" className="border-b w-max text-sm font-medium">
					Forgot your password?
				</a>
			</div>
			<PrimaryBtn type="submit">LOGIN</PrimaryBtn>
		</form>
	);
};

export default LoginForm;
