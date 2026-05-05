import React from "react";
import "./ConfirmedBooking.css";
import { CheckCircle } from "lucide-react";

const ConfirmedBooking = () => {
  return (
    <section className="confirmed-booking py-24 px-6 flex flex-col items-center justify-center text-center bg-neutral-50">
      <div className="max-w-xl bg-white p-12 rounded-3xl shadow-lg flex flex-col items-center">
        <CheckCircle size={80} className="text-success mb-6" />
        <h1 className="text-4xl md:text-5xl mb-4">Booking Confirmed</h1>
        <p className="text-xl font-karla text-neutral-600 leading-relaxed mb-8">
          Thank you for choosing Little Lemon! Your table has been reserved
          successfully. A confirmation email has been sent to your inbox.
        </p>
        <button
          className="btn-primary"
          onClick={() => (window.location.href = "/")}
        >
          Back to Home
        </button>
      </div>
    </section>
  );
};

export default ConfirmedBooking;
