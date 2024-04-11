import shareIcon from "../../../../assets/icons/share.svg";
import heartIcon from "../../../../assets/icons/heart.svg";
import mapPin from "../../../../assets/icons/mapPin.svg";
import Stars from "../Stars";

const ItemInfo = ({ item }) => {
  return (
    <>
      <div className="row1">
        <div className="col1">
          <h1 id="name">New Zealand {item?.propertyType}</h1>
          <div className="address">
            <img src={mapPin} alt="Map Pin" />
            <span>54 Street, Auckland, New Zealand</span>
          </div>
        </div>
        <div className="col2">
          <span>Rating:</span>
          <div className="icons">
            <img src={heartIcon} alt="Heart Icon" id="heart-icon" />
            <img src={shareIcon} alt="Share Icon" id="share-icon" />
            <Stars rating={item?.rating} />
          </div>
        </div>
      </div>
      <div className="row2">
        <div className="first">
          {item?.images?.slice(0, 3).map((image, i) => (
            <figure className={`image image-${i + 1}`} key={image}>
              <img src={image} alt="image" />
            </figure>
          ))}
        </div>
        <div className="second">
          {item?.images?.slice(3).map((image, i) => (
            <figure
              className={
                i === item?.images?.slice(3).length - 1 ? "last-image" : "image"
              }
              key={image}
            >
              <img src={image} alt="image" />
              {i === item?.images?.slice(3).length - 1 ? (
                <div className="overlay">
                  <span>+ 15 Photos</span>
                </div>
              ) : null}
            </figure>
          ))}
        </div>
      </div>
      <div className="row3">
        <div className="price">
          <span>Price: {item?.price}$</span>
        </div>
        <div className="total-price">
          <span>Total price: 3200$</span>
        </div>
        <button className="btn book-btn">Book now</button>
      </div>
      <p>{item?.description}</p>
    </>
  );
};

export default ItemInfo;
