import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const Admin = () => {
	const navigate = useNavigate();

	const handleSignUp = () => {
		navigate("/admin/sign-up");
	};

	const handleSignIn = () => {
		navigate("/admin/sign-in");
	};

	return (
		<div className="w-full">
			<div className="w-1/4 m-auto mt-72 space-y-10 text-center">
				<Link to="/admin">
					<h1 className="text-5xl font-bold uppercase underline">
						Buxom Admin
					</h1>
				</Link>
				<div className="flex flex-col gap-5 w-1/2 mx-auto">
					<Button
						className="text-black w-full"
						variant={"outline"}
						size={"lg"}
						onClick={handleSignUp}
					>
						Sign Up
					</Button>
					<Button
						className="text-black w-full"
						variant={"outline"}
						size={"lg"}
						onClick={handleSignIn}
					>
						Sign In
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Admin;
