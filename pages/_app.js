import { Provider } from "react-redux";
import { store } from "../redux/store";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="h-screen bg-gray-900 text-gray-100">
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
