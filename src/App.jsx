// 

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Customers from "./components/Customers";
import Footer from "./components/Footer";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import ContactUs from "./components/ContactUs";
import TourDetails from "./components/TourDetails";
import RegisterPopup from "./components/RegisterPopup";
import BookingPage from "./components/BookingPage";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Destinations />
              <Customers />
              <RegisterPopup/>
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/tour/:id" element={<TourDetails />} />
         <Route path="/booking" element={<BookingPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
