import "../styles/global.scss";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Filter } from "../components/Filter";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <main>
        <Header />
        <Filter />
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
