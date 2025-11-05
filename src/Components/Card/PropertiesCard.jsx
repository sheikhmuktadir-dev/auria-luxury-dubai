import { Link } from "react-router-dom";
import Style from "./card.module.css";
import { IoLocationOutline } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { LiaVectorSquareSolid } from "react-icons/lia";
import NotFound from "../../Components/Message/NotFound";

export default function PropertiesCard({ propertyMainData, cardType }) {
  if (!propertyMainData?.length)
    return <NotFound>Opps No Latest Property Found</NotFound>;

  const cardStyle = Style[cardType] || Style.mainGrid;

  return (
    <>
      {propertyMainData.map((propertyItem, index) => {
        // properties main image finding
        const propertyImage =
          propertyItem.images.find((image) => image.isPrimary) ||
          propertyItem.images[0];

        return (
          <Link
            to={`/details/${propertyItem.propertyId}`}
            key={index}
            className={`${Style.propertiesCard} ${cardStyle}`}
          >
            {/* properties image */}
            {propertyImage?.name && (
              <div className={Style.propertiesCardImageArea}>
                <img
                  src={propertyImage.name}
                  loading="lazy"
                  alt={propertyItem.title || "property image"}
                  className={Style.propertiesCardImage}
                />

                {propertyItem?.type && (
                  <div className={Style.cardTag}>{propertyItem?.type}</div>
                )}
              </div>
            )}

            {/* properties content */}
            <div className={Style.propertiesCardContent}>
              {/* address */}
              {propertyItem?.location?.address && (
                <div
                  className={`${Style.propertiesCardLocation} ${Style.cardSmallText}`}
                >
                  <IoLocationOutline />
                  {propertyItem?.location?.address}
                </div>
              )}

              {/* title */}
              {propertyItem?.title && (
                <div
                  className={`${Style.propertiesCardTitle} ${Style.cardTitle}`}
                >
                  {propertyItem?.title}
                </div>
              )}

              <div className={Style.propertiesCardDetailsFlex}>
                {/* bedroom */}
                {propertyItem?.bedrooms && (
                  <div className={Style.propertiesCardDetailsMainFlex}>
                    <span className={Style.cardSmallText}>
                      <IoBedOutline />
                    </span>
                    <div className={Style.cardSmallText}>
                      {propertyItem?.bedrooms}
                    </div>
                    <span className={Style.cardSmallText}>Bedrooms</span>
                  </div>
                )}

                {/* square feet */}
                {propertyItem?.size?.sqft && (
                  <div className={Style.propertiesCardDetailsMainFlex}>
                    <span className={Style.cardSmallText}>
                      <LiaVectorSquareSolid />
                    </span>
                    <div className={Style.cardSmallText}>
                      {propertyItem?.size?.sqft}
                    </div>
                    <span className={Style.cardSmallText}>Sq. Ft.</span>
                  </div>
                )}
              </div>

              <div className={Style.propertiesCardBottom}>
                {/* agent */}
                {propertyItem?.agent?.image && (
                  <div className={Style.propertiesCardAgent}>
                    {propertyItem?.agent?.image && (
                      <img
                        src={propertyItem.agent.image}
                        className={Style.propertiesCardAgentImage}
                      />
                    )}

                    {propertyItem?.agent?.name && (
                      <div className={Style.cardSmallText}>
                        {propertyItem.agent.name}
                      </div>
                    )}
                  </div>
                )}

                {/*currency & price */}
                <div className={Style.propertiesCardCostArea}>
                  {propertyItem?.currency && (
                    <div
                      className={`${Style.cardSmallText} ${Style.propertiesCardCost}`}
                    >
                      {propertyItem.currency}
                    </div>
                  )}
                  {propertyItem?.price && (
                    <div
                      className={`${Style.cardSmallText} ${Style.propertiesCardCost}`}
                    >
                      {propertyItem.price}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
}
