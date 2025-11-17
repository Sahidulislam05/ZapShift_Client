import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <div>
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        <div className="relative">
          <img src={bannerImg1} />

          <div
            className="
              absolute left-2 bottom-2  md:left-4 md:bottom-4 lg:left-23 lg:bottom-20 
              flex 
              gap-3
            "
          >
            <button className="btn bg-primary">Track Your Parcel</button>
            <button className="btn">Be A Rider</button>
          </div>
        </div>

        <div className="relative">
          <img src={bannerImg2} />
        </div>

        <div className="relative">
          <img src={bannerImg3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
