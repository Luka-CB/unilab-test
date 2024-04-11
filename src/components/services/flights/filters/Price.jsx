import { useContext, useEffect, useState } from "react";
import { FlightsContext } from "../../../../context/features/flights";

const Price = () => {
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  const [minVal, setMinVal] = useState(700);
  const [maxVal, setMaxVal] = useState(3000);

  const { handlePriceFilter } = useContext(FlightsContext);

  useEffect(() => {
    let timeOut;

    timeOut = setTimeout(() => {
      handlePriceFilter({ min: +minVal, max: +maxVal });
    }, 400);

    return () => clearTimeout(timeOut);
  }, [minVal, maxVal]);

  return (
    <div className="price">
      <div className="title">
        <span>price</span>
        {isOptionOpen ? (
          <i
            className="fa fa-chevron-up"
            aria-hidden="true"
            onClick={() => setIsOptionOpen(false)}
          ></i>
        ) : (
          <i
            className="fa fa-chevron-down"
            aria-hidden="true"
            onClick={() => setIsOptionOpen(true)}
          ></i>
        )}
      </div>
      {isOptionOpen ? (
        <div className="options">
          <div className="option">
            <div className="range">
              <div className="values">
                <span className="min">{minVal}$</span>
                <span className="max">{maxVal}$</span>
              </div>
              <div className="track"></div>
              <div className="ranges">
                <input
                  type="range"
                  min={700}
                  max={3000}
                  value={minVal}
                  onChange={(e) => setMinVal(e.target.value)}
                  className="range1"
                />
                <input
                  type="range"
                  min={700}
                  max={3000}
                  value={maxVal}
                  onChange={(e) => setMaxVal(e.target.value)}
                  className="range2"
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Price;
