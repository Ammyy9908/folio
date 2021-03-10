import "../styles/globals.css";

import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [isNav, setNav] = useState(false);
  return <Component {...pageProps} isNav={isNav} setNav={setNav} />;
}

export default MyApp;
