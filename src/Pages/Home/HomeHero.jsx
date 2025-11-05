import Section from "../../Components/Section/Section";
import Style from "./home.module.css";
import Container from "../../Components/Container/Container";
import Search from "../../Components/Search/Search";
import NotFound from "../../Components/Message/NotFound";

export default function HomeHero({ heroData }) {
  if (!heroData) return <NotFound> Opps Data Not Found</NotFound>;

  const {
    heroImage = "/images/hero/hero.webp",
    heroTitle = "Welcome to Our Site",
    heroPara = "Discover our latest listings and opportunities.",
  } = heroData || {};

  return (
    <Section>
      {/* hero inner */}
      <div className={Style.heroInner}>
        {/* hero content */}

        <Container>
          <div className={Style.heroContent}>
            <div className={Style.heroHeadingArea}>
              <div className={Style.heroTitle}>{heroTitle}</div>
            </div>

            <div>
              <p>{heroPara}</p>
            </div>
          </div>
        </Container>

        {/* hero image */}
        <div className={Style.heroBgImage}>
          <img
            src={heroImage}
            alt="hero image"
            loading="lazy"
            className={Style.heroImage}
          />
        </div>

        {/* hero search */}
        <div className={Style.heroSearch}>
          <Search />
        </div>
      </div>
    </Section>
  );
}
