import { createContext, useState } from "react";

export const PopupsContext = createContext();

const PopupsProvider = ({ children }) => {
  const [isLocationOptionOpen, setIsLocationOptionOpen] = useState(false);
  const [isOfferOptionOpen, setIsOfferOptionOpen] = useState(false);
  const [isDateOptionOpen, setIsDateOptionOpen] = useState(false);
  const [isPeronsOptionOpen, setIsPersonsOptionOpen] = useState(false);

  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);

  const toggleLocationOption = (value) => setIsLocationOptionOpen(value);
  const toggleOfferOption = (value) => setIsOfferOptionOpen(value);
  const toggleDateOption = (value) => setIsDateOptionOpen(value);
  const togglePersonsOption = (value) => setIsPersonsOptionOpen(value);

  const toggleAuthPopup = (value) => setIsAuthPopupOpen(value);
  const toggleMenuPopup = (value) => setIsMenuPopupOpen(value);

  const contextData = {
    isLocationOptionOpen,
    toggleLocationOption,
    isAuthPopupOpen,
    toggleAuthPopup,
    isMenuPopupOpen,
    toggleMenuPopup,
    toggleOfferOption,
    isOfferOptionOpen,
    toggleDateOption,
    isDateOptionOpen,
    togglePersonsOption,
    isPeronsOptionOpen,
  };

  return (
    <PopupsContext.Provider value={contextData}>
      {children}
    </PopupsContext.Provider>
  );
};

export default PopupsProvider;
