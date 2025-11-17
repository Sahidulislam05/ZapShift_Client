import React, { useState } from "react";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("story");

  const tabContent = {
    story: (
      <>
        <p>
          We started with a simple promise — to make parcel delivery fast,
          reliable, and stress-free. Over the years, our commitment to real-time
          tracking, efficient logistics, and customer-first service has made us
          a trusted partner for thousands.
        </p>
        <p>
          Whether it’s a personal gift or a time-sensitive business delivery, we
          ensure it reaches its destination — on time, every time.
        </p>
      </>
    ),

    mission: (
      <>
        <p>
          Our mission is to redefine parcel delivery with cutting-edge
          logistics, real-time tracking, and a customer-first approach.
        </p>
        <p>
          We aim to create a seamless and reliable experience for both
          individuals and businesses.
        </p>
      </>
    ),

    success: (
      <>
        <p>
          Over the years, we’ve delivered millions of packages with remarkable
          success rates.
        </p>
        <p>
          Our reliability, transparency, and efficiency have helped us gain the
          trust of thousands of customers.
        </p>
      </>
    ),

    team: (
      <>
        <p>
          Our team consists of skilled logistics experts, tech innovators, and
          dedicated support staff.
        </p>
        <p>
          Together, we work to ensure that every delivery is handled with care,
          precision, and professionalism.
        </p>
      </>
    ),
  };

  return (
    <div className="p-5 md:p-0">
      <div className="bg-white shadow-md rounded-xl">
        <div className="p-10 md:p-30">
          {/* Header */}
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            About Us
          </h1>

          <p className="mt-2 text-sm text-slate-600 ">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal <br /> packages to business shipments —
            we deliver on time, every time.
          </p>

          <div className="divider mt-6"></div>

          {/* Tabs */}
          <div role="tablist" className="tabs tabs-bordered">
            <button
              role="tab"
              className={`tab ${
                activeTab === "story"
                  ? "tab-active text-green-700 font-semibold"
                  : ""
              }`}
              onClick={() => setActiveTab("story")}
            >
              Story
            </button>

            <button
              role="tab"
              className={`tab ${
                activeTab === "mission"
                  ? "tab-active text-green-700 font-semibold"
                  : ""
              }`}
              onClick={() => setActiveTab("mission")}
            >
              Mission
            </button>

            <button
              role="tab"
              className={`tab ${
                activeTab === "success"
                  ? "tab-active text-green-700 font-semibold"
                  : ""
              }`}
              onClick={() => setActiveTab("success")}
            >
              Success
            </button>

            <button
              role="tab"
              className={`tab ${
                activeTab === "team"
                  ? "tab-active text-green-700 font-semibold"
                  : ""
              }`}
              onClick={() => setActiveTab("team")}
            >
              Team & Others
            </button>
          </div>

          {/* Content */}
          <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
            {tabContent[activeTab]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
