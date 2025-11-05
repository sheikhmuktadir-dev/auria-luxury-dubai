import Style from "./home.module.css";
import Section from "../../Components/Section/Section";
import Container from "../../Components/Container/Container";
import LocationCard from "../../Components/Card/LocationCard";
import Slider from "../../Components/Slider/Slider";
import { SwiperSlide } from "swiper/react";
import NotFound from "../../Components/Message/NotFound";

export default function HomeLocation({ locationData }) {
  if (!locationData) return <NotFound>Opps No Location Found</NotFound>;

  const {
    locationsSubtitle = "Location",
    locationsTitle = "Find Your Neighborhoods",
    locationCard = [],
  } = locationData || {};

  if (!locationCard?.length) return <NotFound>Opps No Location Found</NotFound>;

  return (
    <Section padding="sectionPaddingLarge">
      <Container>
        <div className="headingFlex">
          <div className="headingArea">
            <h5>{locationsSubtitle}</h5>
            <h2>{locationsTitle}</h2>
          </div>
        </div>

        {/* location card desktop */}
        <div className={Style.locationFlexArea}>
          <LocationCard
            locationData={locationCard}
            locationImage="image"
            locationName="locationName"
          />
        </div>

        {/* location card mobile & tablet */}
        <div className={Style.locationFlexMobileArea}>
          <Slider duration={3000}>
            {locationCard.map((location, index) => (
              <SwiperSlide key={index}>
                <LocationCard
                  locationData={[location]}
                  locationImage="image"
                  locationName="locationName"
                />
              </SwiperSlide>
            ))}
          </Slider>
        </div>
      </Container>
    </Section>
  );
}
