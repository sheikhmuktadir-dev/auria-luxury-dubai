import Style from "./breadcrumb.module.css";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Container from "../Container/Container";

export default function Breadcrumb({
  mainPage,
  mainPageLink,
  parentPage,
  ParentPageLink,
  activePage,
}) {
  return (
    <Container>
      <div className={Style.breadcrumb}>
        {mainPage && (
          <Link to={mainPageLink} className={Style.breadcrumbLink}>
            Home
          </Link>
        )}
        {mainPage && (
          <span>
            <FiChevronRight className={Style.breadcrumbLink} />
          </span>
        )}
        {parentPage && (
          <Link to={ParentPageLink} className={Style.breadcrumbLink}>
            Properties
          </Link>
        )}
        {parentPage && (
          <span>
            <FiChevronRight className={Style.breadcrumbLink} />
          </span>
        )}
        {activePage && (
          <span
            className={`${Style.breadcrumbLink} ${Style.breadcrumbLinkActive}`}
          >
            {activePage}
          </span>
        )}
      </div>
    </Container>
  );
}
