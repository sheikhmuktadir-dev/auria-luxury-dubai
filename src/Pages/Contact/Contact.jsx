import Section from "../../Components/Section/Section";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import { useContext } from "react";
import { FetchContext } from "../../Context/FetchContext";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
import Loading from "../../Components/Message/Loading";
import ErrorMessage from "../../Components/Message/ErrorMessage";
import NotFound from "../../Components/Message/NotFound";

export default function Contact() {
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
        <Breadcrumb mainPage="Home" mainPageLink="/" activePage="Contact" />
      </Section>

      <ContactForm
        contactAddress={fetchData?.contact?.contactInfo || []}
        contactForm={fetchData?.contact?.form || {}}
      />

      <ContactMap map={fetchData?.contact?.map || {}} />
    </>
  );
}
