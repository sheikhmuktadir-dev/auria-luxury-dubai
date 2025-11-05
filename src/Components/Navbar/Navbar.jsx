import Style from "./navbar.module.css";
import Container from "../Container/Container";
import { Link, NavLink } from "react-router-dom";
import Button from "../Button/Button";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoCloseOutline } from "react-icons/io5";
import navData from "./Navbar.json";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { logo = "", menu = "" } = navData.navbar || {};

  const [toggle, setToggle] = useState(false);
  const [navScroll, setNavScroll] = useState(false);

  // disable scroll when toggle is true
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggle]);

  // onscroll nav background change
  useEffect(() => {
    const navScrollHandler = () => {
      setNavScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", navScrollHandler);
    return () => window.removeEventListener("scroll", navScrollHandler);
  }, []);

  return (
    <nav
      className={`${Style.navbarMain}  ${
        navScroll ? Style.navbarMainScrolled : ""
      }`}
    >
      <Container>
        {/* nav inner */}
        <div className={Style.navbarInner}>
          {/* nav logo area start */}
          <div className={Style.navbarLogoArea}>
            <Link to={logo?.link || "/"} className={Style.navbarLogoLink}>
              <img
                src={logo?.image}
                alt="Logo"
                className={Style.navbarLogoImage}
              />
            </Link>

            {/* nav toggle */}
            <button
              className={Style.navbarToggleButton}
              onClick={() => setToggle(true)}
            >
              <CgMenuRightAlt />
            </button>
          </div>
          {/* nav logo area end */}

          {/* nav  menu start */}
          <div
            className={`${Style.navbarMenuArea} ${
              toggle ? Style.navbarMenuAreaShow : ""
            }`}
          >
            {/* nav menu close X icon */}
            <button
              className={Style.navbarCloseMenu}
              onClick={() => setToggle(false)}
            >
              <IoCloseOutline />
            </button>

            {/* nav center menu */}
            <div className={Style.navbarCenterMenu}>
              <ul className={Style.navbarMenuList}>
                {menu?.centerMenu?.map((navcenteritem) => {
                  return (
                    <li
                      className={Style.navbarMenuItem}
                      key={navcenteritem.label}
                    >
                      <NavLink
                        to={navcenteritem.link || "/"}
                        className={({ isActive }) =>
                          `${Style.navbarMenuLink} ${
                            isActive ? Style.navbarMenuLinkActive : ""
                          }`
                        }
                        onClick={() => setToggle(false)}
                      >
                        {navcenteritem.label}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* nav right menu */}
            <div className={Style.navbarRightMenu}>
              <ul className={Style.navbarMenuList}>
                {menu?.rightMenu?.map((navrightitem) => {
                  return (
                    <li
                      className={Style.navbarMenuItem}
                      key={navrightitem.label}
                      onClick={() => setToggle(false)}
                    >
                      {navrightitem.type === "phone" ? (
                        <a
                          href={navrightitem.link}
                          className={Style.navbarMenuLink}
                        >
                          {navrightitem.label}
                        </a>
                      ) : (
                        <Button
                          navBtn={navScroll}
                          url={navrightitem.link || "/"}
                        >
                          {navrightitem.label}
                        </Button>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/* nav  menu end */}
        </div>
      </Container>
    </nav>
  );
}
