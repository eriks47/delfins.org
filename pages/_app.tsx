import "../styles/globals.css";
import { DolphinProvider } from "../context/DolphinContext";

function App({ Component, pageProps }) {
  return (
    <DolphinProvider>
      <Component {...pageProps} />
    </DolphinProvider>
  );
}
export default App;
