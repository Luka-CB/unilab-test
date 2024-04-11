import { useContext, useEffect, useState } from "react";
import { StaysContext } from "../../../../context/features/stays";

const Rating = () => {
  const { handleFilter } = useContext(StaysContext);

  const [ratings, setRatings] = useState([]);

  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setRatings((prev) => [...prev, +e.target.value]);
    } else {
      const newArr = ratings.filter((rating) => rating !== +e.target.value);
      setRatings(newArr);
    }
  };

  useEffect(() => {
    handleFilter(ratings);
  }, [ratings]);

  return (
    <>
      <span className="section-title">Property rating</span>
      <div className="inputs">
        <div className="input-wrapper">
          <input
            type="checkbox"
            name="stars5"
            id="stars5"
            value="5"
            onClick={(e) => handleCheckbox(e)}
          />
          <label htmlFor="stars5">5 Stars</label>
        </div>
        <div className="input-wrapper">
          <input
            type="checkbox"
            name="stars4"
            id="stars4"
            value="4"
            onClick={(e) => handleCheckbox(e)}
          />
          <label htmlFor="stars4">4 Stars</label>
        </div>
        <div className="input-wrapper">
          <input
            type="checkbox"
            name="stars3"
            id="stars3"
            value="3"
            onClick={(e) => handleCheckbox(e)}
          />
          <label htmlFor="stars3">3 Stars</label>
        </div>
        <div className="input-wrapper">
          <input
            type="checkbox"
            name="stars2"
            id="stars2"
            value="2"
            onClick={(e) => handleCheckbox(e)}
          />
          <label htmlFor="stars2">2 Stars</label>
        </div>
        <div className="input-wrapper">
          <input
            type="checkbox"
            name="unrated"
            id="unrated"
            value="1"
            onClick={(e) => handleCheckbox(e)}
          />
          <label htmlFor="unrated">Unrated</label>
        </div>
      </div>
    </>
  );
};

export default Rating;
