// src/pages/WhyUs.jsx
import { CheckCircleIcon, UsersIcon, StarIcon, GlobeAltIcon } from "@heroicons/react/24/solid";

export default function WhyUs() {
  const features = [
    {
      title: "Trusted by Travelers",
      description: "Thousands of happy customers have trusted us for safe and memorable trips.",
      icon: UsersIcon,
    },
    {
      title: "Affordable Packages",
      description: "We provide the best travel packages without compromising on quality.",
      icon: GlobeAltIcon,
    },
    {
      title: "Top Rated Service",
      description: "Rated 5-stars consistently by our travelers across multiple platforms.",
      icon: StarIcon,
    },
    {
      title: "Safety First",
      description: "Your safety is our top priority with verified partners and secure trips.",
      icon: CheckCircleIcon,
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Why Choose <span className="text-blue-600">TripWithFriends</span>?
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          We don’t just plan trips, we create experiences that last a lifetime. Here’s why travelers love us:
        </p>

        {/* Features Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
            >
              <feature.icon className="h-12 w-12 text-blue-600 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <a
            href="/trips"
            className="inline-block rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-transform"
          >
            Explore Our Trips
          </a>
        </div>
      </div>
    </div>
  );
}
