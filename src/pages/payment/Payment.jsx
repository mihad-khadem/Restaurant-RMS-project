import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ChcekOut from "./ChcekOut";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
const Payment = () => {
  return (
    <div>
      <SectionTitle
        heading={"Payment"}
        subHeading={"Taka Dew!!"}
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <ChcekOut></ChcekOut>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
