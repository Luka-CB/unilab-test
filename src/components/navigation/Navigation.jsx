import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import title from "../../assets/images/ExploreEra.png";
import titleDark from "../../assets/images/ExploreEraDark.png";
import userIcon from "../../assets/icons/user.svg";
import userIconDark from "../../assets/icons/userDark.svg";
import { PopupsContext } from "../../context/features/popups";
import NavMenu from "./NavMenu";
import { AuthContext } from "../../context/features/auth";

const excludeRoutes = ["/signin", "/signup"];

const Navigation = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const { isAuthPopupOpen, toggleAuthPopup } = useContext(PopupsContext);
  const { user, logout } = useContext(AuthContext);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav
      className={
        isScrolling && pathname === "/"
          ? "nav-bg"
          : pathname !== "/"
          ? "nav-bg"
          : null
      }
    >
      <section className="logo">
        <img
          src={
            pathname !== "/"
              ? titleDark
              : isScrolling && pathname === "/"
              ? titleDark
              : title
          }
          alt="title icon"
          onClick={() => navigate("/")}
        />
      </section>
      <section className="menu">
        <NavMenu isScrolling={isScrolling} />
      </section>
      <section className="nav-items">
        {!excludeRoutes.includes(pathname) ? (
          <ul className="links">
            <li className="link" onClick={() => navigate("/")}>
              Home
            </li>
            <li className="link">About us</li>
            <li className="link">Blogs</li>
            <li className="link" onClick={() => navigate("/services/flights")}>
              Our services
            </li>
            <li className="link">our offer</li>
          </ul>
        ) : null}
        <div
          className="auth-btn"
          onClick={(e) => {
            e.stopPropagation();
            toggleAuthPopup(!isAuthPopupOpen);
          }}
        >
          {user?.id ? (
            <img src={user?.image} alt="user image" id="user-img" />
          ) : (
            <img
              src={
                pathname !== "/"
                  ? userIconDark
                  : isScrolling && pathname === "/"
                  ? userIconDark
                  : userIcon
              }
              alt="user icon"
            />
          )}
        </div>
      </section>

      {isAuthPopupOpen ? (
        <div className="auth-popup">
          {!user?.id ? (
            <>
              <p className="link" onClick={() => navigate("/signin")}>
                Sign in
              </p>
              <p className="link" onClick={() => navigate("/signup")}>
                Sign up
              </p>
            </>
          ) : (
            <p className="link" onClick={handleLogout}>
              Sign out
            </p>
          )}
        </div>
      ) : null}
    </nav>
  );
};

export default Navigation;
