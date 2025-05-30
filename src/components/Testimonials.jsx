import TestimonialCard from "./TestimonialCard";

export default function Testimonials({ testimonials }) {
  return (
    <div className="w-full bg-[#f7f7f7] py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="text-green-500 font-poppins-extrabold mb-2">
            Our Testimonials
          </div>
          <h2 className="text-4xl font-poppins-extrabold mb-2">
            What People Say?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}