import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate({
      pathname: "/services/stays",
      search: "?search=1",
    });
  };

  return (
    <>
      <div className="row2">
        <div className="input">
          <div className="col1">
            <span>Choose city</span>
            <div className="icon">
              <i className="fa fa-chevron-down" aria-hidden="true"></i>
            </div>
          </div>
          <div className="col2">+</div>
        </div>
        <div className="input">
          <input type="date" />
        </div>
        <div className="input">
          <div className="col1">
            <span>2 Adults</span>
            <div className="icon">
              <i className="fa fa-chevron-down" aria-hidden="true"></i>
            </div>
          </div>
          <div className="col2">+</div>
        </div>
        <button className="btn search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </>
  );
};

export default Search;
