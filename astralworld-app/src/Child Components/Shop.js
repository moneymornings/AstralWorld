import React from 'react'

function Shop() {
  return (
    <div>
   <h1>SHOP</h1> 
    </div>
  )
}

export default Shop
// import getStripe from '../Stripelib/lib/getStripe';

// export default function Shop() {



//   const ProductDisplay = () => (
//     <section>
//       <div className="product">
//         <img
//           src="https://i.imgur.com/EHyR2nP.png"
//           alt="The cover of Stubborn Attachments"
//         />
//         <div className="description">
//         <h3>Stubborn Attachments</h3>
//         <h5>$20.00</h5>
//         </div>
//       </div>
//       <form action="/create-checkout-session" method="POST">
//         <button type="submit">
//           Checkout
//         </button>
//       </form>
//     </section>
//   );
  
//   const Message = ({ message }) => (
//     <section>
//       <p>{message}</p>
//     </section>
//   );
  
//   export default function App() {
//     const [message, setMessage] = useState("");
  
//     useEffect(() => {
//       // Check to see if this is a redirect back from Checkout
//       const query = new URLSearchParams(window.location.search);
  
//       if (query.get("success")) {
//         setMessage("Order placed! You will receive an email confirmation.");
//       }
  
//       if (query.get("canceled")) {
//         setMessage(
//           "Order canceled -- continue to shop around and checkout when you're ready."
//         );
//       }
//     }, []);

//     const Message = ({ message }) => (
//       <section>
//         <p>{message}</p>
//       </section>
//     );
    
//     export default function App() {
//       const [message, setMessage] = useState("");
    
//       useEffect(() => {
//         // Check to see if this is a redirect back from Checkout
//         const query = new URLSearchParams(window.location.search);
    
//         if (query.get("success")) {
//           setMessage("Order placed! You will receive an email confirmation.");
//         }
    
//         if (query.get("canceled")) {
//           setMessage(
//             "Order canceled -- continue to shop around and checkout when you're ready."
//           );
//         }
//       }, []);
    
  
  

// //   async function handleCheckout() {
// //     const stripe = await getStripe();
// //     const { error } = await stripe.redirectToCheckout({
// //       lineItems: [
// //         {
// //           price: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID= 'price_1PKl0RFniHdEk10lqoF79Xv4',
// //           quantity: 1,
// //         },
// //       ],
// //       mode: 'subscription',
// //       successUrl: `http://localhost:3000/success`,
// //       cancelUrl: `http://localhost:3000/cancel`,
// //       customerEmail: 'customer@email.com',
// //     });
// //     console.warn(error.message);
// //   }


// //   return (

// //     <div>

// // <button onClick={handleCheckout}>Checkout</button>;

// //     </div>


    
// //   )


// return message ? (
//   <Message message={message} />
// ) : (
//   <ProductDisplay />
// );
// }

