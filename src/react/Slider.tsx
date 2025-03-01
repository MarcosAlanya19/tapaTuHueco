import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Autoplay, Navigation, Pagination} from "swiper/modules";

const Slider = () => {
	return (
		<>
			<Swiper
				effect="flip"
				className="rounded-[15px] w-[555px] h-[530px] shadow-none"
				slidesPerView={1}
				spaceBetween={10}
				grabCursor
				loop={true}
				autoplay={{ delay: 15000, disableOnInteraction: false }}
				navigation={true}
				pagination={{ clickable: true }}
				modules={[Navigation, Pagination, Autoplay]}
			>
				{["white", "white", "white", "white"].map((color, index) => (
					<SwiperSlide key={index}>
						<div className={`w-[478px] h-[479px] flex items-center justify-center bg-${color} shadow-[0px_10px_33px_2px_#00000026] rounded-lg`}>
							{index + 1}
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			
			<style>
				{`
          .swiper-button-prev,
          .swiper-button-next {
            font-size: 28px !important;
            width: 51px !important;
            height: 51px !important;
          }

          .swiper-button-prev:after,
          .swiper-button-next:after {
            font-size: 28px !important;
          }
          
          .swiper-button-prev, .swiper-button-next {
            color: #242F5F !important;
          }
          
          .swiper-pagination-bullet {
            background-color: #242F5F !important;
            opacity: 1;
          }

          .swiper-pagination-bullet-active {
            background-color: #E42521 !important;
          }
          
          .swiper-pagination {
            bottom: -1px !important;
          }
          
          .swiper-slide {
            display: grid;
            justify-content: center;
            align-items: center;
          }
        `}
			</style>
		</>
	);
};

export default Slider;
