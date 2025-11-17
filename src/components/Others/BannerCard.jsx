import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";

const BannerCard = () => {
  const cards = [
    {
      icon: <CiDeliveryTruck className="text-4xl text-primary" />,
      title: "Booking Pick & Drop",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <CiDeliveryTruck className="text-4xl text-primary" />,
      title: "Cash On Delivery",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <CiDeliveryTruck className="text-4xl text-primary" />,
      title: "Delivery Hub",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <CiDeliveryTruck className="text-4xl text-primary" />,
      title: "Booking SME & Corporate",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];
  return (
    <div className=" p-5 md:p-10 lg:p-20">
      <div className="mt-2.5 md:mt-5 mb-4 md:mb-8">
        <h2 className="text-3xl font-bold ">How it Works</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-xl p-6 text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="flex justify-center mb-4">{card.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-500">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerCard;
