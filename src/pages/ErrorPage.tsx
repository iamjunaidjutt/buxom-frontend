import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div className="w-full flex flex-col gap-5 font-nunitoSans justify-between h-screen items-center">
			<p className="text-lg mt-10">
				Click here for redirect to{" "}
				<Link
					to={"/"}
					className="text-blue-500 hover:text-blue-600 transition-all ease-in-out duration-500 font-extrabold underline"
				>
					Home
				</Link>
			</p>
			<h1 className=" text-red-500 text-7xl font-extrabold">
				404: Not Found
			</h1>
			<footer className="mt-20 mb-4 text-pink">
				&copy; Buxom Cosmetics
			</footer>
		</div>
	);
};

export default ErrorPage;
