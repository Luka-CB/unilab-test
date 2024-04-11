import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import menuIcon from "../../assets/icons/Hamburger.svg";
import menuIconDark from "../../assets/icons/HamburgerDark.svg";
import closeIcon from "../../assets/icons/close.svg";
import { PopupsContext } from "../../context/features/popups";
import { AuthContext } from "../../context/features/auth";

const NavMenu = ({ isScrolling }) => {
  const { isMenuPopupOpen, toggleMenuPopup } = useContext(PopupsContext);
  const { user, logout } = useContext(AuthContext);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
    toggleMenuPopup(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
    toggleMenuPopup(false);
  };

  return (
    <>
      <img
        src={
          pathname !== "/"
            ? menuIconDark
            : isScrolling && pathname === "/"
            ? menuIconDark
            : menuIcon
        }
        alt="Menu Icon"
        className="menu-icon"
        onClick={(e) => {
          e.stopPropagation();
          toggleMenuPopup(true);
        }}
      />
      {isMenuPopupOpen ? (
        <div className="menu-items" onClick={(e) => e.stopPropagation()}>
          <img
            src={closeIcon}
            alt="Close Icon"
            className="close-icon"
            onClick={() => toggleMenuPopup(false)}
          />
          <div className="links">
            <div className="auth-links">
              {!user?.id ? (
                <>
                  <span
                    className="link"
                    onClick={() => handleNavigation("signin")}
                  >
                    Sign in
                  </span>
                  <span
                    className="link"
                    onClick={() => handleNavigation("signup")}
                  >
                    Sign up
                  </span>
                </>
              ) : (
                <span className="link" onClick={handleLogout}>
                  Sign out
                </span>
              )}
            </div>
            <div className="nav-links">
              <span className="link" onClick={() => handleNavigation("/")}>
                Home
              </span>
              <span className="link">About us</span>
              <span className="link">Blogs</span>
              <span
                className="link"
                onClick={() => handleNavigation("/services/flights")}
              >
                Our services
              </span>
              <span className="link">Our offers</span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default NavMenu;
