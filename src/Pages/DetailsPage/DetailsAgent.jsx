import Style from "./details.module.css";
import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function DetailsAgent({ agent }) {
  if (!agent) return null;
  const cleanPhone = (num) => num?.replace(/[^0-9]/g, "");

  return (
    <div className={Style.detailsAgent}>
      {agent?.agent?.image && (
        <img src={agent?.agent?.image} className={Style.detailsAgentImage} />
      )}

      {agent?.agent?.name && <h4>{agent?.agent?.name}</h4>}

      <div className={Style.detailsAgentFlex}>
        {agent?.agent?.phone && (
          <a href={`tel:${agent?.agent?.phone}`} className={Style.agentBtn}>
            <span>
              <FiPhoneCall />
            </span>
            <span>Call Me</span>
          </a>
        )}

        {agent?.agent?.email && (
          <a href={`mailto:${agent?.agent?.email}`} className={Style.agentBtn}>
            <span>
              <FiMail />
            </span>
            <span>Email</span>
          </a>
        )}

        {agent?.agent?.whatsapp && (
          <a
            href={`https://wa.me/${cleanPhone(agent?.agent?.whatsapp)}`}
            target="_blank"
            className={Style.agentBtn}
          >
            <span>
              <FaWhatsapp />
            </span>
            <span>WhatsApp</span>
          </a>
        )}
      </div>
    </div>
  );
}
