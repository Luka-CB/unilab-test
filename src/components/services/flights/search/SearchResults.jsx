import geoAirImg from "../../../../assets/images/gaw.png";

const SearchResults = ({ flight }) => {
  return (
    <div className="item">
      <div className="col1">
        <img src={geoAirImg} alt="airline image" />
        <span>Georgian Airlines</span>
      </div>
      <div className="col2">
        <div className="row1">
          <span>Take off</span>
          <span>Landing</span>
        </div>
        <div className="row2">
          <b id="take-off">{flight.takeOff}:00</b>
          {flight.stops === "direct" ? (
            <div className="direct">
              <div className="stop-line"></div>
            </div>
          ) : flight.stops === "one stop" ? (
            <div className="one-stop">
              <div className="stop-line"></div>
              <div className="square-one"></div>
            </div>
          ) : (
            <div className="two-stops">
              <div className="stop-line"></div>
              <div className="square-one"></div>
              <div className="square-two"></div>
            </div>
          )}
          <b id="landing">{flight.landing}:00</b>
          <span>{flight.landing - flight.takeOff} Hours</span>
        </div>
      </div>
      <div className="col3">
        <div className="price">
          <span>Price</span>
          <b>{flight.price}$</b>
        </div>
        <button className="btn view-btn">View Deal</button>
      </div>
    </div>
  );
};

export default SearchResults;
