import React, { useState } from "react";
import PaymentSection from "./PaymentSection";
import Input from "./Input";
import FormAction from "./FormAction";
import { registrationFields } from "../constants/registrationFields";

let initialState = {};
registrationFields.forEach(field => (initialState[field.id] = ""));

export default function Registration() {
  const [formState, setFormState] = useState(initialState);
  const [paymentDone, setPaymentDone] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
    console.log("User registration data: ", formState);
    alert("Registration successful!");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      {!paymentDone ? (
        <PaymentSection onPaymentSuccess={() => setPaymentDone(true)} />
      ) : (
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-4">Complete Registration</h2>
          <form onSubmit={handleSubmit}>
            {registrationFields.map((field) => (
              <Input
                key={field.id}
                handleChange={handleChange}
                value={formState[field.id]}
                labelText={field.labelText}
                labelFor={field.labelFor}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
                customClass="mb-4"
              />
            ))}
            <FormAction handleSubmit={handleSubmit} text="Register" />
          </form>
        </div>
      )}
    </div>
  );
}
