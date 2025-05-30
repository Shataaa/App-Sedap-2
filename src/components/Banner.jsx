export default function Banner({ title, subtitle, buttonText, image, bgColor }) {
  return (
    <div
      className={`rounded-xl flex items-center p-8 min-h-[220px] relative overflow-hidden `}
      style={{ backgroundColor: bgColor || "#f7f7f7" }}
    >
      <div className="flex-1">
        <div className="text-green-500 font-poppins-extrabold text-sm uppercase mb-2">
          {title}
        </div>
        <h2 className="text-3xl font-poppins-extrabold text-gray-800 mb-4">
          {subtitle}
        </h2>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded transition">
          {buttonText}
        </button>
      </div>
      <div className="flex-1 flex justify-end">
        <img
          src={image}
          alt={title}
          className="h-32 object-contain"
          style={{ maxWidth: "160px" }}
        />
      </div>
    </div>
  );
}