import { Link } from "react-router-dom";
import Style from "./button.module.css";

export default function Button({ url, children }) {
  return (
    <Link to={url || "/"} className={Style.mainButton}>
      {children}
    </Link>
  );
}
