import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
        <div>
            <SectionTitle heading={'order online'} subHeading={'From 11:00am to 10:00pm'}/>
        </div>
        <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="mySwiper text-white"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 ">Salad</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 ">pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 ">Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 ">Deserts</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 ">Salad</h3>
        </SwiperSlide>
      </Swiper>
    </div>
    </section>
  );
};

export default Category;
