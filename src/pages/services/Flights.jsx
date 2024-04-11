import { useContext } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import Filters from "../../components/services/flights/filters/Filters";
import Search from "../../components/services/flights/search/Search";
import SearchResults from "../../components/services/flights/search/SearchResults";
import ServicesNav from "../../components/services/ServicesNav";
import { FlightsContext } from "../../context/features/flights";
import Head from "../../components/Head";

const Flights = () => {
  const { data, resultNum, setResultNum, totalFlights } =
    useContext(FlightsContext);

  const { pathname } = useLocation();
  const routeName = pathname.split("/")[2];

  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  return (
    <main className="flights-container">
      <Head title="Flights" />
      <section className="nav">
        <ServicesNav routeName={routeName} />
      </section>
      <section className="search">
        <Search />
      </section>
      {search === "1" ? (
        <section className="content">
          <aside className="filters">
            <Filters />
          </aside>
          <div className="search-result">
            <div
              className="items"
              style={{ overflowY: resultNum > 7 && "scroll" }}
            >
              {data.map((data) => (
                <SearchResults key={data.id} flight={data} />
              ))}
            </div>
            {data.length >= 7 ? (
              <button
                className="btn show-more_btn"
                onClick={() => setResultNum(resultNum + 7)}
                disabled={data.length === totalFlights}
              >
                {data.length === totalFlights
                  ? "No more results"
                  : "Show more results"}
              </button>
            ) : null}
          </div>
        </section>
      ) : null}
    </main>
  );
};

export default Flights;
