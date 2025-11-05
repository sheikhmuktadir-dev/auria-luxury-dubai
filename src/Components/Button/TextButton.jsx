import { Link } from "react-router-dom";
import Style from "./button.module.css";
import { FaChevronRight } from "react-icons/fa6";

export default function TextButton({ url, children }) {
  return (
    <Link to={url || "/"} className={Style.textButton}>
      <span>{children}</span>
      <span>
        <FaChevronRight />
      </span>
    </Link>
  );
}
