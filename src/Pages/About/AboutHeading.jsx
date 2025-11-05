import Style from "./about.module.css";
import Section from "../../Components/Section/Section";
import Container from "../../Components/Container/Container";

export default function AboutHeading({ heading }) {
  const { title = "About Auria Group", description = "" } = heading || {};
  return (
    <Section padding="sectionPaddingLarge">
      <Container>
        <div className={Style.aboutHeadingTop}>
          {title && <h2>{title}</h2>}

          {description && <p>{description}</p>}
        </div>
      </Container>
    </Section>
  );
}
