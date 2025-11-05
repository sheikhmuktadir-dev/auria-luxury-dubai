import Style from "./about.module.css";
import Section from "../../Components/Section/Section";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import AboutHeading from "./AboutHeading";
import AboutDetails from "./AboutDetails";
import { useContext } from "react";
import { FetchContext } from "../../Context/FetchContext";
import Loading from "../../Components/Message/Loading";
import ErrorMessage from "../../Components/Message/ErrorMessage";
import NotFound from "../../Components/Message/NotFound";
import Testimonial from "../../Components/Testimonial/Testimonial";

export default function About() {
  const { fetchData, loading, error } = useContext(FetchContext);

  if (loading) return <Loading />;

  if (error) {
    return <ErrorMessage />;
  }

  if (!fetchData || Object.keys(fetchData).length === 0)
    return <NotFound>No data found</NotFound>;

  return (
    <>
      <Section padding="sectionPaddingTop">
        <Breadcrumb mainPage="Home" mainPageLink="/" activePage="About Us" />
      </Section>

      <AboutHeading heading={fetchData?.about?.aboutHeading || {}} />

      <div className={Style.aboutBgImage}></div>

      <AboutDetails details={fetchData?.about?.aboutDetails || {}} />
      <Testimonial />
    </>
  );
}
