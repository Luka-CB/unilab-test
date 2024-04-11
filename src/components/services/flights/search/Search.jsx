import { useNavigate } from "react-router-dom";
import closeIcon from "../../../../assets/icons/close.svg";

const Search = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate({
      pathname: "/services/flights",
      search: "?search=1",
    });
  };

  return (
    <>
      <div className="row1">
        <div className="col">
          <span>One-way</span>
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </div>
        <div className="col">
          <span>1 Adult</span>
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </div>
        <div className="col">
          <span>Economy</span>
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </div>
      </div>
      <div className="row2">
        <div className="input">
          <div className="col1">
            <small>From</small>
            <span>Tbilisi</span>
            <div className="icon">
              <img src={closeIcon} alt="close icon" />
            </div>
          </div>
          <div className="col2">+</div>
        </div>
        <div className="input">
          <div className="col1">
            <small>to</small>
            <span>Paris</span>
            <div className="icon">
              <i className="fa fa-chevron-down" aria-hidden="true"></i>
            </div>
          </div>
          <div className="col2">+</div>
        </div>
        <div className="input">
          <input type="date" />
        </div>
        <button className="btn search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </>
  );
};

export default Search;
