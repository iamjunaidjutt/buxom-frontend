import Form from "./Form";

const AccountLogin = () => {
	return (
		<div className="w-full">
			<div className="space-y-5 w-[27%] mx-auto pt-32 text-center">
				<h1 className="font-extrabold text-5xl uppercase tracking-wider font-nunitoSans">
					Account Login
				</h1>
				<p className=" text-gray-300 text-sm tracking-wider">
					Hey Gorgeous! Thanks for visiting our new website. All past
					customers, please ensure you select to create an account via
					the link below to see previous transactions. Please live
					chat with{" "}
					<a
						href="#"
						className=" border-b text-base text-gray-100 font-medium"
					>
						Customer Care
					</a>{" "}
					if you have questions.
				</p>
				<Form />
				<div>
					<a href="#" className="border-b uppercase font-semibold">
						Create Account
					</a>
				</div>
			</div>
		</div>
	);
};

export default AccountLogin;
