import { FaUndo, FaTruck, FaMapMarkerAlt } from "react-icons/fa";

export default function FeaturesSection() {
  const features = [
    {
      icon: <FaUndo className="text-green-500 text-3xl" />,
      title: "Return Policy",
      description: "Money back guarantee",
    },
    {
      icon: <FaTruck className="text-green-500 text-3xl" />,
      title: "Free Shipping",
      description: "On all orders over $35.00",
    },
    {
      icon: <FaMapMarkerAlt className="text-green-500 text-3xl" />,
      title: "Store Locator",
      description: "Find your nearest store",
    },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg py-8 px-4 max-w-6xl mx-auto -mt-16 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 text-center md:text-left"
          >
            <div>{feature.icon}</div>
            <div>
              <h3 className="text-lg font-poppins-extrabold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}