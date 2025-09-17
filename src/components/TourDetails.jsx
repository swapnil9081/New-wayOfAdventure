// 
// import { useParams, Link } from "react-router-dom";

// const tours = [
//   {
//     id: 4,
//     name: "Himachal",
//     duration: "6 days",
//     description:
//       "Explore majestic forts, palaces, and the desert—soaked in history, culture, and royal heritage.",
//     locations: [
//       { name: "chrdhar", image: "" },
//       {
//         name: "chopal",
//         image:
//           "https://upload.wikimedia.org/wikipedia/commons/1/10/Hawa_Mahal_2011.jpg",
//       },
//       {
//         name: "sarayn",
//         image:
//           "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
//       },
//       { name: "jhokhad", image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg" },
//       { name: "sarayn", image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg" },
//       { name: "sarayn", image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg" },
//       { name: "sarayn", image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg" },
//     ],
//   },
// ];

// export default function TourDetails() {
//   const { id } = useParams();
//   const tour = tours.find((t) => t.id === parseInt(id));

//   if (!tour) {
//     return (
//       <div className="p-6 text-center">
//         <h2 className="text-2xl font-bold">Tour not found</h2>
//         <Link to="/" className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded">
//           Back to Home
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6">
//       <h2 className="text-3xl font-bold text-center">{tour.name}</h2>
//       <p className="text-center text-gray-600">Duration: {tour.duration}</p>

//       {/* Timeline Container with Horizontal Scroll */}
//       <div className="mt-6 flex overflow-x-auto space-x-8 p-4 border rounded-xl bg-white shadow-sm scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
//         {tour.locations.map((loc, index) => (
//           <div key={index} className="flex flex-col items-center min-w-[120px]">
//             <div className="w-24 h-24 border-4 border-green-500 rounded-full flex items-center justify-center overflow-hidden">
//               {loc.image ? (
//                 <img
//                   src={loc.image}
//                   alt={loc.name}
//                   className="w-full h-full object-cover"
//                 />
//               ) : (
//                 <span className="text-gray-500">{loc.name}</span>
//               )}
//             </div>
//             <p className="mt-2 text-sm font-medium">{loc.name}</p>
//           </div>
//         ))}
//       </div>

//       {/* Tour description */}
//       <div className="mt-6 p-4 bg-gray-100 rounded-lg">
//         <h3 className="text-lg font-semibold mb-2">About this tour</h3>
//         <p>{tour.description}</p>
//       </div>

//       <div className="mt-4 text-center">
//         <Link
//           to="/"
//           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//         >
//           Back to Home
//         </Link>
//       </div>
//     </div>
//   );
// }

import { useParams, Link } from "react-router-dom";

const tours = [
  {
    id: 4,
    name: "Himachal",
    duration: "6 days",
    description:
      "Explore majestic forts, palaces, and the desert—soaked in history, culture, and royal heritage.",
    locations: [
      { name: "Churdhar", image: "" },
      {
        name: "Chopal",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/1/10/Hawa_Mahal_2011.jpg",
      },
      {
        name: "Sarayn",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
      },
      {
        name: "Jhokhad",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
      },
      {
        name: "Shimla",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
      },
      {
        name: "Manali",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
      },
    ],
  },
  {
    id: 1,
    name: "Himachal",
    duration: "6 days",
    description:
      "Explore majestic forts, palaces, and the desert—soaked in history, culture, and royal heritage.",
    locations: [
      { name: "Churdhar", image: "" },
      {
        name: "Chopal",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/1/10/Hawa_Mahal_2011.jpg",
      },
      {
        name: "Sarayn",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
      },
      {
        name: "Jhokhad",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
      },
      {
        name: "Shimla",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
      },
      {
        name: "Manali",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
      },
    ],
  },
];

export default function TourDetails() {
  const { id } = useParams();
  const tour = tours.find((t) => t.id === parseInt(id));

  if (!tour) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold">Tour not found</h2>
        <Link
          to="/"
          className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Tour Heading */}
      <h2 className="text-4xl font-extrabold text-center text-gray-800">
        {tour.name}
      </h2>
      <p className="text-center text-gray-600 mt-2 text-lg">
        Duration: <span className="font-medium">{tour.duration}</span>
      </p>

      {/* Locations Grid */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {tour.locations.map((loc, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
          >
            <div className="w-24 h-24 border-4 border-green-500 rounded-full flex items-center justify-center overflow-hidden">
              {loc.image ? (
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-500 text-xs text-center px-2">
                  {loc.name}
                </span>
              )}
            </div>
            <p className="mt-3 text-sm font-semibold text-gray-700">
              {loc.name}
            </p>
          </div>
        ))}
      </div>

      {/* Tour description */}
      <div className="mt-10 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">
          About this tour
        </h3>
        <p className="text-gray-700 leading-relaxed">{tour.description}</p>
      </div>

      {/* Back Button */}
      <div className="mt-6 text-center">
        <Link
          to="/"
          className="px-5 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
