import Style from "./home.module.css";
import Section from "../../Components/Section/Section";
import Container from "../../Components/Container/Container";
import TextButton from "../../Components/Button/TextButton";
import FeaturedCard from "../../Components/Card/FeaturedCard";
import Slider from "../../Components/Slider/Slider";
import { SwiperSlide } from "swiper/react";
import NotFound from "../../Components/Message/NotFound";

export default function HomeFeatureProperties({ featuredPropertyData }) {
  if (!featuredPropertyData)
    return <NotFound>Opps No Featured Property Found</NotFound>;

  const {
    propertiesfeaturedTitle = "Featured",
    propertiesfeaturedSubtitle = "Featured Properties",
    featureCta = "View All",
    propertyCard = [],
  } = featuredPropertyData || {};

  if (!propertyCard?.length)
    return <NotFound>Opps No Featured Property Found</NotFound>;

  // slice featured card
  const displayedFeaturedProperties = propertyCard.slice(0, 5);

  return (
    <Section>
      <div className={Style.featurePropertyInner}>
        <Container>
          <div className="headingFlex">
            <div className="headingArea">
              <h5>{propertiesfeaturedTitle}</h5>
              <h2>{propertiesfeaturedSubtitle}</h2>
            </div>
            <TextButton url="/properties">{featureCta}</TextButton>
          </div>

          <div className={Style.featuredPropertiesArea}>
            <Slider duration={4000} totalSlide={3}>
              {displayedFeaturedProperties.map((property, index) => (
                <SwiperSlide key={property.id || index}>
                  <FeaturedCard featuredData={[property]} />
                </SwiperSlide>
              ))}
            </Slider>
          </div>
        </Container>
      </div>
    </Section>
  );
}
