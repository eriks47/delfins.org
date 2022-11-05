import "../styles/globals.css";
import { DolphinProvider } from "../context/DolphinContext";
import { PostsProvider } from "../context/PostsContext";

function App({ Component, pageProps }) {
  return (
    <DolphinProvider>
      <PostsProvider>
        <Component {...pageProps} />
      </PostsProvider>
    </DolphinProvider>
  );
}
export default App;
