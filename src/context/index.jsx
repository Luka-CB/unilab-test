import AuthProvider from "./features/auth";
import FlightsProvider from "./features/flights";
import PopupsProvider from "./features/popups";
import StaysProvider from "./features/stays";
import WindowProvider from "./features/window";

const ContextProvider = ({ children }) => {
  return (
    <WindowProvider>
      <PopupsProvider>
        <FlightsProvider>
          <StaysProvider>
            <AuthProvider>{children}</AuthProvider>
          </StaysProvider>
        </FlightsProvider>
      </PopupsProvider>
    </WindowProvider>
  );
};

export default ContextProvider;
