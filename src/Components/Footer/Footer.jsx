import Style from "./footer.module.css";
import Container from "../../Components/Container/Container";
import { Link } from "react-router-dom";
import footerData from "./Footer.json";

export default function Footer() {
  const {
    logo = "",
    legal = [],
    social = [],
    menus = [],
    address = "",
    copyright = "",
  } = footerData;

  if (!menus?.length) return null;

  return (
    <footer className={Style.footerMain}>
      <Container>
        <div className={Style.footerInner}>
          <div className={Style.footerGrid}>
            <div className={Style.footerLogoArea}>
              <Link to="/">
                <img src={logo} className={Style.footerLogo} />
              </Link>
              <p className="textWhite">{address}</p>
            </div>

            <ul className={Style.footerList}>
              <h4 className="textWhite">Quick Links</h4>
              {menus.map((menuitem) => {
                return (
                  <li key={menuitem.label}>
                    <Link to={menuitem.url} className={Style.footerLink}>
                      {menuitem.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <ul className={Style.footerList}>
              <h4 className="textWhite">Follow Us</h4>
              {social.map((menuitem) => {
                return (
                  <li key={menuitem.label}>
                    <Link to={menuitem.url} className={Style.footerLink}>
                      {menuitem.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <ul className={Style.footerList}>
              <h4 className="textWhite">Legal</h4>
              {legal.map((menuitem) => {
                return (
                  <li key={menuitem.label}>
                    <Link to={menuitem.url} className={Style.footerLink}>
                      {menuitem.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={Style.footerCopyright}>
            <h5 className="textWhite">{copyright}</h5>
          </div>
        </div>
      </Container>
    </footer>
  );
}
