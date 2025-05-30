export default function InstagramSection({ images }) {
  return (
    <div className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-green-500 font-poppins-extrabold mb-2">
            We're On Instagram
          </div>
          <h2 className="text-4xl font-poppins-extrabold mb-2">
            Shop on Instagram
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-xl"
            >
              <img
                src={img}
                alt=""
                className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <div className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl">
                  +
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}