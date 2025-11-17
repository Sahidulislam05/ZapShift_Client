import { FaArrowRight } from "react-icons/fa";

export default function MerchantBanner() {
  return (
    <section className="w-full py-10 mt-10 md:mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-3xl bg-[#023A3D] text-white p-10 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          {/* Glow / Light Effect Top */}
          <div className="absolute top-0 left-0 w-full h-40 bg-linear-to-r from-transparent via-white/20 to-transparent blur-2xl opacity-40 pointer-events-none"></div>

          {/* Left Content */}
          <div className="z-10 max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              Merchant and Customer Satisfaction <br /> is Our First Priority
            </h2>

            <p className="text-gray-200 mt-4 leading-relaxed">
              We offer the lowest delivery charge with the highest value along
              with 100% safety of your product. Our courier service delivers
              your parcels to every corner of Bangladesh right on time.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-4">
              <button className="bg-lime-300 hover:bg-lime-400 text-gray-800 font-semibold px-6 py-3 rounded-full shadow transition">
                Become a Merchant
              </button>

              <button className="border border-lime-300 text-lime-300 hover:bg-lime-300 hover:text-gray-800 font-semibold px-6 py-3 rounded-full shadow transition">
                Earn with ZapShift Courier
              </button>
            </div>
          </div>

          {/* Right Illustration Placeholder */}
          <div className="z-10 mt-8 md:mt-0 flex justify-center md:justify-end w-full md:w-auto">
            <svg
              width="260"
              height="200"
              viewBox="0 0 260 200"
              fill="none"
              stroke="#94E2D5"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <rect x="30" y="100" width="120" height="70" rx="8" />
              <rect x="90" y="50" width="120" height="70" rx="8" />
              <path d="M150 40 L150 25" />
              <circle cx="150" cy="20" r="5" />
              <path d="M70 170 C120 200 180 180 230 200" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
