import { useState } from "react";
import Style from "./card.module.css";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import NotFound from "../../Components/Message/NotFound";

export default function LocationCard({
  locationData = [],
  locationImage = null,
  locationName = "",
}) {
  const [locationIndex, setLocationIndex] = useState(0);

  if (!locationData?.length)
    return <NotFound> Opps No Location Found</NotFound>;

  return (
    <>
      {locationData.map((locationItem, index) => {
        const locName = locationItem[locationName]; // e.g., "Downtown Dubai"

        return (
          <Link
            //  Navigate directly to /search?location=<name>
            to={`/properties?location=${encodeURIComponent(locName)}`}
            className={`${Style.locationCard} ${
              locationIndex === index ? Style.locationCardActive : ""
            }`}
            key={locName || index}
            onMouseEnter={() => setLocationIndex(index)}
          >
            {/* location card image area */}
            <div className={Style.locationCardImageArea}>
              {locationImage && locationItem[locationImage] && (
                <img
                  src={locationItem[locationImage]}
                  className={Style.locationImage}
                  alt={locName || "Location image"}
                  loading="lazy"
                />
              )}
            </div>

            {/* location card text (location name , circle button)area */}
            <div className={Style.locationCardText}>
              {locName && (
                <div className={`${Style.cardTitle} ${Style.cardTextWhite}`}>
                  {locName}
                </div>
              )}

              <button className={Style.locationCardBtn}>
                <GoArrowUpRight />
              </button>
            </div>
          </Link>
        );
      })}
    </>
  );
}
