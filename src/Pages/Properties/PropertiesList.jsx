import Section from "../../Components/Section/Section";
import Style from "./properties.module.css";
import Container from "../../Components/Container/Container";
import PropertiesCard from "../../Components/Card/PropertiesCard";
import { CgMenuGridR } from "react-icons/cg";
import { TbMenu } from "react-icons/tb";
import DarkButton from "../../Components/Button/DarkButton";

export default function PropertiesList({
  gridType,
  setGridType,
  searchResult,
  visibleProperties,
  visibleCount,
  moreBtnclick,
}) {
  return (
    <Section padding="sectionPaddingLarge">
      <Container>
        {/* grid toggle */}
        <div className={Style.gridTypeArea}>
          <button
            className={`${Style.gridBtn} ${
              gridType === "3Column" ? Style.gridBtnActive : ""
            }`}
            onClick={() => setGridType("3Column")}
          >
            <CgMenuGridR />
          </button>
          <button
            className={`${Style.gridBtn} ${
              gridType === "1Column" ? Style.gridBtnActive : ""
            }`}
            onClick={() => setGridType("1Column")}
          >
            <TbMenu />
          </button>

          <div className={Style.resultPropertyCount}>
            <span> {searchResult.length}</span>
            <span>{searchResult.length === 1 ? "Property" : "Properties"}</span>
            <span>Found</span>
          </div>
        </div>

        {/* property card */}
        <div
          className={`${Style.propertyGrid} ${
            gridType === "3Column"
              ? Style.property3Column
              : Style.property1Column
          }`}
        >
          {visibleProperties.map((list, index) => {
            return (
              <PropertiesCard
                cardType={gridType === "1Column" ? "fullGrid" : undefined}
                propertyMainData={[list]}
                key={index}
              />
            );
          })}
        </div>

        {/* more button */}
        {visibleCount < searchResult.length ? (
          <div className={Style.loadMoreArea}>
            <DarkButton click={moreBtnclick}>More Properties</DarkButton>
          </div>
        ) : (
          <p className={Style.endMessage}>You reached the end</p>
        )}
      </Container>
    </Section>
  );
}
