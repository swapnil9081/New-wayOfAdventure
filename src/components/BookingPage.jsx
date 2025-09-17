// import { useState } from "react";
// import { FaCheckCircle } from "react-icons/fa";
// import axios from "axios";

// // ---------- STEP COMPONENTS ----------

// // Progress Indicator
// const ProgressBar = ({ currentStep }) => {
//   const steps = ["Dates", "Travelers", "Stay & Transport", "Summary", "Payment"];
//   return (
//     <div className="flex justify-between items-center mb-6">
//       {steps.map((step, index) => (
//         <div key={index} className="flex-1 flex items-center">
//           <div
//             className={`rounded-full h-10 w-10 flex items-center justify-center text-white font-bold ${
//               index <= currentStep ? "bg-blue-600" : "bg-gray-300"
//             }`}
//           >
//             {index + 1}
//           </div>
//           {index < steps.length - 1 && (
//             <div
//               className={`flex-1 h-1 ${
//                 index < currentStep ? "bg-blue-600" : "bg-gray-300"
//               }`}
//             ></div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// // Step 1 – Travel Dates
// const TravelDates = ({ data, setData }) => (
//   <div className="space-y-4">
//     <label className="block">
//       Departure Date:
//       <input
//         type="date"
//         value={data.departureDate}
//         onChange={(e) => setData({ ...data, departureDate: e.target.value })}
//         className="border rounded p-2 w-full"
//       />
//     </label>
//     <label className="block">
//       Return Date:
//       <input
//         type="date"
//         value={data.returnDate}
//         onChange={(e) => setData({ ...data, returnDate: e.target.value })}
//         className="border rounded p-2 w-full"
//       />
//     </label>
//   </div>
// );

// // Step 2 – Traveler Details
// const TravelerForm = ({ data, setData }) => {
//   const updateTraveler = (i, field, value) => {
//     const updated = [...data.travelers];
//     updated[i][field] = value;
//     setData({ ...data, travelers: updated });
//   };

//   return (
//     <div className="space-y-6">
//       <label className="block">
//         Contact Email:
//         <input
//           type="email"
//           value={data.email}
//           onChange={(e) => setData({ ...data, email: e.target.value })}
//           className="border rounded p-2 w-full"
//         />
//       </label>
//       <label className="block">
//         Number of Travelers:
//         <input
//           type="number"
//           min="1"
//           value={data.travelers.length}
//           onChange={(e) =>
//             setData({
//               ...data,
//               travelers: Array.from({ length: parseInt(e.target.value) || 1 }, (_, i) => ({
//                 name: data.travelers[i]?.name || "",
//                 age: data.travelers[i]?.age || "",
//                 gender: data.travelers[i]?.gender || "Male",
//               })),
//             })
//           }
//           className="border rounded p-2 w-full"
//         />
//       </label>
//       <div className="space-y-4">
//         {data.travelers.map((traveler, i) => (
//           <div key={i} className="border p-4 rounded shadow">
//             <h3 className="font-semibold mb-2">Traveler {i + 1}</h3>
//             <input
//               type="text"
//               placeholder="Name"
//               value={traveler.name}
//               onChange={(e) => updateTraveler(i, "name", e.target.value)}
//               className="border rounded p-2 w-full mb-2"
//             />
//             <input
//               type="number"
//               placeholder="Age"
//               value={traveler.age}
//               onChange={(e) => updateTraveler(i, "age", e.target.value)}
//               className="border rounded p-2 w-full mb-2"
//             />
//             <select
//               value={traveler.gender}
//               onChange={(e) => updateTraveler(i, "gender", e.target.value)}
//               className="border rounded p-2 w-full"
//             >
//               <option>Male</option>
//               <option>Female</option>
//               <option>Other</option>
//             </select>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Step 3 – Accommodation & Transport
// const AccommodationTransport = ({ data, setData }) => (
//   <div className="space-y-6">
//     <h3 className="font-bold text-lg">Choose Hotel</h3>
//     <div className="grid md:grid-cols-3 gap-4">
//       {["Budget Stay", "Comfort Stay", "Luxury Stay"].map((hotel) => (
//         <div
//           key={hotel}
//           onClick={() => setData({ ...data, hotel })}
//           className={`p-4 border rounded cursor-pointer shadow hover:shadow-lg ${
//             data.hotel === hotel ? "border-blue-500" : "border-gray-200"
//           }`}
//         >
//           {hotel}
//         </div>
//       ))}
//     </div>

//     <h3 className="font-bold text-lg">Transport</h3>
//     <div className="flex gap-4">
//       {["Bus", "Train", "Flight"].map((mode) => (
//         <label key={mode} className="flex items-center gap-2 cursor-pointer">
//           <input
//             type="radio"
//             name="transport"
//             checked={data.transport === mode}
//             onChange={() => setData({ ...data, transport: mode })}
//           />
//           {mode}
//         </label>
//       ))}
//     </div>

//     <h3 className="font-bold text-lg">Add-ons</h3>
//     <div className="grid md:grid-cols-2 gap-2">
//       {["Guided Tours", "Meals Included", "Airport Pickup"].map((addon) => (
//         <label key={addon} className="flex items-center gap-2 cursor-pointer">
//           <input
//             type="checkbox"
//             checked={data.addOns.includes(addon)}
//             onChange={() =>
//               setData({
//                 ...data,
//                 addOns: data.addOns.includes(addon)
//                   ? data.addOns.filter((a) => a !== addon)
//                   : [...data.addOns, addon],
//               })
//             }
//           />
//           {addon}
//         </label>
//       ))}
//     </div>
//   </div>
// );

// // Step 4 – Price Summary
// const PriceSummary = ({ data, setData }) => (
//   <div className="space-y-4">
//     <h3 className="font-bold text-lg">Booking Summary</h3>
//     <ul className="space-y-2 text-sm text-gray-700">
//       <li>Hotel: {data.hotel}</li>
//       <li>Transport: {data.transport}</li>
//       <li>Travelers: {data.travelers.length}</li>
//       <li>Add-ons: {data.addOns.join(", ") || "None"}</li>
//     </ul>
//     <label className="block">
//       Promo Code:
//       <input
//         type="text"
//         value={data.promo}
//         onChange={(e) => setData({ ...data, promo: e.target.value })}
//         className="border rounded p-2 w-full"
//       />
//     </label>
//     <div className="font-bold text-xl text-blue-600">Total: ₹50,000</div>
//   </div>
// );

// // Step 5 – Payment
// const PaymentForm = ({ onSubmit }) => (
//   <div className="space-y-6">
//     <h3 className="font-bold text-lg">Choose Payment Method</h3>
//     <div className="space-y-2">
//       {["UPI", "Credit/Debit Card", "Net Banking", "Wallet"].map((method) => (
//         <label key={method} className="flex items-center gap-2 cursor-pointer">
//           <input type="radio" name="payment" /> {method}
//         </label>
//       ))}
//     </div>
//     <button
//       onClick={onSubmit}
//       className="bg-blue-600 text-white w-full py-3 rounded-lg font-bold hover:bg-blue-700 transition"
//     >
//       Confirm & Pay
//     </button>
//   </div>
// );

// // Confirmation Screen
// const ConfirmationScreen = ({ bookingId }) => (
//   <div className="text-center space-y-6">
//     <FaCheckCircle className="text-green-500 text-6xl mx-auto" />
//     <h2 className="text-2xl font-bold">Booking Confirmed!</h2>
//     <p>Your booking ID is: <span className="font-semibold">{bookingId}</span></p>
//     <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
//       Download Itinerary
//     </button>
//     <button className="ml-4 bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700">
//       Manage Booking
//     </button>
//   </div>
// );

// // ---------- MAIN BOOKING PAGE ----------
// export default function BookingPage() {
//   const [step, setStep] = useState(0);
//   const [data, setData] = useState({
//     departureDate: "",
//     returnDate: "",
//     email: "",
//     travelers: [{ name: "", age: "", gender: "Male" }],
//     hotel: "Budget Stay",
//     transport: "Bus",
//     addOns: [],
//     promo: "",
//   });
//   const [bookingId, setBookingId] = useState(null);

//   const handleBookingSubmit = async () => {
//     try {
//       // API Placeholder
//       await axios.post("/api/bookings", data);
//       setBookingId("TRIP12345");
//       setStep(6); // Success screen
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="grid md:grid-cols-3 gap-6 p-6">
//       {/* Main Form */}
//       <div className="md:col-span-2 bg-white p-6 rounded-lg shadow">
//         <ProgressBar currentStep={step} />
//         {step === 0 && <TravelDates data={data} setData={setData} />}
//         {step === 1 && <TravelerForm data={data} setData={setData} />}
//         {step === 2 && <AccommodationTransport data={data} setData={setData} />}
//         {step === 3 && <PriceSummary data={data} setData={setData} />}
//         {step === 4 && <PaymentForm onSubmit={handleBookingSubmit} />}
//         {step === 6 && <ConfirmationScreen bookingId={bookingId} />}

//         {step < 4 && (
//           <div className="mt-6 flex justify-between">
//             {step > 0 && (
//               <button
//                 onClick={() => setStep(step - 1)}
//                 className="px-6 py-2 bg-gray-300 rounded hover:bg-gray-400"
//               >
//                 Back
//               </button>
//             )}
//             <button
//               onClick={() => setStep(step + 1)}
//               className="ml-auto px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//             >
//               Next
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Sticky Price Summary */}
//       <div className="hidden md:block sticky top-6 h-fit bg-gray-50 p-6 rounded-lg shadow">
//         <PriceSummary data={data} setData={setData} />
//       </div>

//       {/* Mobile Sticky Summary */}
//       <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t shadow p-4">
//         <PriceSummary data={data} setData={setData} />
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import axios from "axios";

// ---------- STEP COMPONENTS ----------

// Progress Indicator
const ProgressBar = ({ currentStep }) => {
  const steps = ["Dates", "Travelers", "Stay & Transport", "Summary", "Payment"];
  return (
    <div className="flex justify-between items-center mb-8">
      {steps.map((step, index) => (
        <div key={index} className="flex-1 flex items-center">
          <div
            className={`rounded-full h-10 w-10 flex items-center justify-center text-sm font-semibold ${
              index <= currentStep
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-500"
            }`}
          >
            {index + 1}
          </div>
          {index < steps.length - 1 && (
            <div
              className={`flex-1 h-1 ${
                index < currentStep
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600"
                  : "bg-gray-300"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

// Step 1 – Travel Dates
const TravelDates = ({ data, setData }) => (
  <div className="space-y-6">
    <label className="block">
      <span className="font-medium text-gray-700">Departure Date</span>
      <input
        type="date"
        value={data.departureDate}
        onChange={(e) => setData({ ...data, departureDate: e.target.value })}
        className="mt-1 border rounded-lg p-2 w-full shadow-sm focus:ring-2 focus:ring-blue-500"
      />
    </label>
    <label className="block">
      <span className="font-medium text-gray-700">Return Date</span>
      <input
        type="date"
        value={data.returnDate}
        onChange={(e) => setData({ ...data, returnDate: e.target.value })}
        className="mt-1 border rounded-lg p-2 w-full shadow-sm focus:ring-2 focus:ring-blue-500"
      />
    </label>
  </div>
);

// Step 2 – Traveler Details
const TravelerForm = ({ data, setData }) => {
  const updateTraveler = (i, field, value) => {
    const updated = [...data.travelers];
    updated[i][field] = value;
    setData({ ...data, travelers: updated });
  };

  return (
    <div className="space-y-6">
      <label className="block">
        <span className="font-medium text-gray-700">Contact Email</span>
        <input
          type="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className="mt-1 border rounded-lg p-2 w-full shadow-sm focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="block">
        <span className="font-medium text-gray-700">Number of Travelers</span>
        <input
          type="number"
          min="1"
          value={data.travelers.length}
          onChange={(e) =>
            setData({
              ...data,
              travelers: Array.from(
                { length: parseInt(e.target.value) || 1 },
                (_, i) => ({
                  name: data.travelers[i]?.name || "",
                  age: data.travelers[i]?.age || "",
                  gender: data.travelers[i]?.gender || "Male",
                })
              ),
            })
          }
          className="mt-1 border rounded-lg p-2 w-full shadow-sm focus:ring-2 focus:ring-blue-500"
        />
      </label>

      <div className="space-y-4">
        {data.travelers.map((traveler, i) => (
          <div
            key={i}
            className="border p-4 rounded-xl shadow-md bg-gray-50"
          >
            <h3 className="font-semibold mb-3 text-blue-600">
              Traveler {i + 1}
            </h3>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Full Name"
                value={traveler.name}
                onChange={(e) => updateTraveler(i, "name", e.target.value)}
                className="border rounded-lg p-2 w-full shadow-sm focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                placeholder="Age"
                value={traveler.age}
                onChange={(e) => updateTraveler(i, "age", e.target.value)}
                className="border rounded-lg p-2 w-full shadow-sm focus:ring-2 focus:ring-blue-500"
              />
              <select
                value={traveler.gender}
                onChange={(e) => updateTraveler(i, "gender", e.target.value)}
                className="border rounded-lg p-2 w-full shadow-sm focus:ring-2 focus:ring-blue-500"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Step 3 – Accommodation & Transport
const AccommodationTransport = ({ data, setData }) => (
  <div className="space-y-8">
    <div>
      <h3 className="font-bold text-lg text-gray-800 mb-3">Choose Hotel</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {["Budget Stay", "Comfort Stay", "Luxury Stay"].map((hotel) => (
          <div
            key={hotel}
            onClick={() => setData({ ...data, hotel })}
            className={`p-4 rounded-xl border cursor-pointer text-center shadow hover:shadow-lg transition ${
              data.hotel === hotel
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 bg-white"
            }`}
          >
            {hotel}
          </div>
        ))}
      </div>
    </div>

    <div>
      <h3 className="font-bold text-lg text-gray-800 mb-3">Transport</h3>
      <div className="flex gap-6">
        {["Bus", "Train", "Flight"].map((mode) => (
          <label key={mode} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="transport"
              checked={data.transport === mode}
              onChange={() => setData({ ...data, transport: mode })}
            />
            {mode}
          </label>
        ))}
      </div>
    </div>

    <div>
      <h3 className="font-bold text-lg text-gray-800 mb-3">Add-ons</h3>
      <div className="grid md:grid-cols-2 gap-3">
        {["Guided Tours", "Meals Included", "Airport Pickup"].map((addon) => (
          <label
            key={addon}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={data.addOns.includes(addon)}
              onChange={() =>
                setData({
                  ...data,
                  addOns: data.addOns.includes(addon)
                    ? data.addOns.filter((a) => a !== addon)
                    : [...data.addOns, addon],
                })
              }
            />
            {addon}
          </label>
        ))}
      </div>
    </div>
  </div>
);

// Step 4 – Price Summary
const PriceSummary = ({ data, setData }) => (
  <div className="space-y-4">
    <h3 className="font-bold text-lg text-gray-800">Booking Summary</h3>
    <ul className="space-y-1 text-sm text-gray-700">
      <li>Hotel: {data.hotel}</li>
      <li>Transport: {data.transport}</li>
      <li>Travelers: {data.travelers.length}</li>
      <li>Add-ons: {data.addOns.join(", ") || "None"}</li>
    </ul>
    <label className="block">
      <span className="font-medium text-gray-700">Promo Code</span>
      <input
        type="text"
        value={data.promo}
        onChange={(e) => setData({ ...data, promo: e.target.value })}
        className="mt-1 border rounded-lg p-2 w-full shadow-sm focus:ring-2 focus:ring-blue-500"
      />
    </label>
    <div className="font-bold text-2xl text-blue-600">Total: ₹50,000</div>
  </div>
);

// Step 5 – Payment
const PaymentForm = ({ onSubmit }) => (
  <div className="space-y-6">
    <h3 className="font-bold text-lg text-gray-800">Choose Payment Method</h3>
    <div className="space-y-3">
      {["UPI", "Credit/Debit Card", "Net Banking", "Wallet"].map((method) => (
        <label key={method} className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="payment" /> {method}
        </label>
      ))}
    </div>
    <button
      onClick={onSubmit}
      className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-full py-3 rounded-lg font-bold hover:opacity-90 transition"
    >
      Confirm & Pay
    </button>
  </div>
);

// Confirmation Screen
const ConfirmationScreen = ({ bookingId }) => (
  <div className="text-center space-y-6">
    <FaCheckCircle className="text-green-500 text-6xl mx-auto" />
    <h2 className="text-2xl font-bold text-gray-800">Booking Confirmed!</h2>
    <p className="text-gray-600">
      Your booking ID is:{" "}
      <span className="font-semibold text-gray-900">{bookingId}</span>
    </p>
    <div className="space-x-4">
      <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg hover:opacity-90">
        Download Itinerary
      </button>
      <button className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700">
        Manage Booking
      </button>
    </div>
  </div>
);

// ---------- MAIN BOOKING PAGE ----------
export default function BookingPage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    departureDate: "",
    returnDate: "",
    email: "",
    travelers: [{ name: "", age: "", gender: "Male" }],
    hotel: "Budget Stay",
    transport: "Bus",
    addOns: [],
    promo: "",
  });
  const [bookingId, setBookingId] = useState(null);

  const handleBookingSubmit = async () => {
    try {
      // API Placeholder
      await axios.post("/api/bookings", data);
      setBookingId("TRIP12345");
      setStep(6); // Success screen
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="grid md:grid-cols-3 gap-6 p-6 bg-gray-100 min-h-screen">
      {/* Main Form */}
      <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-lg">
        <ProgressBar currentStep={step} />
        {step === 0 && <TravelDates data={data} setData={setData} />}
        {step === 1 && <TravelerForm data={data} setData={setData} />}
        {step === 2 && <AccommodationTransport data={data} setData={setData} />}
        {step === 3 && <PriceSummary data={data} setData={setData} />}
        {step === 4 && <PaymentForm onSubmit={handleBookingSubmit} />}
        {step === 6 && <ConfirmationScreen bookingId={bookingId} />}

        {step < 4 && (
          <div className="mt-8 flex justify-between">
            {step > 0 && (
              <button
                onClick={() => setStep(step - 1)}
                className="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Back
              </button>
            )}
            <button
              onClick={() => setStep(step + 1)}
              className="ml-auto px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:opacity-90"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Sticky Price Summary */}
      <div className="hidden md:block sticky top-6 h-fit bg-white p-6 rounded-xl shadow-lg">
        <PriceSummary data={data} setData={setData} />
      </div>

      {/* Mobile Sticky Summary */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t shadow-lg p-4">
        <PriceSummary data={data} setData={setData} />
      </div>
    </div>
  );
}
