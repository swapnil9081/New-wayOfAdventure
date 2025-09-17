// 
import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaCalendar, FaUsers, FaComments } from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    adventureType: "",
    groupSize: "",
    date: "",
    level: "",
    message: "",
    contactMethod: "",
    subscribe: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔹 Placeholder for future backend/database connection
    // Example with Axios (uncomment when backend is ready):
    /*
    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting form:", err);
    }
    */

    // For now, just show confirmation
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-blue-100 p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-6">
          Contact Us
        </h2>
        {submitted ? (
          <p className="text-center text-green-600 font-semibold">
            ✅ Thanks for contacting us! Our team will get back to you shortly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div className="flex items-center border rounded-xl p-3">
              <FaUser className="text-green-700 mr-3" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>

            {/* Email */}
            <div className="flex items-center border rounded-xl p-3">
              <FaEnvelope className="text-green-700 mr-3" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>

            {/* Phone */}
            <div className="flex items-center border rounded-xl p-3">
              <FaPhone className="text-green-700 mr-3" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (+91...)"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>

            {/* Adventure Type */}
            <select
              name="adventureType"
              value={formData.adventureType}
              onChange={handleChange}
              className="w-full border rounded-xl p-3 outline-none"
            >
              <option value="">Adventure Type</option>
              <option value="Trekking">Trekking</option>
              <option value="Camping">Camping</option>
              <option value="Rafting">Rafting</option>
              <option value="Paragliding">Paragliding</option>
              <option value="Other">Other</option>
            </select>

            {/* Group Size */}
            <div className="flex items-center border rounded-xl p-3">
              <FaUsers className="text-green-700 mr-3" />
              <input
                type="number"
                name="groupSize"
                placeholder="Group Size"
                value={formData.groupSize}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>

            {/* Preferred Date */}
            <div className="flex items-center border rounded-xl p-3">
              <FaCalendar className="text-green-700 mr-3" />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>

            {/* Experience Level */}
            <select
              name="level"
              value={formData.level}
              onChange={handleChange}
              className="w-full border rounded-xl p-3 outline-none"
            >
              <option value="">Experience Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </select>

            {/* Message */}
            <div className="flex items-start border rounded-xl p-3">
              <FaComments className="text-green-700 mr-3 mt-1" />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full outline-none"
              />
            </div>

            {/* Newsletter + Contact Method */}
            <div className="flex flex-col gap-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="subscribe"
                  checked={formData.subscribe}
                  onChange={handleChange}
                  className="mr-2"
                />
                Subscribe to our newsletter
              </label>

              <select
                name="contactMethod"
                value={formData.contactMethod}
                onChange={handleChange}
                className="w-full border rounded-xl p-3 outline-none"
              >
                <option value="">Preferred Contact Method</option>
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
                <option value="WhatsApp">WhatsApp</option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 rounded-xl hover:bg-green-800 transition"
            >
              Submit
            </button>
          </form>
        )}
      </div>

      {/* Social + WhatsApp */}
      <div className="flex justify-center gap-6 mt-6">
        <a href="#" className="text-green-700 text-2xl hover:text-green-900">
          🌐
        </a>
        <a href="#" className="text-green-700 text-2xl hover:text-green-900">
          📘
        </a>
        <a
          href="https://wa.me/911234567890"
          className="text-green-700 text-2xl hover:text-green-900"
        >
          💬
        </a>
      </div>
    </div>
  );
}
