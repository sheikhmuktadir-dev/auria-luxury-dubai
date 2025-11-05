import Section from "../../Components/Section/Section";
import Container from "../../Components/Container/Container";
import Style from "./contact.module.css";
import DarkButton from "../../Components/Button/DarkButton";

export default function ContactForm({ contactAddress = [], contactForm = {} }) {
  if (!contactAddress)
    return (
      <p className="notFound">
        Opps No Address Found
        <span className="not-found__loader">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </p>
    );
  if (!contactForm || Object.keys(contactForm).length === 0) {
    return (
      <p className="loading">
        No data found
        <span className="not-found__loader">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </p>
    );
  }

  return (
    <Section padding="sectionPaddingLarge">
      <Container>
        <div className={Style.contactLargeBox}>
          <div className={Style.contactLargeBoxAddress}>
            {contactAddress.map((contactItem, index) => {
              return (
                <div
                  className={Style.contactLargeBoxAddressFlex}
                  key={contactItem.type || index}
                >
                  <h5
                    className={`${Style.contactLargeBoxAddressArea} textWhite`}
                  >
                    <span> {contactItem?.type}</span>
                  </h5>

                  {contactItem?.link ? (
                    <a
                      href={
                        contactItem?.type === "Call Us"
                          ? `tel:${contactItem?.link}`
                          : `mailto:${contactItem.link}`
                      }
                      className="textWhite"
                    >
                      {contactItem?.details}
                    </a>
                  ) : (
                    <p className="textWhite">{contactItem?.details}</p>
                  )}
                </div>
              );
            })}
          </div>
          <form className={Style.contactLargeBoxForm}>
            <h3>{contactForm.title || "Get In Touch"}</h3>
            <div className={Style.contactLargeBoxFormGrid}>
              {contactForm?.fields?.map((field, index) => {
                return (
                  <div
                    className={Style.contactLargeBoxFormArea}
                    key={field.label || index}
                  >
                    <label htmlFor="" className={Style.formLabel}>
                      {field?.label}
                    </label>
                    {field.type === "text" ? (
                      <input
                        type={field?.type || "text"}
                        name={field?.name}
                        placeholder={field?.placeholder || "Please Enter"}
                        className={Style.formBox}
                      />
                    ) : (
                      <textarea
                        placeholder={field?.placeholder}
                        rows={3}
                        name={field?.name}
                        className={Style.formBox}
                      ></textarea>
                    )}
                  </div>
                );
              })}

              <div className={Style.contactLargeBoxBtnArea}>
                {contactForm?.buttonText && (
                  <DarkButton type="submit">
                    {contactForm?.buttonText || "Submit Now"}
                  </DarkButton>
                )}
              </div>
            </div>
          </form>
        </div>
      </Container>
    </Section>
  );
}
