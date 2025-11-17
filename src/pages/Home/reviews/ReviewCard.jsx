import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { userName, review: testimonial, user_photoURL } = review;
  return (
    <div>
      <div className="max-w-md h-80 bg-base-100 p-3 md:p-6 rounded-xl shadow-sm border border-gray-200">
        {/* Quote Icon */}
        <div className="text-primary text-3xl mb-3">
          <FaQuoteLeft />
        </div>

        {/* Quote Text */}
        <p className=" leading-relaxed">{testimonial}</p>

        {/* Divider */}
        <div className="my-4 border-t border-dashed border-gray-300"></div>

        {/* Author Section */}
        <div className="flex items-center gap-3">
          <div>
            <img
              className="w-10 h-10 rounded-full"
              src={user_photoURL}
              alt=""
            />
          </div>

          <div>
            <h3 className="font-semibold text-teal-800">{userName}</h3>
            <p className="text-sm text-gray-500">Senior Product Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
