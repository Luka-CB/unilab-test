import Rating from "./Rating";

const Filters = () => {
  return (
    <>
      <h1 className="title">Filter by:</h1>
      <section className="type">
        <span className="section-title">Property type</span>
        <div className="inputs">
          <div className="input-wrapper">
            <input type="checkbox" name="hotel" id="hotel" value="hotel" />
            <label htmlFor="hotel">Hotel</label>
          </div>
          <div className="input-wrapper">
            <input
              type="checkbox"
              name="apartment"
              id="apartment"
              value="apartment"
            />
            <label htmlFor="apartment">Apartment</label>
          </div>
          <div className="input-wrapper">
            <input type="checkbox" name="villa" id="villa" value="villa" />
            <label htmlFor="villa">Villa</label>
          </div>
          <div className="input-wrapper">
            <input
              type="checkbox"
              name="guestHouse"
              id="guestHouse"
              value="guestHouse"
            />
            <label htmlFor="guestHouse">Guest house</label>
          </div>
          <div className="input-wrapper">
            <input type="checkbox" name="resort" id="resort" value="resort" />
            <label htmlFor="resort">Resort</label>
          </div>
        </div>
        <span className="show-all">Show all 15</span>
      </section>
      <section className="rating">
        <Rating />
      </section>
      <section className="facilities">
        <span className="section-title">Facilities</span>
        <div className="inputs">
          <div className="input-wrapper">
            <input type="checkbox" name="wifi" id="wifi" value="wifi" />
            <label htmlFor="wifi">Wifi</label>
          </div>
          <div className="input-wrapper">
            <input
              type="checkbox"
              name="parking"
              id="parking"
              value="parking"
            />
            <label htmlFor="parking">Parking</label>
          </div>
          <div className="input-wrapper">
            <input
              type="checkbox"
              name="petsAllowed"
              id="petsAllowed"
              value="petsAllowed"
            />
            <label htmlFor="petsAllowed">Pets allowed</label>
          </div>
          <div className="input-wrapper">
            <input
              type="checkbox"
              name="fitnessCenter"
              id="fitnessCenter"
              value="fitnessCenter"
            />
            <label htmlFor="fitnessCenter">Fitness center</label>
          </div>
          <div className="input-wrapper">
            <input
              type="checkbox"
              name="swimmingPool"
              id="swimmingPool"
              value="swimmingPool"
            />
            <label htmlFor="swimmingPool">Swimming pool</label>
          </div>
        </div>
        <span className="show-all">Show all 15</span>
      </section>
      <section className="facilities">
        <span className="section-title">Room facilities</span>
        <div className="inputs">
          <div className="input-wrapper">
            <input
              type="checkbox"
              name="balcony"
              id="balcony"
              value="balcony"
            />
            <label htmlFor="balcony">Balcony</label>
          </div>
          <div className="input-wrapper">
            <input type="checkbox" name="tv" id="tv" value="tv" />
            <label htmlFor="tv">TV</label>
          </div>
          <div className="input-wrapper">
            <input
              type="checkbox"
              name="kitchen"
              id="kitchen"
              value="kitchen"
            />
            <label htmlFor="kitchen">Kitchen</label>
          </div>
          <div className="input-wrapper">
            <input
              type="checkbox"
              name="airConditioning"
              id="airConditioning"
              value="airConditioning"
            />
            <label htmlFor="airConditioning">Air conditioning</label>
          </div>
          <div className="input-wrapper">
            <input
              type="checkbox"
              name="washingMachine"
              id="washingMachine"
              value="washingMachine"
            />
            <label htmlFor="washingMachine">Washing machine</label>
          </div>
        </div>
        <span className="show-all">Show all 15</span>
      </section>
    </>
  );
};

export default Filters;
