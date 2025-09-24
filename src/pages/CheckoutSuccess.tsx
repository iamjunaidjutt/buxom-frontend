import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { getPaymentSessionDetails } from '@/lib/paymentService';
import { useDispatch } from 'react-redux';
import { clearCart } from '@/features/CartSlice';
import { Button } from '@/components/ui/button';
import { CheckCircle, Loader2 } from 'lucide-react';

interface PaymentDetails {
  sessionId: string;
  customerEmail: string;
  amount: number;
  paymentStatus: string;
}

const CheckoutSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    
    if (!sessionId) {
      setError('No session ID found');
      setLoading(false);
      return;
    }

    const fetchPaymentDetails = async () => {
      try {
        const data = await getPaymentSessionDetails(sessionId);
        
        setPaymentDetails({
          sessionId: data.session.id,
          customerEmail: data.session.customer_email,
          amount: data.session.amount_total / 100, // Convert from cents
          paymentStatus: data.session.payment_status
        });

        // Clear the cart after successful payment
        if (data.session.payment_status === 'paid') {
          dispatch(clearCart());
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load payment details');
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentDetails();
  }, [searchParams, dispatch]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Processing your payment...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md mx-auto text-center bg-white p-8 rounded-lg shadow-md">
          <div className="text-red-500 mb-4">
            <CheckCircle className="h-16 w-16 mx-auto" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Payment Error</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <Button onClick={() => navigate('/')} className="w-full">
            Return to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md mx-auto text-center bg-white p-8 rounded-lg shadow-md">
        <div className="text-green-500 mb-4">
          <CheckCircle className="h-16 w-16 mx-auto" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Payment Successful!
        </h1>
        
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been confirmed.
        </p>

        {paymentDetails && (
          <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
            <h3 className="font-semibold text-gray-900 mb-2">Order Details:</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p><span className="font-medium">Order ID:</span> {paymentDetails.sessionId}</p>
              <p><span className="font-medium">Email:</span> {paymentDetails.customerEmail}</p>
              <p><span className="font-medium">Amount:</span> ${paymentDetails.amount.toFixed(2)}</p>
              <p><span className="font-medium">Status:</span> 
                <span className="capitalize ml-1 text-green-600 font-medium">
                  {paymentDetails.paymentStatus}
                </span>
              </p>
            </div>
          </div>
        )}

        <div className="space-y-3">
          <Button onClick={() => navigate('/')} className="w-full">
            Continue Shopping
          </Button>
          <Button 
            variant="outline" 
            onClick={() => navigate('/products')} 
            className="w-full"
          >
            View All Products
          </Button>
        </div>

        <p className="text-xs text-gray-500 mt-4">
          You will receive an email confirmation shortly.
        </p>
      </div>
    </div>
  );
};

export default CheckoutSuccess;