import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#000000",
      color: "#000000",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "26px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#000000" },
      "::placeholder": { color: "#000000" },
    },
    invalid: {
      iconColor: "#000000",
      color: "#000000",
    },
  },
};

export const StripeForm = () => {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    
    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:5000/payment", {
          id,
          amount:9999
        });

        if (response.data.success) {
          console.log("response.data.success",response.data)
          console.log("Successful payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log("outer error", error);
    }
  };

  

  return (
    <>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button>DONATE</button>
        </form>
      ) : (
        <div>
          <h2>Thank You For Your Donation</h2>
        </div>
      )}
    </>
  );
};

