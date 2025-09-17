// // // // import React, { useEffect, useState } from "react";
// // // // import { XMarkIcon } from "@heroicons/react/24/outline";

// // // // const RegisterPopup = () => {
// // // //   const [showPopup, setShowPopup] = useState(false);
// // // //   const [formData, setFormData] = useState({
// // // //     email: "",
// // // //     contact: "",
// // // //     otp: "",
// // // //     message: "",
// // // //   });
// // // //   const [otpRequested, setOtpRequested] = useState(false);

// // // //   useEffect(() => {
// // // //     // Show popup when page loads
// // // //     setShowPopup(true);
// // // //   }, []);

// // // //   const handleChange = (e) => {
// // // //     setFormData({
// // // //       ...formData,
// // // //       [e.target.name]: e.target.value,
// // // //     });
// // // //   };

// // // //   const handleGetOtp = () => {
// // // //     if (!formData.contact) {
// // // //       alert("Please enter your contact number first.");
// // // //       return;
// // // //     }
// // // //     // Here you would call backend to send OTP
// // // //     // await axios.post("/api/send-otp", { contact: formData.contact });
// // // //     setOtpRequested(true);
// // // //     alert("OTP sent successfully!");
// // // //   };

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     console.log("Form submitted:", formData);
// // // //     // Example: send to backend
// // // //     // await axios.post("/api/register", formData);
// // // //     alert("Form submitted successfully!");
// // // //     setShowPopup(false);
// // // //   };

// // // //   return (
// // // //     <>
// // // //       {showPopup && (
// // // //         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
// // // //           <div className="bg-white rounded-xl shadow-xl w-11/12 max-w-md p-6 relative animate-fadeIn">
// // // //             {/* Close Button */}
// // // //             <button
// // // //               onClick={() => setShowPopup(false)}
// // // //               className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
// // // //             >
// // // //               <XMarkIcon className="h-6 w-6" />
// // // //             </button>

// // // //             {/* Heading */}
// // // //             <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
// // // //               Register with Us
// // // //             </h2>

// // // //             {/* Form */}
// // // //             <form onSubmit={handleSubmit} className="space-y-4">
// // // //               {/* Email */}
// // // //               <input
// // // //                 type="email"
// // // //                 name="email"
// // // //                 placeholder="Enter Email"
// // // //                 value={formData.email}
// // // //                 onChange={handleChange}
// // // //                 required
// // // //                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
// // // //               />

// // // //               {/* Contact + Get OTP */}
// // // //               <div className="flex gap-2">
// // // //                 <input
// // // //                   type="text"
// // // //                   name="contact"
// // // //                   placeholder="Enter Contact No."
// // // //                   value={formData.contact}
// // // //                   onChange={handleChange}
// // // //                   required
// // // //                   className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
// // // //                 />
// // // //                 <button
// // // //                   type="button"
// // // //                   onClick={handleGetOtp}
// // // //                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
// // // //                 >
// // // //                   Get OTP
// // // //                 </button>
// // // //               </div>

// // // //               {/* OTP (only if requested) */}
// // // //               {otpRequested && (
// // // //                 <>
// // // //                   <input
// // // //                     type="text"
// // // //                     name="otp"
// // // //                     placeholder="Enter OTP"
// // // //                     value={formData.otp}
// // // //                     onChange={handleChange}
// // // //                     required
// // // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
// // // //                   />

// // // //                   {/* Message */}
// // // //                   <textarea
// // // //                     name="message"
// // // //                     placeholder="Enter your message..."
// // // //                     value={formData.message}
// // // //                     onChange={handleChange}
// // // //                     rows="3"
// // // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
// // // //                   ></textarea>

// // // //                   {/* Final Submit */}
// // // //                   <button
// // // //                     type="submit"
// // // //                     className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
// // // //                   >
// // // //                     Submit
// // // //                   </button>
// // // //                 </>
// // // //               )}
// // // //             </form>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </>
// // // //   );
// // // // };

// // // // export default RegisterPopup;
// // // import React, { useEffect, useState } from "react";
// // // import { XMarkIcon } from "@heroicons/react/24/outline";

// // // const RegisterPopup = () => {
// // //   const [showPopup, setShowPopup] = useState(false);
// // //   const [formData, setFormData] = useState({
// // //     email: "",
// // //     contact: "",
// // //     otp: "",
// // //     message: "",
// // //   });
// // //   const [otpRequested, setOtpRequested] = useState(false);

// // //   useEffect(() => {
// // //     // Show popup when page loads
// // //     setShowPopup(true);
// // //   }, []);

// // //   const handleChange = (e) => {
// // //     setFormData({
// // //       ...formData,
// // //       [e.target.name]: e.target.value,
// // //     });
// // //   };

// // //   const handleGetOtp = () => {
// // //     if (!formData.contact) {
// // //       alert("Please enter your contact number first.");
// // //       return;
// // //     }
// // //     // Here you would call backend to send OTP
// // //     // await axios.post("/api/send-otp", { contact: formData.contact });
// // //     setOtpRequested(true);
// // //     alert("OTP sent successfully!");
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     console.log("Form submitted:", formData);
// // //     // Example: send to backend
// // //     // await axios.post("/api/register", formData);
// // //     alert("Form submitted successfully!");
// // //     setShowPopup(false);
// // //   };

// // //   return (
// // //     <>
// // //       {showPopup && (
// // //         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
// // //           <div className="bg-white rounded-xl shadow-xl w-11/12 max-w-md p-6 relative animate-fadeIn">
// // //             {/* Close Button */}
// // //             <button
// // //               onClick={() => setShowPopup(false)}
// // //               className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
// // //             >
// // //               <XMarkIcon className="h-6 w-6" />
// // //             </button>

// // //             {/* Heading */}
// // //             <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
// // //               Register with Us
// // //             </h2>

// // //             {/* Form */}
// // //             <form onSubmit={handleSubmit} className="space-y-4">
// // //               {/* Email */}
// // //               <input
// // //                 type="email"
// // //                 name="email"
// // //                 placeholder="Enter Email"
// // //                 value={formData.email}
// // //                 onChange={handleChange}
// // //                 required
// // //                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
// // //               />

// // //               {/* Contact + Get OTP */}
// // //               <div className="flex gap-2">
// // //                 <input
// // //                   type="text"
// // //                   name="contact"
// // //                   placeholder="Enter Contact No."
// // //                   value={formData.contact}
// // //                   onChange={handleChange}
// // //                   required
// // //                   className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
// // //                 />
// // //                 <button
// // //                   type="button"
// // //                   onClick={handleGetOtp}
// // //                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
// // //                 >
// // //                   Get OTP
// // //                 </button>
// // //               </div>

// // //               {/* OTP (only if requested) */}
// // //               {otpRequested && (
// // //                 <>
// // //                   <input
// // //                     type="text"
// // //                     name="otp"
// // //                     placeholder="Enter OTP"
// // //                     value={formData.otp}
// // //                     onChange={handleChange}
// // //                     required
// // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
// // //                   />

// // //                   {/* Message */}
// // //                   <textarea
// // //                     name="message"
// // //                     placeholder="Enter your message..."
// // //                     value={formData.message}
// // //                     onChange={handleChange}
// // //                     rows="3"
// // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
// // //                   ></textarea>

// // //                   {/* Final Submit */}
// // //                   <button
// // //                     type="submit"
// // //                     className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
// // //                   >
// // //                     Submit
// // //                   </button>
// // //                 </>
// // //               )}
// // //             </form>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </>
// // //   );
// // // };

// // // export default RegisterPopup;
// // import React, { useEffect, useState } from "react";
// // import { XMarkIcon } from "@heroicons/react/24/outline";

// // const RegisterPopup = ({ children }) => {
// //   const [showPopup, setShowPopup] = useState(false);
// //   const [formData, setFormData] = useState({
// //     email: "",
// //     contact: "",
// //     otp: "",
// //     message: "",
// //   });
// //   const [otpRequested, setOtpRequested] = useState(false);

// //   useEffect(() => {
// //     // Show popup when page loads
// //     setShowPopup(true);
// //   }, []);

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   const handleGetOtp = () => {
// //     if (!formData.contact) {
// //       alert("Please enter your contact number first.");
// //       return;
// //     }
// //     // Here you would call backend to send OTP
// //     setOtpRequested(true);
// //     alert("OTP sent successfully!");
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log("Form submitted:", formData);
// //     alert("Form submitted successfully!");
// //     setShowPopup(false);
// //   };

// //   return (
// //     <div className="relative">
// //       {/* Website Content */}
// //       <div
// //         className={`transition-all duration-300 ${
// //           showPopup ? "scale-95 blur-sm" : "scale-100 blur-0"
// //         }`}
// //       >
// //         {children}
// //       </div>

// //       {/* Popup */}
// //       {showPopup && (
// //         <div className="fixed inset-0 flex items-center justify-center z-50">
// //           <div className="bg-white rounded-xl shadow-xl w-11/12 max-w-md p-6 relative animate-fadeIn">
// //             {/* Close Button */}
// //             <button
// //               onClick={() => setShowPopup(false)}
// //               className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
// //             >
// //               <XMarkIcon className="h-6 w-6" />
// //             </button>

// //             {/* Heading */}
// //             <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
// //               Register with Us
// //             </h2>

// //             {/* Form */}
// //             <form onSubmit={handleSubmit} className="space-y-4">
// //               {/* Email */}
// //               <input
// //                 type="email"
// //                 name="email"
// //                 placeholder="Enter Email"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 required
// //                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
// //               />

// //               {/* Contact + Get OTP */}
// //               <div className="flex gap-2">
// //                 <input
// //                   type="text"
// //                   name="contact"
// //                   placeholder="Enter Contact No."
// //                   value={formData.contact}
// //                   onChange={handleChange}
// //                   required
// //                   className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
// //                 />
// //                 <button
// //                   type="button"
// //                   onClick={handleGetOtp}
// //                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
// //                 >
// //                   Get OTP
// //                 </button>
// //               </div>

// //               {/* OTP (only if requested) */}
// //               {otpRequested && (
// //                 <>
// //                   <input
// //                     type="text"
// //                     name="otp"
// //                     placeholder="Enter OTP"
// //                     value={formData.otp}
// //                     onChange={handleChange}
// //                     required
// //                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
// //                   />

// //                   {/* Message */}
// //                   <textarea
// //                     name="message"
// //                     placeholder="Enter your message..."
// //                     value={formData.message}
// //                     onChange={handleChange}
// //                     rows="3"
// //                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
// //                   ></textarea>

// //                   {/* Final Submit */}
// //                   <button
// //                     type="submit"
// //                     className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
// //                   >
// //                     Submit
// //                   </button>
// //                 </>
// //               )}
// //             </form>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default RegisterPopup;
// import React, { useEffect, useState } from "react";
// import { XMarkIcon } from "@heroicons/react/24/outline";

// const RegisterPopup = ({ children }) => {
//   const [showPopup, setShowPopup] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     contact: "",
//     otp: "",
//     message: "",
//   });
//   const [otpRequested, setOtpRequested] = useState(false);

//   useEffect(() => {
//     // Check if popup has already been shown this session
//     const alreadyShown = sessionStorage.getItem("popupShown");

//     if (!alreadyShown) {
//       setShowPopup(true);
//       sessionStorage.setItem("popupShown", "true");
//     }
//   }, []);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleGetOtp = () => {
//     if (!formData.contact) {
//       alert("Please enter your contact number first.");
//       return;
//     }
//     setOtpRequested(true);
//     alert("OTP sent successfully!");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     alert("Form submitted successfully!");
//     setShowPopup(false);
//   };

//   return (
//     <div className="relative">
//       {/* Website Content */}
//       <div
//         className={`transition-all duration-300 ${
//           showPopup ? "scale-95 blur-sm" : "scale-100 blur-0"
//         }`}
//       >
//         {children}
//       </div>

//       {/* Popup */}
//       {showPopup && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div className="bg-white rounded-xl shadow-xl w-11/12 max-w-md p-6 relative animate-fadeIn">
//             {/* Close Button */}
//             <button
//               onClick={() => setShowPopup(false)}
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
//             >
//               <XMarkIcon className="h-6 w-6" />
//             </button>

//             {/* Heading */}
//             <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
//               Register with Us
//             </h2>

//             {/* Form */}
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               />

//               <div className="flex gap-2">
//                 <input
//                   type="text"
//                   name="contact"
//                   placeholder="Enter Contact No."
//                   value={formData.contact}
//                   onChange={handleChange}
//                   required
//                   className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 />
//                 <button
//                   type="button"
//                   onClick={handleGetOtp}
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//                 >
//                   Get OTP
//                 </button>
//               </div>

//               {otpRequested && (
//                 <>
//                   <input
//                     type="text"
//                     name="otp"
//                     placeholder="Enter OTP"
//                     value={formData.otp}
//                     onChange={handleChange}
//                     required
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
//                   />

//                   <textarea
//                     name="message"
//                     placeholder="Enter your message..."
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows="3"
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                   ></textarea>

//                   <button
//                     type="submit"
//                     className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
//                   >
//                     Submit
//                   </button>
//                 </>
//               )}
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RegisterPopup;
import React, { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
// import axios from "axios"; // Uncomment later for backend calls

const RegisterPopup = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [otpRequested, setOtpRequested] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    contact: "",
    otp: "",
    message: "",
  });

  useEffect(() => {
    // Show only once per session
    const alreadyShown = sessionStorage.getItem("popupShown");
    if (!alreadyShown) {
      setShowPopup(true);
      sessionStorage.setItem("popupShown", "true");
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGetOtp = async () => {
    if (!formData.contact) {
      alert("Please enter your contact number first.");
      return;
    }
    try {
      // Example future backend call
      // await axios.post("/api/send-otp", { contact: formData.contact });

      setOtpRequested(true);
      alert("OTP sent successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to send OTP. Try again later.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Example future backend call
      // await axios.post("/api/register", formData);

      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
      setShowPopup(false);
    } catch (error) {
      console.error(error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="relative">
      {/* Website Content */}
      <div
        className={`transition-all duration-300 ${
          showPopup ? "scale-95 blur-sm" : "scale-100 blur-0"
        }`}
      >
        {children}
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="relative w-11/12 max-w-md p-6 rounded-2xl shadow-2xl bg-white/90 backdrop-blur-xl animate-fadeIn border border-gray-200">
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
            >
              <XMarkIcon className="h-7 w-7" />
            </button>

            {/* Heading */}
            <h2 className="text-2xl font-extrabold text-center text-blue-600 mb-6">
              Welcome & Register with Us
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Contact + Get OTP */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Number
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="contact"
                    placeholder="Enter your number"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleGetOtp}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Get OTP
                  </button>
                </div>
              </div>

              {/* OTP & Message only after OTP request */}
              {otpRequested && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      One-Time Password (OTP)
                    </label>
                    <input
                      type="text"
                      name="otp"
                      placeholder="Enter OTP"
                      value={formData.otp}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      placeholder="Write your message..."
                      value={formData.message}
                      onChange={handleChange}
                      rows="3"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    ></textarea>
                  </div>

                  {/* Final Submit */}
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                  >
                    Submit
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterPopup;
