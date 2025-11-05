import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";

export default function Slider({ children, duration, totalSlide }) {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={20}
      navigation
      autoplay={{ delay: duration, disableOnInteraction: false }}
      speed={1200}
      loop={true}
      grabCursor={true}
      slidesPerGroup={1}
      breakpoints={{
        320: { slidesPerView: 1.1 },
        481: { slidesPerView: 1.5 },
        768: { slidesPerView: 2 },
        1280: { slidesPerView: totalSlide },
      }}
    >
      {children}
    </Swiper>
  );
}
