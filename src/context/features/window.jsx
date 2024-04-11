import { createContext, useEffect, useState } from "react";

export const WindowContext = createContext();

const WindowProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const contextData = {
    windowWidth,
  };

  return (
    <WindowContext.Provider value={contextData}>
      {children}
    </WindowContext.Provider>
  );
};

export default WindowProvider;
