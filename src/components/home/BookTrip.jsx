import { useContext, useState } from "react";
import { tours } from "../../data";
import { PopupsContext } from "../../context/features/popups";

const BookTrip = () => {
  const {
    isLocationOptionOpen,
    toggleLocationOption,
    isOfferOptionOpen,
    toggleOfferOption,
    toggleDateOption,
    isDateOptionOpen,
    togglePersonsOption,
    isPeronsOptionOpen,
  } = useContext(PopupsContext);

  const [pickedLocation, setPickedLocation] = useState("");
  const [pickedLocationId, setPickedLocationId] = useState(null);

  const handlePickLocation = (id, city, country) => {
    setPickedLocationId(id);
    setPickedLocation(`${city}, ${country}`);
    toggleLocationOption(false);
  };

  return (
    <div className="book-trip_container">
      <h1 className="book-trip_title">Ready To Book A Trip?</h1>
      <div className="inputs-wrapper">
        <div className="select-inputs">
          <div
            className="select-input"
            style={{
              borderBottomLeftRadius: isLocationOptionOpen && "unset",
              borderBottomRightRadius: isLocationOptionOpen && "unset",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="input-content">
              <span className="value">
                {!pickedLocation ? "Your starting location" : pickedLocation}
              </span>
              {isLocationOptionOpen ? (
                <i
                  className="fa fa-chevron-up"
                  aria-hidden="true"
                  onClick={() => toggleSelectOption(false)}
                ></i>
              ) : (
                <i
                  className="fa fa-chevron-down"
                  aria-hidden="true"
                  onClick={() => toggleSelectOption(true)}
                ></i>
              )}
            </div>
            {isLocationOptionOpen ? (
              <div className="options">
                <div className="option-content">
                  {tours.map((tour, i) => (
                    <div
                      className={
                        tour.id === pickedLocationId ? "item-active" : "item"
                      }
                      key={tour.id}
                      onClick={() =>
                        handlePickLocation(tour.id, tour.city, tour.country)
                      }
                    >
                      <span>
                        {tour.city}, {tour.country}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
          <div
            className="select-input"
            style={{
              borderBottomLeftRadius: isOfferOptionOpen && "unset",
              borderBottomRightRadius: isOfferOptionOpen && "unset",
            }}
          >
            <div className="input-content">
              <span className="value">Choose a tour offer</span>
              {isOfferOptionOpen ? (
                <i
                  className="fa fa-chevron-up"
                  aria-hidden="true"
                  onClick={() => toggleOfferOption(false)}
                ></i>
              ) : (
                <i
                  className="fa fa-chevron-down"
                  aria-hidden="true"
                  onClick={() => toggleOfferOption(true)}
                ></i>
              )}
            </div>
            {isOfferOptionOpen ? (
              <div className="options">
                <div className="option-content">
                  {tours.map((tour, i) => (
                    <div
                      className={
                        tour.id === pickedLocationId ? "item-active" : "item"
                      }
                      key={tour.id}
                      onClick={() =>
                        handlePickLocation(tour.id, tour.city, tour.country, i)
                      }
                    >
                      <span>
                        {tour.city}, {tour.country}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
          <div
            className="select-input"
            style={{
              borderBottomLeftRadius: isDateOptionOpen && "unset",
              borderBottomRightRadius: isDateOptionOpen && "unset",
            }}
          >
            <div className="input-content">
              <span className="value">Choose date</span>
              {isDateOptionOpen ? (
                <i
                  className="fa fa-chevron-up"
                  aria-hidden="true"
                  onClick={() => toggleDateOption(false)}
                ></i>
              ) : (
                <i
                  className="fa fa-chevron-down"
                  aria-hidden="true"
                  onClick={() => toggleDateOption(true)}
                ></i>
              )}
            </div>
            {isDateOptionOpen ? (
              <div className="options">
                <div className="option-content">
                  {tours.map((tour, i) => (
                    <div
                      className={
                        tour.id === pickedLocationId ? "item-active" : "item"
                      }
                      key={tour.id}
                      onClick={() =>
                        handlePickLocation(tour.id, tour.city, tour.country, i)
                      }
                    >
                      <span>
                        {tour.city}, {tour.country}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
          <div
            className="select-input"
            style={{
              borderBottomLeftRadius: isPeronsOptionOpen && "unset",
              borderBottomRightRadius: isPeronsOptionOpen && "unset",
            }}
          >
            <div className="input-content">
              <span className="value">Persons</span>
              {isPeronsOptionOpen ? (
                <i
                  className="fa fa-chevron-up"
                  aria-hidden="true"
                  onClick={() => togglePersonsOption(false)}
                ></i>
              ) : (
                <i
                  className="fa fa-chevron-down"
                  aria-hidden="true"
                  onClick={() => togglePersonsOption(true)}
                ></i>
              )}
            </div>
            {isPeronsOptionOpen ? (
              <div className="options">
                <div className="option-content">
                  {tours.map((tour, i) => (
                    <div
                      className={
                        tour.id === pickedLocationId ? "item-active" : "item"
                      }
                      key={tour.id}
                      onClick={() =>
                        handlePickLocation(tour.id, tour.city, tour.country, i)
                      }
                    >
                      <span>
                        {tour.city}, {tour.country}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <button className="btn input-btn">Book Now</button>
      </div>
    </div>
  );
};

export default BookTrip;
