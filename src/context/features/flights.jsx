import { createContext, useEffect, useState } from "react";
import { flights } from "../../data";

export const FlightsContext = createContext();

const FlightsProvider = ({ children }) => {
  const [flightsData, setFlightsData] = useState([]);

  const [filteredByStopsData, setFilteredByStopsData] = useState([]);
  const [filteredByPriceData, setFilteredByPriceData] = useState([]);

  const [resultNum, setResultNum] = useState(7);
  const [newFlightsData, setNewFlightsData] = useState([]);

  const handleStopsFilter = (stops) => {
    const data = filteredByPriceData.length > 0 ? filteredByPriceData : flights;
    const newArr = data.filter((flight) => stops.includes(flight.stops));
    setFlightsData(newArr);
    setFilteredByStopsData(newArr);
  };

  const handleTimesFilter = (times) => {
    const newArr = flights.filter(
      (flight) =>
        flight.takeOff === times.takeOff && flight.landing === times.landing
    );
    setFlightsData(newArr);
  };

  const handlePriceFilter = (price) => {
    const data = filteredByStopsData.length > 0 ? filteredByStopsData : flights;
    const newArr = data.filter(
      (flight) => flight.price >= price.min && flight.price <= price.max
    );
    setFlightsData(newArr);
    setFilteredByPriceData(newArr);
  };

  const totalFlights =
    flightsData.length > 0 ? flightsData.length : flights.length;

  useEffect(() => {
    const newData =
      flightsData.length > 0
        ? flightsData.slice(0, resultNum)
        : flights.slice(0, resultNum);
    setNewFlightsData(newData);
  }, [flightsData, resultNum]);

  const contextData = {
    setResultNum,
    data: newFlightsData,
    resultNum,
    totalFlights,
    handleStopsFilter,
    handleTimesFilter,
    handlePriceFilter,
  };

  return (
    <FlightsContext.Provider value={contextData}>
      {children}
    </FlightsContext.Provider>
  );
};

export default FlightsProvider;
