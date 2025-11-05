import Section from "../../Components/Section/Section";
import Style from "./home.module.css";
import Container from "../../Components/Container/Container";
import { GoHome } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import NotFound from "../../Components/Message/NotFound";

const iconMap = {
  GoHome: <GoHome />,
  FiSearch: <FiSearch />,
  VscWorkspaceTrusted: <VscWorkspaceTrusted />,
};

export default function HomeChooseUs({ whyus }) {
  const { heading = {}, cards = [] } = whyus || {};

  if (!whyus) return <NotFound> Oops Why Us Not Found</NotFound>;

  if (!cards?.length) return <NotFound> Oops Why Us Not Found</NotFound>;

  return (
    <Section>
      <div className={Style.featurePropertyInner}>
        <Container>
          <div className="headingFlex">
            <div className="headingArea">
              <h5>{heading.subTitle || "Why Us"}</h5>
              <h2>{heading.title || "Dubai’s Trusted Experts"}</h2>
            </div>
          </div>

          <div className={Style.whyChooseBoxArea}>
            {cards.map((item, index) => {
              return (
                <div className={Style.whyChooseBox} key={item.title || index}>
                  {item.icon && (
                    <div className={Style.whyChooseBoxIcon}>
                      {iconMap[item.icon]}
                    </div>
                  )}
                  {item.title && <h4>{item.title}</h4>}
                  {item.description && <p>{item.description}</p>}
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </Section>
  );
}
