import logo from "../assets/images/ExploreEraDark.png";
import instagramIcon from "../assets/icons/instagram.svg";
import facebookIcon from "../assets/icons/facebook.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import paperPlaneIcon from "../assets/icons/Paper_Plane.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <section className="col1">
          <img src={logo} alt="logo" className="logo" />
          <p className="description">
            Travel agency which helps you to plan your perfect holidays
          </p>
          <div className="social">
            <span>Follow us</span>
            <div className="icons">
              <img
                src={instagramIcon}
                alt="Instagram Icon"
                className="ig-icon"
              />
              <img src={facebookIcon} alt="facebook Icon" className="fc-icon" />
              <img src={linkedinIcon} alt="Linkedin Icon" className="li-icon" />
            </div>
          </div>
        </section>
        <section className="col2">
          <h3>Links</h3>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Blogs</li>
            <li>Our services</li>
            <li>Our offers</li>
          </ul>
        </section>
        <section className="col3">
          <div className="contact-info">
            <h3 className="line1">Contact us</h3>
            <span className="line2">exploreera@gmail.com</span>
            <span className="line3">555111222</span>
          </div>
          <div className="subscribe">
            <h3 className="sub-text">Subscribe news</h3>
            <div className="email-btn">
              <span>Email</span>
              <img
                src={paperPlaneIcon}
                alt="Paper Plane Icon"
                className="icon"
              />
            </div>
          </div>
        </section>
      </div>
      <div className="copyright">
        <span>Copyright 2024</span>
      </div>
    </footer>
  );
};

export default Footer;
