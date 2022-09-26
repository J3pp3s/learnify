import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Checkout from '../components/Checkout';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
    'pk_test_51LmBDpLOutmz0trGIiZ7bmqJm36DNnQaIrZeS0dbbZ5WYPGY3Mb4SA2n46qqLewRr9edOo2pXbYbEK1Eik5TJdzM002xYGMbZ8');

export default function CheckoutPage() {

  return (
    <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
  );
};