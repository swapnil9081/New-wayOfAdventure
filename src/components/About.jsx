// import { FaMountain, FaUtensils, FaPeopleArrows, FaHome, FaBus, FaTree, FaFire } from "react-icons/fa";

// export default function About() {
//   return (
//     <div className="py-16 max-w-6xl mx-auto px-6 space-y-12">
//       {/* Heading */}
//       <div className="text-center">
//         <h1 className="text-4xl font-extrabold mb-4 text-gray-800">
//           About Us
//         </h1>
//         <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
//           We are IT graduates who started this travel venture to show you the{" "}
//           <span className="font-semibold text-blue-600">real India</span> —
//           beyond tourist traps, scams, and overcrowded spots. Our mission is to
//           bring you closer to untouched gems, authentic culture, and the warm
//           hospitality of local communities.
//         </p>
//       </div>

//       {/* Mission Section */}
//       <section className="grid md:grid-cols-2 gap-10 items-center">
//         <div>
//           <h2 className="text-2xl font-bold mb-4 text-gray-800">
//             Our Mission
//           </h2>
//           <p className="text-gray-700 leading-relaxed">
//             We take you beyond the hype of places like Jaipur, Delhi, and
//             Mumbai, and into villages, mountains, and valleys unknown even to
//             many Indians. Our goal is to deliver{" "}
//             <span className="font-semibold text-green-600">
//               authentic experiences
//             </span>{" "}
//             — from local food and culture to scenic hidden trails.
//           </p>
//         </div>
//         <img
//           src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
//           alt="Scenic view"
//           className="rounded-2xl shadow-lg"
//         />
//       </section>

//       {/* What NOT to Expect */}
//       <section>
//         <h2 className="text-2xl font-bold text-red-600 mb-6 text-center">
//           ❌ What NOT to Expect
//         </h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           {[
//             {
//               title: "Luxury Hotels",
//               desc: "No five-star resorts — you’ll stay in cozy, local homestays.",
//               icon: <FaHome className="text-red-500 text-3xl" />,
//             },
//             {
//               title: "Private Cabs Always",
//               desc: "Travel like a local — shared rides, buses, and real-life experiences.",
//               icon: <FaBus className="text-red-500 text-3xl" />,
//             },
//             {
//               title: "Overcrowded Spots",
//               desc: "We avoid staged, touristy destinations. Peaceful and real only.",
//               icon: <FaMountain className="text-red-500 text-3xl" />,
//             },
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
//             >
//               <div className="mb-3">{item.icon}</div>
//               <h3 className="font-semibold text-lg">{item.title}</h3>
//               <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* What to Expect */}
//       <section>
//         <h2 className="text-2xl font-bold text-green-600 mb-6 text-center">
//           ✅ What to Expect
//         </h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           {[
//             {
//               title: "Local Experience",
//               desc: "Dive into local life, traditions, and communities.",
//               icon: <FaPeopleArrows className="text-green-500 text-3xl" />,
//             },
//             {
//               title: "Authentic Food",
//               desc: "Taste traditional dishes made with fresh, local ingredients.",
//               icon: <FaUtensils className="text-green-500 text-3xl" />,
//             },
//             {
//               title: "Nature & Adventure",
//               desc: "Hike mountains, explore waterfalls, and reconnect with nature.",
//               icon: <FaTree className="text-green-500 text-3xl" />,
//             },
//             {
//               title: "Bonfire Nights",
//               desc: "Share stories under the stars with locals and fellow travelers.",
//               icon: <FaFire className="text-green-500 text-3xl" />,
//             },
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
//             >
//               <div className="mb-3">{item.icon}</div>
//               <h3 className="font-semibold text-lg">{item.title}</h3>
//               <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Closing Section */}
//       <div className="text-center max-w-3xl mx-auto">
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">
//           A Journey Like No Other
//         </h2>
//         <p className="text-gray-700 leading-relaxed">
//           We promise you a travel experience that slows down time, connects you
//           with nature, and leaves you with{" "}
//           <span className="font-semibold text-blue-600">unforgettable
//           memories</span>. Not luxury. Not commercialized. Just the{" "}
//           <span className="font-semibold text-green-600">
//             real India, raw and beautiful
//           </span>
//           .
//         </p>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import Slider from "react-slick";
import {
  FaMountain,
  FaUtensils,
  FaPeopleArrows,
  FaHome,
  FaBus,
  FaTree,
  FaFire,
} from "react-icons/fa";

// Custom arrows for sliders
function NextArrow({ onClick }) {
  return (
    <button
      className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md z-10"
      onClick={onClick}
    >
      ➡
    </button>
  );
}

function PrevArrow({ onClick }) {
  return (
    <button
      className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md z-10"
      onClick={onClick}
    >
      ⬅
    </button>
  );
}

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  const [popupImages, setPopupImages] = useState([]);
  const [popupTitle, setPopupTitle] = useState("");

  const mainSliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const popupSliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const sliderImages = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  ];

  const openPopup = (title, images) => {
    setPopupTitle(title);
    setPopupImages(images);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setPopupImages([]);
    setPopupTitle("");
  };

  return (
    <div className="py-16 max-w-6xl mx-auto px-6 space-y-12">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-800">About Us</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We are IT graduates who started this travel venture to show you the{" "}
          <span className="font-semibold text-blue-600">real India</span> — beyond
          tourist traps, scams, and overcrowded spots. Our mission is to bring you
          closer to untouched gems, authentic culture, and the warm hospitality of
          local communities.
        </p>
      </div>

      {/* Mission Section with Slider */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            We take you beyond the hype of places like Jaipur, Delhi, and Mumbai,
            and into villages, mountains, and valleys unknown even to many Indians.
            Our goal is to deliver{" "}
            <span className="font-semibold text-green-600">authentic experiences</span>{" "}
            — from local food and culture to scenic hidden trails.
          </p>
        </div>

        <div className="relative rounded-2xl shadow-lg overflow-hidden">
          <Slider {...mainSliderSettings}>
            {sliderImages.map((src, i) => (
              <div key={i} className="w-full aspect-video">
                <img
                  src={src}
                  alt={`Scenic view ${i + 1}`}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* What NOT to Expect */}
      <section>
        <h2 className="text-2xl font-bold text-red-600 mb-6 text-center">
          ❌ What NOT to Expect
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Luxury Hotels",
              desc: "No five-star resorts — you’ll stay in cozy, local homestays.",
              icon: <FaHome className="text-red-500 text-3xl" />,
              images: [
                "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
              ],
            },
            {
              title: "Private Cabs Always",
              desc: "Travel like a local — shared rides, buses, and real-life experiences.",
              icon: <FaBus className="text-red-500 text-3xl" />,
              images: [
                "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
                "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d",
              ],
            },
            {
              title: "Overcrowded Spots",
              desc: "We avoid staged, touristy destinations. Peaceful and real only.",
              icon: <FaMountain className="text-red-500 text-3xl" />,
              images: [
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
                "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
              ],
            },
          ].map((item, i) => (
            <div
              key={i}
              onClick={() => openPopup(item.title, item.images)}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What to Expect */}
      <section>
        <h2 className="text-2xl font-bold text-green-600 mb-6 text-center">
          ✅ What to Expect
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Local Experience",
              desc: "Dive into local life, traditions, and communities.",
              icon: <FaPeopleArrows className="text-green-500 text-3xl" />,
              images: [
                "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
                "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
              ],
            },
            {
              title: "Authentic Food",
              desc: "Taste traditional dishes made with fresh, local ingredients.",
              icon: <FaUtensils className="text-green-500 text-3xl" />,
              images: [
                "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
                "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
              ],
            },
            {
              title: "Nature & Adventure",
              desc: "Hike mountains, explore waterfalls, and reconnect with nature.",
              icon: <FaTree className="text-green-500 text-3xl" />,
              images: [
                "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
              ],
            },
            {
              title: "Bonfire Nights",
              desc: "Share stories under the stars with locals and fellow travelers.",
              icon: <FaFire className="text-green-500 text-3xl" />,
              images: [
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
                "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
              ],
            },
          ].map((item, i) => (
            <div
              key={i}
              onClick={() => openPopup(item.title, item.images)}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          A Journey Like No Other
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We promise you a travel experience that slows down time, connects you
          with nature, and leaves you with{" "}
          <span className="font-semibold text-blue-600">unforgettable memories</span>.
          Not luxury. Not commercialized. Just the{" "}
          <span className="font-semibold text-green-600">
            real India, raw and beautiful
          </span>
          .
        </p>
      </div>

      {/* Custom Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
              onClick={closePopup}
            >
              ✖
            </button>
            <h2 className="text-xl font-bold mb-4">{popupTitle}</h2>
            <Slider {...popupSliderSettings}>
              {popupImages.map((src, i) => (
                <div key={i} className="w-full aspect-video">
                  <img
                    src={src}
                    alt={`Slide ${i + 1}`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
}

