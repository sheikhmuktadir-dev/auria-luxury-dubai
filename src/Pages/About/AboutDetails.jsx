import Style from "./about.module.css";
import Section from "../../Components/Section/Section";
import Container from "../../Components/Container/Container";

export default function AboutDetails({ details }) {
  const { heading = "", paragraphs = [] } = details;

  if (!paragraphs?.length) return null;

  return (
    <Section>
      <div className={Style.aboutDetails}>
        <Container>
          <div className={Style.aboutDetailsGrid}>
            {heading && <h3>{heading}</h3>}
            <div className={Style.aboutDetailsGridPara}>
              {paragraphs.map((para, index) => {
                return <p key={para || index}>{para}</p>;
              })}
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}
