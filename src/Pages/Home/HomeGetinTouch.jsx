import Style from "./home.module.css";
import Section from "../../Components/Section/Section";
import Container from "../../Components/Container/Container";
import Button from "../../Components/Button/Button";
import NotFound from "../../Components/Message/NotFound";

export default function HomeGetinTouch({ getinTouch }) {
  if (!getinTouch) return <NotFound> Oops Get In Touch Not Found</NotFound>;

  const {
    backgroundImage = null,
    heading = "Get in Touch",
    description = "Looking for your next home? Our experts are ready to assist you",
    buttonText = "Contact Us",
  } = getinTouch || {};

  return (
    <Section>
      <div className={Style.getInTouchInner}>
        <div className={Style.getInTouchBgImageArea}>
          <img
            src={backgroundImage}
            alt="get in touch image"
            loading="lazy"
            className={Style.getInTouchImage}
          />
        </div>

        <Container>
          <div className={Style.getInTouchContent}>
            <div className="headingFlex">
              <div className="headingArea">
                <h2 className="textWhite">{heading}</h2>
                <p className="textWhite">{description}</p>
              </div>
            </div>

            <div className={Style.btnArea}>
              <Button url="/contact">{buttonText}</Button>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}
