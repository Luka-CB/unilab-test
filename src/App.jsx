import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/Footer";
import { useContext, useEffect } from "react";
import { PopupsContext } from "./context/features/popups";
import Flights from "./pages/services/Flights";
import Stays from "./pages/services/Stays";
import Details from "./pages/services/Details";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const { toggleLocationOption, toggleAuthPopup, toggleMenuPopup } =
    useContext(PopupsContext);

  const handleCloseModals = () => {
    toggleLocationOption(false);
    toggleAuthPopup(false);
    toggleMenuPopup(false);
  };

  return (
    <main className="app" onClick={handleCloseModals}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/services/flights"
          element={
            <ProtectedRoute>
              <Flights />
            </ProtectedRoute>
          }
        />
        <Route
          path="/services/stays"
          element={
            <ProtectedRoute>
              <Stays />
            </ProtectedRoute>
          }
        />
        <Route
          path="/services/stays/:id"
          element={
            <ProtectedRoute>
              <Details />
            </ProtectedRoute>
          }
        />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
