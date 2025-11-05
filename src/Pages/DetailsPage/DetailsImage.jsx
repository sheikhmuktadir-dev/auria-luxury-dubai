import Style from "./details.module.css";
import Section from "../../Components/Section/Section";
import Slider from "../../Components/Slider/Slider";
import { SwiperSlide } from "swiper/react";

export default function DetailsImage({ property }) {
  return (
    <>
      <Section>
        <div className={Style.detailsImageGrid}>
          <Slider duration={5000} totalSlide={2}>
            {property?.images?.map((detailsImage, index) => {
              return (
                <SwiperSlide key={index}>
                  {detailsImage?.name && (
                    <img
                      src={detailsImage.name}
                      className={Style.detailsImage}
                      alt={detailsImage.alt}
                    />
                  )}
                </SwiperSlide>
              );
            })}
          </Slider>
        </div>
      </Section>
    </>
  );
}
