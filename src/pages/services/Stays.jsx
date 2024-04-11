import ServicesNav from "../../components/services/ServicesNav";
import PropertyTypes from "../../components/services/stays/PropertyTypes";
import Filters from "../../components/services/stays/filters/Filters";
import Search from "../../components/services/stays/search/Search";
import SearchResults from "../../components/services/stays/search/SearchResults";
import sliderIcon from "../../assets/icons/slider.svg";
import { useSearchParams, useLocation } from "react-router-dom";
import { useContext } from "react";
import { StaysContext } from "../../context/features/stays";
import Head from "../../components/Head";

const Stays = () => {
  const { data, totalStays, resultNum, setResultNum } =
    useContext(StaysContext);

  const { pathname } = useLocation();
  const routeName = pathname.split("/")[2];

  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  return (
    <main className="stays-container">
      <Head title="Stays" />
      <section className="nav">
        <ServicesNav routeName={routeName} />
      </section>
      <section className="search">
        <Search />
      </section>
      {search !== "1" ? (
        <section className="property-types">
          <PropertyTypes />
        </section>
      ) : (
        <section className="content">
          <aside className="filters">
            <Filters />
          </aside>
          <div className="search-results">
            <div className="header">
              <h1 className="info">
                Auckland, New Zealand: 2000 properties found
              </h1>
              <div className="sort">
                <img src={sliderIcon} alt="Slider Icon" />
                <span>sort by: popular</span>
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
              </div>
            </div>
            <div
              className="items"
              style={{ overflowY: resultNum > 5 && "scroll" }}
            >
              {data.map((item) => (
                <SearchResults key={item.id} item={item} />
              ))}
            </div>
            {data.length >= 5 ? (
              <button
                className="btn show-more_btn"
                onClick={() => setResultNum(resultNum + 5)}
                disabled={data.length === totalStays.length}
              >
                {data.length === totalStays
                  ? "No more results"
                  : "Show more results"}
              </button>
            ) : null}
          </div>
        </section>
      )}
    </main>
  );
};

export default Stays;
