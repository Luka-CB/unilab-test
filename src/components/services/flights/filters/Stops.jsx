import { useContext, useEffect, useState } from "react";
import { FlightsContext } from "../../../../context/features/flights";

const Stops = () => {
  const [isOptionsOpen, setOptionsOpen] = useState(false);
  const [stops, setStops] = useState([]);

  const { handleStopsFilter } = useContext(FlightsContext);

  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setStops((prev) => [...prev, e.target.value]);
    } else {
      const newArr = stops.filter((stop) => stop !== e.target.value);
      setStops(newArr);
    }
  };

  useEffect(() => {
    handleStopsFilter(stops);
  }, [stops]);

  return (
    <div className="stops">
      <div className="title">
        <span>stops</span>
        {isOptionsOpen ? (
          <i
            className="fa fa-chevron-up"
            aria-hidden="true"
            onClick={() => setOptionsOpen(false)}
          ></i>
        ) : (
          <i
            className="fa fa-chevron-down"
            aria-hidden="true"
            onClick={() => setOptionsOpen(true)}
          ></i>
        )}
      </div>
      {isOptionsOpen ? (
        <div className="options">
          <div className="input-wrapper">
            <input
              type="checkbox"
              name="direct"
              id="direct"
              value="direct"
              onChange={(e) => handleCheckbox(e)}
            />
            <label htmlFor="direct">Direct</label>
          </div>
          <div className="input-wrapper">
            <input
              type="checkbox"
              name="oneStop"
              id="oneStop"
              value="one stop"
              onChange={(e) => handleCheckbox(e)}
            />
            <label htmlFor="oneStop">One stop</label>
          </div>
          <div className="input-wrapper">
            <input
              type="checkbox"
              name="twoStops"
              id="twoStops"
              value="two stops"
              onChange={(e) => handleCheckbox(e)}
            />
            <label htmlFor="twoStops">Two Stops</label>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Stops;
