import { Link } from "react-router-dom";
import Style from "./card.module.css";
import { LuDot } from "react-icons/lu";
import NotFound from "../../Components/Message/NotFound";

export default function FeaturedCard({ featuredData }) {
  if (!featuredData?.length)
    return <NotFound> Opps No Featured Property Found</NotFound>;

  return (
    <>
      {featuredData.map((featureItem, index) => {
        // property main image finding
        const featuredpropertyImage =
          featureItem.images.find((image) => image.isPrimary) ||
          featureItem.images[0];

        return (
          <Link
            to={`details/${featureItem.propertyId}`}
            key={index}
            className={Style.featuredCard}
          >
            {/* featured image */}
            {featuredpropertyImage?.name && (
              <div className={Style.featuredCardImageArea}>
                <img
                  src={featuredpropertyImage.name}
                  loading="lazy"
                  alt={featureItem.title || "featured property image"}
                  className={Style.featuredCardImage}
                />

                {featureItem?.type && (
                  <div className={Style.cardTag}>{featureItem?.type}</div>
                )}
              </div>
            )}

            {/* featured content */}
            <div className={Style.featuredContent}>
              {/* featured address */}
              {featureItem?.location?.address && (
                <div
                  className={`${Style.cardSmallText} ${Style.cardTextWhite}`}
                >
                  {featureItem?.location?.address}
                </div>
              )}

              {/* featured title */}
              {featureItem?.title && (
                <div
                  className={`${Style.featuredTitle} ${Style.cardTitle} ${Style.cardTextWhite}`}
                >
                  {featureItem?.title}
                </div>
              )}

              <div className={Style.featuredContentBottomFlex}>
                {/* currency */}
                <div className={Style.featuredCardBottomTextFlex}>
                  {featureItem?.currency && (
                    <div
                      className={`${Style.cardSmallText} ${Style.cardTextWhite} ${Style.propertiesCardCost}`}
                    >
                      {featureItem?.currency}
                    </div>
                  )}

                  {/* price */}
                  {featureItem?.price && (
                    <div
                      className={`${Style.cardSmallText} ${Style.cardTextWhite} ${Style.propertiesCardCost}`}
                    >
                      {featureItem?.price}
                    </div>
                  )}
                </div>

                <div className={Style.featuredDot}>
                  <LuDot />
                </div>

                <div className={Style.featuredCardBottomTextFlex}>
                  {/* bedrooms */}
                  {featureItem?.bedrooms && (
                    <div
                      className={`${Style.cardSmallText} ${Style.cardTextWhite}`}
                    >
                      {featureItem?.bedrooms}
                    </div>
                  )}
                  <div className={Style.featuredCardBottomBedroom}>
                    Bedrooms
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
}
