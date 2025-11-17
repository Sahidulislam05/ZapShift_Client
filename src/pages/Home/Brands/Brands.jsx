import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazonImg from "../../../assets/brands/amazon.png";
import amazonImg2 from "../../../assets/brands/amazon_vector.png";
import casioImg from "../../../assets/brands/casio.png";
import moonstarImg from "../../../assets/brands/moonstar.png";
import randstadImg from "../../../assets/brands/randstad.png";
import starImg from "../../../assets/brands/star.png";
import star_peopleImg from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const brandLogos = [
  amazonImg,
  amazonImg2,
  casioImg,
  moonstarImg,
  randstadImg,
  starImg,
  star_peopleImg,
];
const Brands = () => {
  return (
    <div className="mb-10 md:mb-20">
      <h1 className="text-xl md:text-3xl font-bold text-center mb-10 md:mb-20 text-[#03373D]">
        We've helped thousands of sales teams
      </h1>
      <Swiper
        loop={true}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
      >
        {brandLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
