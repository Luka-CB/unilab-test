import { useLocation, useParams } from "react-router-dom";
import ServicesNav from "../../components/services/ServicesNav";
import SidePanel from "../../components/services/stays/details/SidePanel";
import ItemInfo from "../../components/services/stays/details/ItemInfo";
import { useContext, useEffect } from "react";
import { StaysContext } from "../../context/features/stays";
import Head from "../../components/Head";

const Details = () => {
  const { handleGetStay, stay } = useContext(StaysContext);

  const { pathname } = useLocation();
  const routeName = pathname.split("/")[2];

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    if (id) {
      handleGetStay(id);
    }
  }, [id]);

  return (
    <main className="details-container">
      <Head title={`New Zealand ${stay?.propertyType}`} />
      <section className="nav">
        <ServicesNav routeName={routeName} />
      </section>
      <section className="content">
        <aside className="side-panel">
          <SidePanel />
        </aside>
        <div className="item">
          <ItemInfo item={stay} />
        </div>
      </section>
    </main>
  );
};

export default Details;
