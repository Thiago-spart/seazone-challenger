import "../styles/global.scss";

import { Header } from "../components/Header";
import { PlayerContextProvider } from "../context/PlayerContext";

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvider>
      <div>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
      </div>
    </PlayerContextProvider>
  );
}

export default MyApp;
