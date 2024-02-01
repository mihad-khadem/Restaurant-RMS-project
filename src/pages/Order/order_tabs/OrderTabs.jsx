import React from "react";
import OrderCard from "../order_card/OrderCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";

const OrderTabs = ({ item }) => {
  const itemsPerPage = 6; // Set the number of items per page
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  // Calculate the number of slides based on itemsPerPage
  const numSlides = Math.ceil(item.length / itemsPerPage);

  // Generate an array of slides with 6 items in each
  const slides = Array.from({ length: numSlides }, (_, index) => {
    const startIndex = index * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const slideItems = item.slice(startIndex, endIndex);

    return (
      <SwiperSlide key={index}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mb-20 gap-10">
          {slideItems.map((item) => (
            <OrderCard key={item._id} item={item}></OrderCard>
          ))}
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className="mt-10">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slides}
      </Swiper>
    </div>
  );
};

export default OrderTabs;
