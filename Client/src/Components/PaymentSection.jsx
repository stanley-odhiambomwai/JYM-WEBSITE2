import React, { useState } from "react";

export default function PaymentSection({ onPaymentSuccess }) {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
   
    setTimeout(() => {
      alert("Payment of 500 shillings successful!");
      setIsProcessing(false);
      onPaymentSuccess();
    }, 2000); 
  };

  return (
    <div className="mb-6 p-4 border border-yellow-500 rounded">
      <h2 className="text-xl font-semibold mb-2">Registration Fee: 500 shillings</h2>
      <button
        onClick={handlePayment}
        disabled={isProcessing}
        className={`${
          isProcessing ? "bg-yellow-300 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-600"
        } text-white font-bold py-2 px-4 rounded transition-colors duration-300`}
      >
        {isProcessing ? "Processing Payment..." : "Pay 500 shillings"}
      </button>
    </div>
  );
}
