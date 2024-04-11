import hotelsImg from "../../../assets/images/hotels.png";
import apartmentsImg from "../../../assets/images/apartments.png";
import resortsImg from "../../../assets/images/resorts.png";
import villasImg from "../../../assets/images/villas.png";

const PropertyTypes = () => {
  return (
    <>
      <h1 className="title">Browse by property type</h1>
      <div className="handles">
        <i className="fa fa-chevron-left" aria-hidden="true"></i>
        <i className="fa fa-chevron-right" aria-hidden="true"></i>
      </div>
      <div className="cards">
        <Card img={hotelsImg} name="hotels" />
        <Card img={apartmentsImg} name="apartments" />
        <Card img={resortsImg} name="resorts" />
        <Card img={villasImg} name="villas" />
      </div>
    </>
  );
};

const Card = ({ img, name }) => {
  return (
    <div className="card">
      <img src={img} alt={name} />
      <h2 className="name">{name}</h2>
    </div>
  );
};

export default PropertyTypes;
