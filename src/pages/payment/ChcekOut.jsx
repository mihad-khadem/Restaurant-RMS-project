import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const ChcekOut = () => {
  // Error State
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error: ", error);
      setError(error.message);
    } else {
      console.log("Payment method", paymentMethod);
      setError("Payment Successful");
    }
  };
  return (
    <div>
      <form className="m-10 lg:m-28" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        ></CardElement>
        <button
          className="btn mt-5 flex justify-center"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
        <div className="flex justify-center p-4 border-b-2">
          <p className="text-red-500 font-bold">{error}</p>
        </div>
      </form>
    </div>
  );
};

export default ChcekOut;
