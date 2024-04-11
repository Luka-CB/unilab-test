import mapImg from "../../../../assets/images/map.png";

const SidePanel = () => {
  return (
    <>
      <div className="searched-by">
        <span id="title">Searched by:</span>
        <div className="inputs">
          <div className="input">
            <label>Destination</label>
            <input type="text" placeholder="Auckland, New Zealand" readOnly />
          </div>
          <div className="input">
            <label>Check-in date</label>
            <input
              type="text"
              placeholder="Thursday, February 1, 2024"
              readOnly
            />
          </div>
          <div className="input">
            <label>Check-out date</label>
            <input
              type="text"
              placeholder="Friday, February 9, 2024"
              readOnly
            />
          </div>
          <div className="input">
            <label>Persons</label>
            <input
              type="text"
              placeholder="2 Adults, 0 children, 1 room"
              readOnly
            />
          </div>
          <small>Total 8 days</small>
        </div>
      </div>

      <img src={mapImg} alt="map image" id="map" />

      <div className="facilities">
        <span id="title">All the facilities</span>
        <ul>
          <li>Private pool</li>
          <li>Terrace</li>
          <li>Kitchen</li>
          <li>1 Bedroom</li>
          <li>2 Bathrooms</li>
          <li>Kids play space</li>
          <li>Billiard room</li>
          <li>Private gym</li>
        </ul>
      </div>
    </>
  );
};

export default SidePanel;
