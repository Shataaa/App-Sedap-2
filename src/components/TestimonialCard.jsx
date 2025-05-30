export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center text-center relative group overflow-hidden transition-transform duration-300 hover:scale-105">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-green-500 group-hover:border-green-900 transition"
      />
      <p className="text-gray-500 mb-4">{testimonial.text}</p>
      <div className="font-poppins-extrabold text-green-600 group-hover:text-green-900 transition">
        {testimonial.name}
      </div>
      <div className="text-xs text-gray-400">Customer</div>
      {/* Hover Effect */}
      <div className="absolute inset-0 bg-green-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}