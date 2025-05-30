import Icons2 from "./Icons2";

export default function Footer() {
  return (
    <footer className="w-full bg-[#3b3d3b] pt-20 pb-8 relative overflow-hidden text-white font-poppins-extrabold">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description */}
          <div>
            <div className="text-2xl font-bold text-green-400 mb-4">Sedap</div>
            <p className="text-gray-300 text-sm">
              Atiam rhoncus sit amet adip scing sed ipsum. Lorem ipsum dolor sit amet adipiscing sem neque.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <div className="font-bold mb-4">Contact</div>
            <ul className="text-gray-300 text-sm space-y-2">
              <li className="flex items-center space-x-2 hover:text-green-400 transition">
                <span>📞</span>
                <span>666 888 0000</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-green-400 transition">
                <span>✉️</span>
                <span>info@company.com</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-green-400 transition">
                <span>📍</span>
                <span>66 top brooklyn street, New York</span>
              </li>
            </ul>
          </div>

          {/* Links Section */}
          <div>
            <div className="font-bold mb-4">Links</div>
            <ul className="text-gray-300 text-sm space-y-2">
              <li className="hover:text-green-400 transition">Top Sellers</li>
              <li className="hover:text-green-400 transition">Shopping</li>
              <li className="hover:text-green-400 transition">About Store</li>
              <li className="hover:text-green-400 transition">Contact</li>
              <li className="hover:text-green-400 transition">Help</li>
            </ul>
          </div>

          {/* Explore Section */}
          <div>
            <div className="font-bold mb-4">Explore</div>
            <ul className="text-gray-300 text-sm space-y-2">
              <li className="hover:text-green-400 transition">New Products</li>
              <li className="hover:text-green-400 transition">My Account</li>
              <li className="hover:text-green-400 transition">Support</li>
              <li className="hover:text-green-400 transition">FAQs</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <div className="font-bold mb-4">Newsletter</div>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 rounded bg-white text-gray-400 placeholder-gray-400 focus:outline-none"
              />
              <button className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="border-t border-gray-600 pt-6 flex flex-col justify-between items-center">
          <Icons2/>
        </div>
        <div className="pt-6 flex flex-col justify-between items-center">
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            © Copyright 2025 by Sedap.com
          </p>
        </div>
      </div>
    </footer>
  );
}