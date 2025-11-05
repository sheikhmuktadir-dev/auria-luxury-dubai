import Section from "../../Components/Section/Section";
import Style from "./home.module.css";
import Container from "../../Components/Container/Container";
import Button from "../../Components/Button/Button";
import NotFound from "../../Components/Message/NotFound";

export default function HomeAbout({ about }) {
  if (!about) return <NotFound>Opps No About Data Found</NotFound>;

  const {
    image = null,
    heading = "Your Trusted Partner",
    description = "Connecting you to Dubai’s finest homes with expert.",
    button = {},
  } = about || {};

  return (
    <Section padding="sectionPaddingLarge">
      <Container>
        <div className={Style.aboutInner}>
          <div className={Style.aboutImageArea}>
            <img
              src={image}
              alt="about image"
              loading="lazy"
              className={Style.aboutImage}
            />
          </div>

          <div className={Style.aboutContent}>
            <div className={Style.aboutContentTop}>
              <h3 className="textWhite">{heading}</h3>
              <p className="textWhite">{description}</p>
            </div>

            <div className={Style.btnArea}>
              <Button url={button.link}>{button.label || "Read More"}</Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
