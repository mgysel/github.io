import Navbar from "./components/Navbar";
import Navigation from "./pages/Navigation";
import StoreProvider from "./helpers/context";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

function App() {

  const components = {
    Drawer: {
      variants: {
        alwaysOpen: {
          parts: ["dialog, dialogContainer"],
          dialog: {
            pointerEvents: "auto"
          },
          dialogContainer: {
            pointerEvents: "none"
          }
        }
      }
    }
  };

  const theme = extendTheme({
    components
  });

  return (
    <ChakraProvider theme={theme}>
      <StoreProvider>
        <Navbar />
        <Navigation />
      </StoreProvider>
    </ChakraProvider>
  );
}

export default App;
