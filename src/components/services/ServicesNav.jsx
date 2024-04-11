import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { WindowContext } from "../../context/features/window";

const links = ["flights", "stays", "car rentals", "cruises", "attractions"];

const ServicesNav = ({ routeName }) => {
  const { windowWidth } = useContext(WindowContext);

  const [navItems, setNavItems] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (windowWidth < 600) {
      setNavItems(links.slice(0, 3));
    } else {
      setNavItems(links);
    }
  }, [windowWidth]);

  const handleNavigation = (route) => {
    if (route === "flights") navigate("/services/flights");
    if (route === "stays") navigate("/services/stays");
  };

  return (
    <div className="links">
      {navItems.map((item) => (
        <span
          key={item}
          className={routeName === item ? "link-active" : "link"}
          onClick={() => handleNavigation(item)}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default ServicesNav;
