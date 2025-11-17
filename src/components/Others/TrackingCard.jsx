import trackingImg from "../../assets/live-tracking.png";
import deliverImg from "../../assets/safe-delivery.png";

const TrackingCard = () => {
  const cards = [
    {
      icon: trackingImg,
      title: "Express  & Standard Delivery",
      desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      icon: deliverImg,
      title: "Nationwide Delivery",
      desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
      icon: deliverImg,
      title: "Fulfillment Solution",
      desc: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
  ];
  return (
    <div className="p-5 md:p-20 border-y-2 border-dashed mt-10">
      <div className="grid grid-cols-1 gap-6">
        {cards.map((card, index) => (
          <div className="hero bg-base-100 rounded-2xl">
            <div
              key={index}
              className="hero-content flex-col lg:flex-row gap-5 "
            >
              <img src={card.icon} className="max-w-sm max-h-sm rounded-lg" />
              <div>
                <h1 className="text-2xl font-bold"> {card.title} </h1>
                <p className="py-6">{card.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackingCard;
