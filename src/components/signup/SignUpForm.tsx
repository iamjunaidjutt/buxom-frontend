import React, { useState } from "react";
import PrimaryBtn from "@/components/ui/PrimaryBtn";

const LoginForm = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [newLetter, setNewLetter] = useState(false);
	const [month, setMonth] = useState("");
	const [day, setDay] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [smsUpdates, setSmsUpdates] = useState(false);
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState<{
		firstName: string;
		lastName: string;
		email: string;
		password: string;
	}>({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// First Name Validation
		if (firstName.trim() === "") {
			setError((prevError) => ({
				...prevError,
				firstName: "First Name is required",
			}));
		} else {
			setError((prevError) => ({ ...prevError, firstName: "" }));
		}

		// Last Name Validation
		if (lastName.trim() === "") {
			setError((prevError) => ({
				...prevError,
				lastName: "Last Name is required",
			}));
		} else {
			setError((prevError) => ({ ...prevError, lastName: "" }));
		}

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
		} else if (password.length < 8) {
			setError((prevError) => ({
				...prevError,
				password: "Password must be at least 8 characters",
			}));
		} else {
			setError((prevError) => ({ ...prevError, password: "" }));
		}
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-7 text-left">
			{/* FistName */}
			<div className="flex flex-col w-full">
				<label htmlFor="firstName">
					First Name <span className=" text-red-600">*</span>
				</label>
				{error.firstName && (
					<p className="text-red-600 text-xs">{error.firstName}</p>
				)}
				<input
					type="text"
					id="firstName"
					name="firstName"
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
					className="border-b border-gray-200 bg-transparent focus:outline-none focus:border-b-2 focus:border-white focus:py-1"
				/>
			</div>
			{/* LastName */}
			<div className="flex flex-col w-full">
				<label htmlFor="lastName">
					Last Name <span className=" text-red-600">*</span>
				</label>
				{error.lastName && (
					<p className="text-red-600 text-xs">{error.lastName}</p>
				)}
				<input
					type="text"
					id="lastName"
					name="lastName"
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
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
					value={email}
					onChange={(e) => setEmail(e.target.value)}
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
						checked={newLetter}
						onChange={(e) => setNewLetter(e.target.checked)}
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
						value={month}
						onChange={(e) => setMonth(e.target.value)}
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
						value={day}
						onChange={(e) => setDay(e.target.value)}
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
				<label htmlFor="phone">Phone</label>
				<input
					type="text"
					id="phone"
					name="phone"
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
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
						checked={smsUpdates}
						onChange={(e) => setSmsUpdates(e.target.checked)}
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
					type={showPassword ? "text" : "password"}
					id="password"
					name="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="border-b border-gray-200 bg-transparent focus:outline-none focus:border-b-2 focus:border-white focus:py-1"
				/>
				<div className="flex items-center gap-3">
					<input
						type="checkbox"
						id="showPassword"
						name="showPassword"
						checked={showPassword}
						onChange={(e) => setShowPassword(e.target.checked)}
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
