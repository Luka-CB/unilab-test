import { useContext, useEffect, useState } from "react";
import { FlightsContext } from "../../../../context/features/flights";

const Times = () => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const [minVal, setMinVal] = useState(null);
  const [maxVal, setMaxVal] = useState(null);

  const [timesMinValOne, setTimesMinValOne] = useState(12);
  const [timesMaxValOne, setTimesMaxValOne] = useState(24);
  const [timesMinValTwo, setTimesMinValTwo] = useState(12);
  const [timesMaxValTwo, setTimesMaxValTwo] = useState(24);

  const { handleTimesFilter } = useContext(FlightsContext);

  useEffect(() => {
    let timeOut;

    timeOut = setTimeout(() => {
      if (minVal || maxVal) {
        handleTimesFilter({ takeOff: +minVal, landing: +maxVal });
      }
    }, 400);

    return () => clearTimeout(timeOut);
  }, [minVal, maxVal]);

  return (
    <div className="times">
      <div className="title">
        <span>times</span>
        {isOptionsOpen ? (
          <i
            className="fa fa-chevron-up"
            aria-hidden="true"
            onClick={() => setIsOptionsOpen(false)}
          ></i>
        ) : (
          <i
            className="fa fa-chevron-down"
            aria-hidden="true"
            onClick={() => setIsOptionsOpen(true)}
          ></i>
        )}
      </div>
      {isOptionsOpen ? (
        <div className="options">
          <div className="option">
            <label>Take off - Tbilisi</label>
            <div className="range">
              <div className="values">
                <span className="min">{timesMinValOne}:00</span>
                <span className="max">{timesMaxValOne}:00</span>
              </div>
              <div className="track"></div>
              <div className="ranges">
                <input
                  type="range"
                  min={12}
                  max={24}
                  value={timesMinValOne}
                  onChange={(e) => {
                    setTimesMinValOne(e.target.value);
                    setMinVal(e.target.value);
                  }}
                  className="range1"
                />
                <input
                  type="range"
                  min={12}
                  max={24}
                  value={timesMaxValOne}
                  onChange={(e) => {
                    setTimesMaxValOne(e.target.value);
                    setMaxVal(e.target.value);
                  }}
                  className="range2"
                />
              </div>
            </div>
          </div>
          <div className="option option-two">
            <label>Take off - Paris</label>
            <div className="range">
              <div className="values">
                <span className="min">{timesMinValTwo}:00</span>
                <span className="max">{timesMaxValTwo}:00</span>
              </div>
              <div className="track"></div>
              <div className="ranges">
                <input
                  type="range"
                  min={12}
                  max={24}
                  value={timesMinValTwo}
                  onChange={(e) => {
                    setTimesMinValTwo(e.target.value);
                    setMinVal(e.target.value);
                  }}
                  className="range1"
                />
                <input
                  type="range"
                  min={12}
                  max={24}
                  value={timesMaxValTwo}
                  onChange={(e) => {
                    setTimesMaxValTwo(e.target.value);
                    setMaxVal(e.target.value);
                  }}
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

export default Times;
