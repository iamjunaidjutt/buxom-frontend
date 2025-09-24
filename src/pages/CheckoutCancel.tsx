import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { XCircle, ArrowLeft, ShoppingCart } from "lucide-react";

const CheckoutCancel = () => {
	const navigate = useNavigate();

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50">
			<div className="max-w-md mx-auto text-center bg-white p-8 rounded-lg shadow-md">
				<div className="text-orange-500 mb-4">
					<XCircle className="h-16 w-16 mx-auto" />
				</div>

				<h1 className="text-2xl font-bold text-gray-900 mb-4">
					Payment Cancelled
				</h1>

				<p className="text-gray-600 mb-6">
					Your payment was cancelled. No charges were made to your
					account.
				</p>

				<div className="space-y-3">
					<Button
						onClick={() => navigate(-1)}
						className="w-full"
						variant="outline"
					>
						<ArrowLeft className="h-4 w-4 mr-2" />
						Return to Cart
					</Button>

					<Button onClick={() => navigate("/")} className="w-full">
						<ShoppingCart className="h-4 w-4 mr-2" />
						Continue Shopping
					</Button>
				</div>

				<p className="text-xs text-gray-500 mt-4">
					Your items are still in your cart and will be saved for
					later.
				</p>
			</div>
		</div>
	);
};

export default CheckoutCancel;
