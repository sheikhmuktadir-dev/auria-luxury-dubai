import Section from "../../Components/Section/Section";
import Style from "./contact.module.css";

export default function ContactMap({ map }) {
  return (
    <Section>
      <iframe
        title="Google Map"
        src={map?.src || ""}
        width="100%"
        className={Style.contactMap}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Section>
  );
}
