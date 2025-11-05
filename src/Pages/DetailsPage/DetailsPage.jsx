import { useParams } from "react-router-dom";
import { useContext } from "react";
import { FetchContext } from "../../Context/FetchContext";
import Section from "../../Components/Section/Section";
import Container from "../../Components/Container/Container";
import Style from "./details.module.css";
import DetailsImage from "./DetailsImage";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import DetailsContent from "./DetailsContent";
import DetailsAgent from "./DetailsAgent";
import Loading from "../../Components/Message/Loading";
import ErrorMessage from "../../Components/Message/ErrorMessage";
import NotFound from "../../Components/Message/NotFound";

export default function DetailsPage() {
  const { id } = useParams();

  const { fetchData, loading, error } = useContext(FetchContext);

  if (loading) return <Loading />;

  if (error) {
    return <ErrorMessage />;
  }

  if (!fetchData || Object.keys(fetchData).length === 0)
    return <NotFound>No data found</NotFound>;

  const property = fetchData.properties.propertyCard.find(
    (item) => item.propertyId === id
  );

  if (!property) return <NotFound>Opps Property Details Not Found!</NotFound>;

  return (
    <>
      <Section padding="sectionPaddingLarge">
        <Breadcrumb
          mainPage="Home"
          mainPageLink="/"
          parentPage="Properties"
          ParentPageLink="/properties"
          activePage={property.title}
        />
      </Section>

      <DetailsImage property={property} />

      <Section padding="sectionPaddingLarge">
        <Container>
          <div className={Style.detailsContentGrid}>
            <DetailsContent content={property} />
            <DetailsAgent agent={property} />
          </div>
        </Container>
      </Section>
    </>
  );
}
