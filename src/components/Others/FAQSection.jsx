import { FaArrowRight } from "react-icons/fa";

export default function FAQSection() {
  return (
    <section className="w-full py-16 mt-10 md:mt-20">
      <div className="max-w-3xl mx-auto text-center px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800">
          Frequently Asked Question (FAQ)
        </h2>
        <p className="text-gray-600 mt-2">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>

        {/* FAQ Items */}
        <div className="mt-10 space-y-3">
          {/* Active (opened) item */}
          <div className="collapse collapse-arrow bg-white hover:bg-[#E8F8F1] rounded-xl">
            <input type="checkbox" />
            <div className="collapse-title font-semibold text-gray-800">
              How does this posture corrector work?
            </div>
            <div className="collapse-content text-gray-600">
              <p>
                A posture corrector works by providing support and gentle
                alignment to your shoulders, back, and spine, encouraging you to
                maintain proper posture throughout the day.
              </p>
            </div>
          </div>

          {/* Other items */}
          <div className="collapse collapse-arrow bg-white rounded-xl border border-gray-200">
            <input type="checkbox" />
            <div className="collapse-title font-semibold text-gray-700">
              Is it suitable for all ages and body types?
            </div>
            <div className="collapse-content text-gray-600">
              <p>Yes, it fits most body types and ages comfortably.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-white rounded-xl border border-gray-200">
            <input type="checkbox" />
            <div className="collapse-title font-semibold text-gray-700">
              Does it really help with back pain and posture improvement?
            </div>
            <div className="collapse-content text-gray-600">
              <p>Yes, many users report improvement with consistent use.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-white rounded-xl border border-gray-200">
            <input type="checkbox" />
            <div className="collapse-title font-semibold text-gray-700">
              Does it have smart features like vibration alerts?
            </div>
            <div className="collapse-content text-gray-600">
              <p>
                Some models include vibration reminders to maintain posture.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-white rounded-xl border border-gray-200">
            <input type="checkbox" />
            <div className="collapse-title font-semibold text-gray-700">
              How will I be notified when the product is back in stock?
            </div>
            <div className="collapse-content text-gray-600">
              <p>You can sign up for restock notifications via email.</p>
            </div>
          </div>
        </div>

        {/* Button */}
        <button className="mt-10 px-8 py-3 rounded-full bg-lime-300 hover:bg-lime-400 text-gray-800 font-semibold shadow flex items-center gap-2 mx-auto">
          See More FAQ’s
          <FaArrowRight className="text-gray-800" />
        </button>
      </div>
    </section>
  );
}
