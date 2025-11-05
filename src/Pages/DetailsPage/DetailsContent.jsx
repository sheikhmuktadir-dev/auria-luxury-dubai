import Style from "./details.module.css";
import { IoLocationOutline } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { LiaVectorSquareSolid } from "react-icons/lia";
import { TbSofa } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";

export default function DetailsContent({ content = {} }) {
  return (
    <div className={Style.contentMain}>
      <div className={Style.contentMainTopMain}>
        <h3 className={Style.contentMainTopMainCost}>
          {content?.currency && <span>{content?.currency || "AED"}</span>}
          {content?.price && <span>{content?.price || "Null"}</span>}
        </h3>
        {content?.title && <h4>{content?.title}</h4>}

        {content?.location?.address && (
          <h5 className={Style.contentMainTopMainAddress}>
            <span>
              <IoLocationOutline />
            </span>
            <span>{content?.location?.address}</span>
          </h5>
        )}
      </div>

      {/* ************ */}

      <div className={Style.contentMainInnerDetails}>
        {content?.bedrooms && (
          <div className={Style.contentMainInnerDetailsFlex}>
            <span>
              <IoBedOutline />
            </span>
            <span>{content?.bedrooms}</span>
            <span>Bedroom</span>
          </div>
        )}

        {content?.bathrooms && (
          <div className={Style.contentMainInnerDetailsFlex}>
            <span>
              <LuBath />
            </span>
            <span> {content?.bathrooms}</span>
            <span>Bathroom</span>
          </div>
        )}

        {content?.size?.sqft && (
          <div className={Style.contentMainInnerDetailsFlex}>
            <span>
              <LiaVectorSquareSolid />
            </span>
            <span> {content?.size?.sqft}</span>
            <span>Sq.ft</span>
          </div>
        )}

        {content?.furnished && (
          <div className={Style.contentMainInnerDetailsFlex}>
            <span>
              <TbSofa />
            </span>
            <span> {content?.furnished}</span>
          </div>
        )}
      </div>

      {/* ********************************* */}

      <div className={Style.contentMainKeyInformation}>
        <div className={Style.contentMainKeyInformationBox}>
          <h4>Amenities</h4>
          <ul className={Style.contentMainKeyInformationList}>
            {content?.amenities?.map((amenitiesItem) => {
              return (
                <li
                  key={amenitiesItem}
                  className={Style.contentMainKeyInformationItem}
                >
                  <span>
                    <FaRegCheckCircle />
                  </span>
                  <span>{amenitiesItem}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={Style.contentMainKeyInformationBox}>
          <h4>Features</h4>
          <ul className={Style.contentMainKeyInformationList}>
            {content?.features?.map((featureItem) => {
              return (
                <li
                  key={featureItem}
                  className={Style.contentMainKeyInformationItem}
                >
                  <span>
                    <FaRegCheckCircle />
                  </span>
                  <span>{featureItem}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={Style.contentMainKeyInformationBox}>
          <h4>Key Information</h4>
          <ul className={Style.contentMainKeyInformationList}>
            <li className={Style.contentMainKeyInformationItem}>
              <span>Property Type:</span>
              <b>
                <span>{content?.type}</span>
              </b>
            </li>
            <li className={Style.contentMainKeyInformationItem}>
              <span>Purpose:</span>
              <b>
                <span>{content?.transactionType}</span>
              </b>
            </li>
          </ul>
        </div>
      </div>

      {/* *********************************** */}

      <div className={Style.contentMainbottomDescription}>
        <h4>Description</h4>
        {content?.description && <p>{content?.description}</p>}
      </div>

      {/* *********************************** */}

      <div className={Style.contentMainbottom}>
        <h4>Location</h4>
        {content?.map && (
          <iframe
            title="Google Map"
            src={content?.map}
            width="100%"
            className={Style.detailsMap}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}
      </div>
    </div>
  );
}
