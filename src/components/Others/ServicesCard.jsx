import serviceImg from "../../assets/service.png";

const ServicesCard = () => {
  const cards = [
    {
      icon: serviceImg,
      title: "Express  & Standard Delivery",
      desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      icon: serviceImg,
      title: "Nationwide Delivery",
      desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
      icon: serviceImg,
      title: "Fulfillment Solution",
      desc: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
      icon: serviceImg,
      title: "Cash on Home Delivery",
      desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      icon: serviceImg,
      title: "Corporate Service / Contract In Logistics",
      desc: "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
      icon: serviceImg,
      title: "Parcel Return",
      desc: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
  ];
  return (
    <div>
      <div className="hero bg-secondary my-10 md:my-16 rounded-2xl ">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-4xl text-white font-bold mt-10 md:mt-20 mb-4">
              Our Services
            </h1>
            <p className="text-white">
              Enjoy fast, reliable parcel delivery with real-time tracking and
              zero hassle. From personal packages to <br /> business shipments —
              we deliver on time, every time.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:p-10 lg:p-20 ">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="card bg-base-100 shadow-xl hover:bg-primary rounded-2xl"
                >
                  <figure className="px-10 pt-10">
                    <img src={card.icon} alt="" />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold text-2xl my-4">
                      {card.title}
                    </h2>
                    <p className="font-semibold text-gray-500">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
