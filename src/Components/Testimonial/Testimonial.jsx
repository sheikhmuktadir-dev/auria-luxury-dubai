import NotFound from "../../Components/Message/NotFound";
import Style from "./testimonial.module.css";
import { FaRegStar } from "react-icons/fa6";
import { RiDoubleQuotesL } from "react-icons/ri";
import Slider from "../../Components/Slider/Slider";
import { SwiperSlide } from "swiper/react";
import { useContext } from "react";
import Loading from "../../Components/Message/Loading";
import ErrorMessage from "../../Components/Message/ErrorMessage";
import { FetchContext } from "../../Context/FetchContext";
import Section from "../../Components/Section/Section";
import Container from "../../Components/Container/Container";

export default function Testimonial() {
  const { fetchData, loading, error } = useContext(FetchContext);

  if (loading) return <Loading />;

  if (error) {
    return <ErrorMessage />;
  }

  if (!fetchData || Object.keys(fetchData).length === 0)
    return <NotFound> No data found</NotFound>;

  if (!fetchData?.testimonials)
    return <NotFound>Oops Testimonial Not Found</NotFound>;

  return (
    <Section padding="sectionPaddingLarge">
      <Container>
        <Slider duration={4000} totalSlide={3}>
          {fetchData?.testimonials.map((testimonials, index) => (
            <SwiperSlide key={testimonials.id || index}>
              <div
                key={testimonials.id || index}
                className={Style.testimonialCard}
              >
                <p>{testimonials.quote}</p>
                <div className={Style.testimonialIcon}>
                  <RiDoubleQuotesL />
                </div>
                <h5 className={Style.testimonialCardFlex}>
                  <span>{testimonials.name}</span>
                  <span>/</span>
                  <span>{testimonials.role}</span>
                </h5>
                <div className={Style.testimonialCardStar}>
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </Container>
    </Section>
  );
}
