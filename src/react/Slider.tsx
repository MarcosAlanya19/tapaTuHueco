import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const videoData = [
	{
		src: "FunctionOne.mp4",
		text: "Registra una foto, indica la ubicación y describe el problema. ¡Así de fácil!",
	},
	{
		src: "FunctionTwo.mp4",
		text: "Documenta cualquier irregularidad que encuentres en tu ciudad y repórtala fácilmente.",
	},
	{
		src: "FunctionThree.mp4",
		text: "Sé testigo del impacto de tu acción y recibe notificaciones cuando se solucionen.",
	},
];

const Slider = () => {
	return (
		<div className="slider-container">
			<Swiper
				className="swiper-custom"
				slidesPerView={1}
				spaceBetween={10}
				grabCursor
				loop
				autoplay={{ delay: 20000, disableOnInteraction: false }}
				navigation={{ enabled: true }}
				pagination={{ clickable: true }}
				modules={[Navigation, Pagination, Autoplay]}
			>
				{videoData.map((video, index) => (
					<SwiperSlide key={index} >
						<div className="swiper-slide-custom">
						
						<div className="slide-text">{video.text}</div>
						<div className="video-container">
							<video autoPlay muted playsInline loop className="video">
								<source src={`/videos/${video.src}`} type="video/mp4" />
							</video>
						</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			
			<style jsx>{`
        .slider-container {
          position: relative;
        }

        .swiper-custom {
          width: 560px;
          height: 560px;
          box-shadow: none;
          position: relative;
        }

        .swiper-slide-custom {
          display: grid;
          grid-template-rows: auto 1fr;
          background: white;
          width: 480px;
          height: 480px;
          border-radius: 15px;
        }

        .slide-text {
          font-size: 18px;
          font-family: 'LeagueSpartan', sans-serif;
          font-weight: 300;
          text-align: center;
          padding: 16px;
        }

        .video-container {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          overflow: hidden;
          position: relative;
          width: 100%;
          height: 100%;
        }

        .video {
          position: absolute;
          bottom: -70px;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .swiper-button-prev,
        .swiper-button-next {
          font-size: 28px !important;
          width: 51px !important;
          height: 51px !important;
          color: #242f5f !important;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          opacity: 1 !important;
          transition: opacity 0.3s ease;
          display: flex !important;
        }

        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 28px !important;
        }

        .swiper-pagination-bullet {
          background-color: #242f5f !important;
          opacity: 1;
        }
        
        .swiper-slide {
	        display: grid;
	        align-items: center;
	        justify-items: center;
	        background-color: transparent;
        }

        .swiper-pagination-bullet-active {
          background-color: #e42521 !important;
        }

        .swiper-pagination {
          bottom: 10px !important;
        }

        @media (max-width: 580px) {
          .swiper-custom {
            width: 450px;
            height: 550px;
          }
	        
          .swiper-slide-custom {
            width: 355px;
            height: 455px;
          }
        }

        @media (max-width: 480px) {
          .swiper-button-prev::after,
          .swiper-button-next::after {
            display: none;
          }
	        
          .swiper-custom {
            width: 430px;
            height: 500px;
          }

          .swiper-slide-custom {
            width: 400px;
            height: 455px;
          }
        }

        @media (max-width: 450px) {
          .swiper-custom {
            width: 400px;
            height: 470px;
          }

          .swiper-slide-custom {
            width: 370px;
            height: 425px;
          }
        }

        @media (max-width: 420px) {
          .swiper-custom {
            width: 370px;
            height: 440px;
          }

          .swiper-slide-custom {
            width: 340px;
            height: 395px;
          }
        }
			`}</style>
		</div>
	);
};

export default Slider;
