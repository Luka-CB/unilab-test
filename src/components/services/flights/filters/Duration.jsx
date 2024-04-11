import { useState } from "react";

const Duration = () => {
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  const [minVal, setMinVal] = useState(7);
  const [maxVal, setMaxVal] = useState(30);

  return (
    <div className="duration">
      <div className="title">
        <span>duration</span>
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
                <span className="min">{minVal} Hours</span>
                <span className="max">{maxVal} Hours</span>
              </div>
              <div className="track"></div>
              <div className="ranges">
                <input
                  type="range"
                  min={7}
                  max={30}
                  value={minVal}
                  onChange={(e) => setMinVal(e.target.value)}
                  className="range1"
                />
                <input
                  type="range"
                  min={7}
                  max={30}
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

export default Duration;
