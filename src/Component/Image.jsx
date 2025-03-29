import React from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import "./index.css";
import "./styles.css";

import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

export default function Image() {
  return (
    <div className="bg-blue-700 p-5">
      <p className="text-2xl p-4 text-center text-white">Chi siamo...</p>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <h1 className="flex flex-col p-2">Chiesa ADI Licata</h1>
            <p className="text-white text-base p-2">
              Benvenuti nel nostro sito, qui potrai ascoltare culti e cercare
              cantici e molto altro.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <h1 className="flex flex-col p-2">Da dove nasce tutto</h1>
            <p className="text-white text-base p-2">
              Benvenuti nel nostro sito, qui potrai ascoltare culti e cercare
              cantici e molto altro.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <h1 className="flex flex-col p-2">Il nostro compito</h1>
            <p className="text-white text-base p-2">
              Benvenuti nel nostro sito, qui potrai ascoltare culti e cercare
              cantici e molto altro.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
