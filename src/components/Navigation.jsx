import React, { useEffect, useState } from "react";
import title from "../assets/images/ExploreEra.png";
import titleDark from "../assets/images/ExploreEraDark.png";
import userIcon from "../assets/icons/user.svg";
import userIconDark from "../assets/icons/userDark.svg";

const Navigation = () => {
  const [isScrolling, setIsScrolling] = useState(false);

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

  return (
    <nav className={isScrolling ? "nav-bg" : null}>
      <section className="title">
        <img src={isScrolling ? titleDark : title} alt="title icon" />
      </section>
      <section className="nav-items">
        <ul className="links">
          <li className="link">Home</li>
          <li className="link">About us</li>
          <li className="link">Blogs</li>
          <li className="link">Our services</li>
          <li className="link">our offer</li>
        </ul>
        <div className="auth-btn">
          <img src={isScrolling ? userIconDark : userIcon} alt="user icon" />
        </div>
      </section>
    </nav>
  );
};

export default Navigation;
