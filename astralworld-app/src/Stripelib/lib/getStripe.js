import { loadStripe } from '@stripe/stripe-js';

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ='ppk_test_51PKkqFFniHdEk10lQbXakwM6Bd3vttCJkerTnraX4zLlPyzeURG4Dh80lxmljXU3ibXLivNyIytd6XNvv2JfWdB900ynmuV6vr');
  }
  return stripePromise;
  
};

// NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY='ppk_test_51PKkqFFniHdEk10lQbXakwM6Bd3vttCJkerTnraX4zLlPyzeURG4Dh80lxmljXU3ibXLivNyIytd6XNvv2JfWdB900ynmuV6vr'

// NEXT_PUBLIC_STRIPE_PRICE_ID=' price_1PKl0RFniHdEk10lqoF79Xv4'

export default getStripe;