import Style from "./home.module.css";
import Section from "../../Components/Section/Section";
import Container from "../../Components/Container/Container";
import TextButton from "../../Components/Button/TextButton";
import PropertiesCard from "../../Components/Card/PropertiesCard";
import Slider from "../../Components/Slider/Slider";
import { SwiperSlide } from "swiper/react";
import NotFound from "../../Components/Message/NotFound";

export default function HomeLatestProperties({ latestPropertyData }) {
  if (!latestPropertyData)
    return <NotFound> Opps No Latest Property Found</NotFound>;

  const {
    propertiesTitle = "",
    propertiesSubtitle = "",
    propertyCard = [],
    latestCta = "View All",
  } = latestPropertyData || {};

  if (!propertyCard?.length)
    return <NotFound> Opps No Latest Property Found</NotFound>;

  const displayedLatestProperties = propertyCard.slice(6, 10);

  return (
    <Section padding="sectionPaddingBottom">
      <Container>
        <div className="headingFlex">
          <div className="headingArea">
            <h5>{propertiesTitle}</h5>
            <h2>{propertiesSubtitle}</h2>
          </div>
          <TextButton url="/properties">{latestCta}</TextButton>
        </div>

        <div className={Style.latestPropertiesArea}>
          <Slider duration={5000} totalSlide={3}>
            {displayedLatestProperties.map((property, index) => (
              <SwiperSlide key={property.id || index}>
                <PropertiesCard propertyMainData={[property]} />
              </SwiperSlide>
            ))}
          </Slider>
        </div>
      </Container>
    </Section>
  );
}
