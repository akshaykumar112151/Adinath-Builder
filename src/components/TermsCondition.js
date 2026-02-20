import React from "react";
import { motion } from "framer-motion";

const TermsAndConditions = () => {
  return (
    <div
      className="relative min-h-screen bg-gray-900 text-white py-12 px-6 flex items-center justify-center"
      style={{ backgroundImage: "url('/images/construction-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto p-10 bg-gray-800 bg-opacity-95 shadow-2xl rounded-2xl backdrop-blur-lg border border-gray-700"
      >
        <motion.h1 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold mb-6 text-center text-yellow-500 drop-shadow-lg"
        >
          Terms & Conditions – Adinath Builder
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-gray-300 text-lg mb-6 text-center"
        >
          Welcome to Adinath Builder. By accessing our services, purchasing properties, or engaging in any transactions with us, you agree to the following terms and conditions. Please read them carefully.
        </motion.p>
        
        <div className="space-y-8">
          <Section title="1. General Terms">
            <p>Adinath Builder reserves the right to modify or update these terms at any time without prior notice.</p>
            <p>All transactions, including property purchases, bookings, and agreements, are subject to these terms and applicable laws.</p>
            <p>Any dispute arising out of these terms will be resolved under the jurisdiction of the respective legal authorities.</p>
          </Section>

          <Section title="2. Property Booking & Payment">
            <p>Property bookings are subject to availability and confirmation by Adinath Builder.</p>
            <p>A booking will only be confirmed after receiving the agreed booking amount.</p>
            <p>Payments must be made as per the agreed schedule; failure to do so may result in cancellation or penalty charges.</p>
            <p>All payments must be made through authorized channels as mentioned in the agreement.</p>
          </Section>

          <Section title="3. Pricing & Charges">
            <p>The price of properties is subject to change without prior notice unless a formal agreement is signed.</p>
            <p>Government taxes, registration charges, and legal fees are to be borne by the buyer.</p>
            <p>Any additional charges for modifications or customizations in the property will be discussed separately.</p>
          </Section>

          <Section title="4. Construction & Possession">
            <p>The estimated completion date of projects is tentative and may vary due to unforeseen circumstances.</p>
            <p>Delays due to force majeure (natural disasters, government restrictions, etc.) will not be the responsibility of Adinath Builder.</p>
            <p>Possession of the property will be handed over only after full payment and clearance of dues.</p>
          </Section>

          <Section title="5. Cancellation & Refund Policy">
            <p>If a buyer wishes to cancel a booking, a cancellation charge will apply as per company policy.</p>
            <p>Refunds, if applicable, will be processed within a specified time after deducting applicable charges.</p>
            <p>Adinath Builder reserves the right to cancel any booking due to unforeseen circumstances, in which case a full refund will be issued.</p>
          </Section>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mt-8 text-center"
        >
          <h2 className="text-2xl font-bold text-yellow-400 drop-shadow-md">For any queries or legal assistance, please contact us at:</h2>
          <p className="text-gray-300 mt-3">📍 Office Address: [Your Office Location]</p>
          <p className="text-gray-300">📞 Phone Number: [Your Contact Number]</p>
          <p className="text-gray-300">📧 Email: [Your Email Address]</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

const Section = ({ title, children }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-gray-700 p-6 rounded-lg shadow-lg border border-gray-600"
    >
      <h2 className="text-xl font-bold mb-3 text-yellow-400 drop-shadow-sm">{title}</h2>
      <div className="text-gray-300 space-y-2">{children}</div>
    </motion.div>
  );
};

export default TermsAndConditions;