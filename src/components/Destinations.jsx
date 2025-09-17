
import { Link } from "react-router-dom";

export default function Destinations() {
  const destinations = [
    {
      id: 1,
      name: "Sirmour / Himanchal Pradesh",
      description: [
        "hidden trails.",
        "Flaours of Indian Himalayas.",
        "Rich cultural heritage and local traditions.",
        "Authntic native food",
      ],
      image:
        "https://indiatouristspots.weebly.com/uploads/7/9/4/2/79421790/churdhar-sirmaur-himachal-pradesh_orig.jpg",
      budget: "₹15,000 / person / 8 Days",
    },
    {
      id: 2,
      name: "Goa Beach Escape",
      description: [
        "Enjoy 5 days of fun, sun, and relaxation.",
        "Relax at Goa’s best beaches.",
        "Nightlife and beach parties included.",
      ],
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
      budget: "₹10,000 / person",
    },
    {
      id: 3,
      name: "Rajasthan Royal Tour",
      description: [
        "Explore palaces, forts, and deserts.",
        "Experience Rajasthani culture and food.",
        "Camel rides and desert camping included.",
      ],
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
      budget: "₹12,500 / person",
    },
    {
      id: 4,
      name: "Himachal Getaway",
      description: [
        "A refreshing 6-day journey in Himachal.",
        "Scenic mountain views and valleys.",
        "Perfect for relaxation and adventure.",
      ],
      image:
        "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
      budget: "₹13,000 / person",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Unseen Destinations
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {destinations.map((dest) => (
          <div
            key={dest.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{dest.name}</h2>

              {/* Description as bullet points */}
              <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-4">
                {dest.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              {/* Budget Info */}
              <p className="text-green-700 font-bold mb-6 text-lg">
                Budget: {dest.budget}
              </p>

              <div className="flex justify-between">
                {/* Book Button */}
               <Link to="/booking">
  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
    Book
  </button>
</Link>

                {/* View Details */}
                <Link to={`/tour/${dest.id}`}>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
