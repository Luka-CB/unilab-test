import servicesImg1 from "../../assets/images/servicesImg1.png";
import servicesImg2 from "../../assets/images/servicesImg2.png";
import servicesImg3 from "../../assets/images/servicesImg3.png";
import servicesImg4 from "../../assets/images/servicesImg4.png";

const Card = ({ img, title }) => {
  return (
    <div className="card">
      <img src={img} alt={title} className="card-img" />
      <h1 className="card-title">{title}</h1>
      <p className="card-description">
        book memorable journey with our flight booking services! we're thrilled
        to present you flight options to suit your travel needs.
      </p>
    </div>
  );
};

const DiscoverServices = () => {
  return (
    <>
      <div className="title-wrapper">
        <h1 className="title">Discover Our Services</h1>
        <p className="description">
          ExploreEra provides a one-stop solution for individuals seeking
          well-planned journeys. These services include expert advice on
          destination selection, flight and accommodation bookings, and
          customized itineraries to individual preferences.
        </p>
      </div>
      <div className="card-wrapper">
        <span className="see-all-btn">see all</span>
        <div className="cards">
          <Card img={servicesImg1} title="Book Flight" />
          <Card img={servicesImg2} title="Book Hotels" />
          <Card img={servicesImg3} title="Book Cruises" />
          <Card img={servicesImg4} title="Book Family Vacation" />
        </div>
      </div>
    </>
  );
};

export default DiscoverServices;
