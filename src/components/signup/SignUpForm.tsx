import React, { useState } from "react";
import PrimaryBtn from "@/components/ui/PrimaryBtn";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LoginForm = () => {
	const navigate = useNavigate();

	const [fields, setFields] = useState<{
		firstname: string;
		lastname: string;
		newsLetter: boolean;
		month: string;
		day: string;
		phone: string;
		email: string;
		smsUpdates: boolean;
		password: string;
		showPassword: boolean;
	}>({
		firstname: "",
		lastname: "",
		newsLetter: false,
		month: "",
		day: "",
		phone: "",
		email: "",
		smsUpdates: false,
		password: "",
		showPassword: false,
	});
	const [error, setError] = useState<{
		firstname: string;
		lastname: string;
		email: string;
		password: string;
		smsUpdates: string;
	}>({
		firstname: "",
		lastname: "",
		email: "",
		password: "",
		smsUpdates: "",
	});

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// First Name Validation
		if (fields.firstname.trim() === "") {
			setError((prevError) => ({
				...prevError,
				firstname: "First Name is required",
			}));
		} else {
			setError((prevError) => ({ ...prevError, firstname: "" }));
		}

		// Last Name Validation
		if (fields.lastname.trim() === "") {
			setError((prevError) => ({
				...prevError,
				lastname: "Last Name is required",
			}));
		} else {
			setError((prevError) => ({ ...prevError, lastname: "" }));
		}

		// Email Validation
		if (fields.email.trim() === "") {
			setError((prevError) => ({
				...prevError,
				email: "Email is required",
			}));
		} else if (!fields.email.includes("@")) {
			setError((prevError) => ({
				...prevError,
				email: "Email is invalid",
			}));
		} else {
			setError((prevError) => ({ ...prevError, email: "" }));
		}

		// Password Validation
		if (fields.password.trim() === "") {
			setError((prevError) => ({
				...prevError,
				password: "Password is required",
			}));
		} else if (fields.password.length < 6) {
			setError((prevError) => ({
				...prevError,
				password: "Password must be at least 6 characters",
			}));
		} else {
			setError((prevError) => ({ ...prevError, password: "" }));
		}

		// SMS Updates Validation
		if (
			fields.smsUpdates &&
			fields.phone.trim() === "" &&
			fields.phone.length < 10
		) {
			setError((prevError) => ({
				...prevError,
				smsUpdates: "Phone is required",
			}));
		} else {
			setError((prevError) => ({ ...prevError, smsUpdates: "" }));
		}

		// If there is no error
		if (
			!error.firstname &&
			!error.lastname &&
			!error.email &&
			!error.password &&
			!error.smsUpdates
		) {
			const newFields = {
				...fields,
				role: "USER",
			};

			console.log(newFields);

			// Send the data to the server
			const response = await fetch("http://localhost:8080/users/create", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newFields),
			});

			if (!response.ok) {
				toast.error("Something went wrong, please try again later");
				return;
			}

			// Redirect to the home page
			navigate("/sign-in");

			// Clear the fields
			setFields({
				firstname: "",
				lastname: "",
				newsLetter: false,
				month: "",
				day: "",
				phone: "",
				email: "",
				smsUpdates: false,
				password: "",
				showPassword: false,
			});
		}
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-7 text-left">
			{/* FistName */}
			<div className="flex flex-col w-full">
				<label htmlFor="firstname">
					First Name <span className=" text-red-600">*</span>
				</label>
				{error.firstname && (
					<p className="text-red-600 text-xs">{error.firstname}</p>
				)}
				<input
					type="text"
					id="firstname"
					name="firstname"
					value={fields.firstname}
					onChange={(e) =>
						setFields({ ...fields, firstname: e.target.value })
					}
					className="border-b border-gray-200 bg-transparent focus:outline-none focus:border-b-2 focus:border-white focus:py-1"
				/>
			</div>
			{/* lastname */}
			<div className="flex flex-col w-full">
				<label htmlFor="lastname">
					Last Name <span className=" text-red-600">*</span>
				</label>
				{error.lastname && (
					<p className="text-red-600 text-xs">{error.lastname}</p>
				)}
				<input
					type="text"
					id="lastname"
					name="lastname"
					value={fields.lastname}
					onChange={(e) =>
						setFields({ ...fields, lastname: e.target.value })
					}
					className="border-b border-gray-200 bg-transparent focus:outline-none focus:border-b-2 focus:border-white focus:py-1"
				/>
			</div>
			{/* Email */}
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
					value={fields.email}
					onChange={(e) =>
						setFields({ ...fields, email: e.target.value })
					}
					className="border-b border-gray-200 bg-transparent focus:outline-none focus:border-b-2 focus:border-white focus:py-1"
				/>
			</div>
			{/* Newsletter */}
			<div className="flex flex-col space-y-5">
				<div className="flex items-center gap-3">
					<input
						type="checkbox"
						id="newsletter"
						name="newsletter"
						checked={fields.newsLetter}
						onChange={(e) =>
							setFields({
								...fields,
								newsLetter: e.target.checked,
							})
						}
						className="h-5 w-5 rounded-sm bg-black focus:outline-none"
					/>
					<label htmlFor="newsletter" className="font-bold">
						Please Sign me up for the emails from BUXOM Cosmetics
					</label>
				</div>
				<p className="text-gray-300 text-sm leading-none">
					I agree that BUXOM Cosmetics may collect my personal
					information for the purposes permitted by our Privacy
					Policy. By visiting buxomcosmetics.com and by submitting my
					information, I agree with the Privacy Policy and the website
					Terms & Conditions. By creating an account, I agree to the
					Terms & Conditions of the Loyalty Program, and to
					automatically receive offers and notifications via email.
				</p>
			</div>
			<div className="flex justify-between w-full">
				{/* Month  */}
				<div className="flex flex-col w-[60%]">
					<label htmlFor="month">Month</label>
					<select
						id="month"
						name="month"
						value={fields.month}
						onChange={(e) =>
							setFields({ ...fields, month: e.target.value })
						}
						className="border-b border-gray-200 bg-black text-white focus:outline-none focus:border-b-2 focus:border-white focus:py-1"
					>
						<option value=""></option>
						<option value="jan">January</option>
						<option value="feb">February</option>
						<option value="mar">March</option>
						<option value="apr">April</option>
						<option value="may">May</option>
						<option value="jun">June</option>
						<option value="jul">July</option>
						<option value="aug">August</option>
						<option value="sep">September</option>
						<option value="oct">October</option>
						<option value="nov">November</option>
						<option value="dec">December</option>
					</select>
				</div>
				{/* Day */}
				<div className="flex flex-col w-[35%]">
					<label htmlFor="day">Day</label>
					<select
						id="day"
						name="day"
						value={fields.day}
						onChange={(e) =>
							setFields({ ...fields, day: e.target.value })
						}
						className="border-b border-gray-200 bg-black text-white focus:outline-none focus:border-b-2 focus:border-white focus:py-1"
					>
						<option value=""></option>
						{[...Array(31)].map((_, i) => (
							<option key={i} value={i + 1}>
								{i + 1}
							</option>
						))}
					</select>
				</div>
			</div>
			{/* Phone */}
			<div className="flex flex-col w-full">
				<label htmlFor="phone">
					Phone{" "}
					{fields.smsUpdates && (
						<span className=" text-red-600">*</span>
					)}
				</label>
				{error.smsUpdates && fields.smsUpdates && (
					<p className="text-red-600 text-xs">{error.smsUpdates}</p>
				)}
				<input
					type="text"
					id="phone"
					name="phone"
					value={fields.phone}
					onChange={(e) =>
						setFields({ ...fields, phone: e.target.value })
					}
					className="border-b border-gray-200 bg-transparent focus:outline-none focus:border-b-2 focus:border-white focus:py-1"
				/>
				<p className="text-sm text-gray-300 leading-1">
					Please enter a phone number with a valid country code, ex.
					+1
				</p>
			</div>
			{/* SMS Updates */}
			<div className="flex flex-col space-y-5">
				<div className="flex gap-3 items-center">
					<input
						type="checkbox"
						id="smsUpdates"
						name="smsUpdates"
						checked={fields.smsUpdates}
						onChange={(e) =>
							setFields({
								...fields,
								smsUpdates: e.target.checked,
							})
						}
						className="h-5 w-5 rounded-sm bg-black focus:outline-none"
					/>
					<label htmlFor="smsUpdates" className="font-bold">
						Sign up to receive text & SMS updates
					</label>
				</div>
				<p className="text-gray-300 text-sm leading-none">
					By providing my phone number to BUXOM Cosmetics I consent to
					receive personalized marketing messages (e.g. cart
					reminders) and recurring automated promotional messages at
					the cell number used when signing up. Consent is not a
					condition of any purchase. Reply HELP for help or STOP to
					opt-out. Message and data rates may apply. View Terms of Use
					& Privacy Policy.
				</p>
			</div>
			{/* Password */}
			<div className="flex flex-col w-full gap-3">
				<div>
					<label htmlFor="password">
						Password <span className=" text-red-600">*</span>
					</label>
					{error.password && (
						<p className="text-red-600 text-xs">{error.password}</p>
					)}
				</div>
				<input
					type={fields.showPassword ? "text" : "password"}
					id="password"
					name="password"
					value={fields.password}
					onChange={(e) =>
						setFields({ ...fields, password: e.target.value })
					}
					className="border-b border-gray-200 bg-transparent focus:outline-none focus:border-b-2 focus:border-white focus:py-1"
				/>
				<div className="flex items-center gap-3">
					<input
						type="checkbox"
						id="showPassword"
						name="showPassword"
						checked={fields.showPassword}
						onChange={(e) =>
							setFields({
								...fields,
								showPassword: e.target.checked,
							})
						}
						className="h-5 w-5 rounded-sm bg-black focus:outline-none"
					/>
					<label htmlFor="showPassword" className="font-bold">
						Show Password
					</label>
				</div>
			</div>
			<PrimaryBtn type="submit">Create Account</PrimaryBtn>
		</form>
	);
};

export default LoginForm;
