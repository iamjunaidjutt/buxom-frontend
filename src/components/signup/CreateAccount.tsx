import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";

const CreateAccount = () => {
	return (
		<div className="w-full">
			<div className="space-y-5 w-[27%] mx-auto pt-32 text-center">
				<h1 className="font-extrabold text-5xl uppercase tracking-wider font-nunitoSans">
					Create Account
				</h1>
				<p className=" text-gray-300 text-sm tracking-wider">
					Be the first to hear about product drops, flash sales and
					pro tips.
				</p>
				<SignUpForm />
				<div>
					<Link
						to="/sign-in"
						className="border-b uppercase font-bold"
					>
						Already have an account? LOGIN
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CreateAccount;
