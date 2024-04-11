import { useNavigate } from "react-router-dom";
import Stars from "../Stars";

const SearchResults = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div className="item">
      <div className="col1">
        <img src={item.images[0]} alt={item.propertyType + "image"} />
      </div>
      <div className="col2">
        <div className="info">
          <div className="info-col1">
            <h1 className="title">New Zealand {item.propertyType}</h1>
            <span>New Zealand, Auckland</span>
            <small>1km away from center</small>
            <p>{item.description}</p>
          </div>
          <div className="info-col2">
            <span>Rating:</span>
            <Stars rating={item.rating} />
            <span id="price">Price:</span>
            <b>{item.price}$</b>
          </div>
        </div>
        <button
          className="btn details-btn"
          onClick={() => navigate(`/services/stays/${item.id}`)}
        >
          Show details
        </button>
      </div>
    </div>
  );
};

export default SearchResults;
