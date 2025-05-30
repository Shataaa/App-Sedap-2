export default function Statistics({ stats }) {
  return (
    <div
      className="w-full py-12 mt-12"
      style={{
        background: "rgba(44, 62, 39, 0.85)",
        backgroundImage:
          "linear-gradient(rgba(44,62,39,0.85),rgba(44,62,39,0.85)), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <div className="text-4xl font-poppins-extrabold mb-2">{stat.value}</div>
            <div className="text-green-200 font-poppins-extrabold">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}