import "../styles/global.scss";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
