export default function HeroSection({ title, subtitle, description, image }) {
  return (
    <div className="w-full bg-[#6fc16f] py-0 mb-0">
      <div
        className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch rounded-none overflow-hidden"
        style={{ minHeight: 400 }}
      >
        <div className="h-[400px] md:h-[400px] w-full flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full"
            style={{ objectPosition: "center" }}
          />
        </div>
        <div className="flex flex-col justify-center px-12 py-12 bg-[#6fc16f] relative min-h-[400px]">
          <div className="text-sm font-poppins-extrabold text-white mb-2">
            {subtitle}
          </div>
          <h2 className="text-4xl md:text-5xl font-poppins-extrabold text-white mb-4">
            {title}
          </h2>
          <p className="text-white/90 mb-6 font-poppins-extrabold max-w-md">
            {description}
          </p>
          <button className="bg-[#232d1b] text-white font-poppins-extrabold px-8 py-3 rounded shadow w-max hover:bg-white hover:text-[#6fc16f] transition">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}