import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const images = [
	"/img/ZycieOne.png",
	"/img/ZycieTwo.png",
	"/img/ZycieThree.png",
	"/img/ZycieFour.png",
	"/img/ZycieFive.png",
	"/img/ZycieSix.png"
];

export default function ImageSlider() {
	return (
		<Swiper
			modules={[EffectFade, Autoplay]}
			effect="fade"
			autoplay={{ delay: 5000, disableOnInteraction: false }}
			speed={1800} // Hace la transición más progresiva
			fadeEffect={{ crossFade: true }} // Activa el fade orgánico
			loop={true}
			className="w-full h-full md:rounded-tr-[25px] md:rounded-br-[25px]"
		>
			{images.map((src, index) => (
				<SwiperSlide key={index}>
					<img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
				</SwiperSlide>
			))}
		</Swiper>
	);
}
