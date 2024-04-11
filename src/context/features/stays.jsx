import { createContext, useEffect, useState } from "react";
import { stays } from "../../data";

export const StaysContext = createContext();

const StaysProvider = ({ children }) => {
  const [staysData, setStaysData] = useState([]);
  const [newStaysData, setNewStaysData] = useState([]);

  const [resultNum, setResultNum] = useState(5);

  const handleFilter = (ratings) => {
    const newArr = stays.filter((stay) => ratings.includes(stay.rating));
    setStaysData(newArr);
  };

  const totalStays = staysData.length > 0 ? staysData.length : stays.length;

  useEffect(() => {
    const newData =
      staysData.length > 0
        ? staysData.slice(0, resultNum)
        : stays.slice(0, resultNum);

    setNewStaysData(newData);
  }, [staysData, resultNum]);

  const [stay, setStay] = useState({});

  const handleGetStay = (id) => {
    const stay = stays.find((stay) => stay.id === +id);
    setStay(stay);
  };

  const contextData = {
    data: newStaysData,
    resultNum,
    setResultNum,
    totalStays,
    handleFilter,
    handleGetStay,
    stay,
  };

  return (
    <StaysContext.Provider value={contextData}>
      {children}
    </StaysContext.Provider>
  );
};

export default StaysProvider;
