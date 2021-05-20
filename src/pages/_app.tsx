import "../styles/global.scss";

import { Header } from "../components/Header";
import { PlayerContextProvider } from "../context/PlayerContext";

import styles from "../styles/app.module.scss";

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvider>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
      </div>
    </PlayerContextProvider>
  );
}

export default MyApp;
