import creditCardIcon from "../../../../assets/icons/creditCard.svg";
import handbagIcon from "../../../../assets/icons/handbag.svg";
import suitcaseIcon from "../../../../assets/icons/suitcase.svg";
import Stops from "./Stops";
import Times from "./Times";
import Duration from "./Duration";
import Price from "./Price";
import { useState } from "react";

const Filters = () => {
  const [filterNames, setFilterNames] = useState([]);

  const toggleFilterOption = (filterName) => {
    if (filterNames.some((name) => name === filterName)) {
      const newNames = filterNames.filter((name) => name !== filterName);
      setFilterNames(newNames);
    } else {
      setFilterNames((prev) => [...prev, filterName]);
    }
  };

  return (
    <>
      <section className="row1">
        <span>Cheapest</span>
        <span id="quickest">Quickest</span>
        <span>Best</span>
      </section>
      <section className="row2">
        <Stops />
        <Times />
        <div className="airlines">
          <div className="title">
            <span>airlines</span>
            {filterNames.includes("airlines") ? (
              <i
                className="fa fa-chevron-up"
                aria-hidden="true"
                onClick={() => toggleFilterOption("airlines", false)}
              ></i>
            ) : (
              <i
                className="fa fa-chevron-down"
                aria-hidden="true"
                onClick={() => toggleFilterOption("airlines", true)}
              ></i>
            )}
          </div>
          {filterNames.includes("airlines") ? (
            <div className="options"></div>
          ) : null}
        </div>
        <div className="airports">
          <div className="title">
            <span>airports</span>
            {filterNames.includes("airports") ? (
              <i
                className="fa fa-chevron-up"
                aria-hidden="true"
                onClick={() => toggleFilterOption("airports", false)}
              ></i>
            ) : (
              <i
                className="fa fa-chevron-down"
                aria-hidden="true"
                onClick={() => toggleFilterOption("airports", true)}
              ></i>
            )}
          </div>
          {filterNames.includes("airports") ? (
            <div className="options"></div>
          ) : null}
        </div>
        <Duration />
        <Price />
        <div className="price-calculator">
          <div className="title">
            <span>price calculator</span>
            {filterNames.includes("priceCalculator") ? (
              <i
                className="fa fa-chevron-up"
                aria-hidden="true"
                onClick={() => toggleFilterOption("priceCalculator")}
              ></i>
            ) : (
              <i
                className="fa fa-chevron-down"
                aria-hidden="true"
                onClick={() => toggleFilterOption("priceCalculator")}
              ></i>
            )}
          </div>
          {filterNames.includes("priceCalculator") ? (
            <div className="options">
              <div className="input-wrapper">
                <div className="label">
                  <img src={creditCardIcon} alt="Credit Card Icon" />
                  <label>Payment method</label>
                </div>
                <input type="text" placeholder="Choose payment method" />
              </div>
              <div className="input-wrapper">
                <div className="label">
                  <img src={handbagIcon} alt="Handbag Icon" />
                  <label>Carry-on bag</label>
                </div>
                <input type="text" placeholder="Select bags (0)" />
              </div>
              <div className="input-wrapper">
                <div className="label">
                  <img src={suitcaseIcon} alt="Suitcase Icon" />
                  <label>Checked bag</label>
                </div>
                <input type="text" placeholder="Select bags (0)" />
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
};

export default Filters;
