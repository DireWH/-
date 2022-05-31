import React from "react";
import WAppfooter from "./components/app-footer";
import WAppHeader from "./components/app-header";
import { BrowserRouter } from 'react-router-dom'
import GetRoutes from "./router";
import store from "./store";
import { Provider} from 'react-redux'
import AppPlayer from "./pages/player/app-player-bar";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <h2><WAppHeader /></h2>
        <h2><GetRoutes /></h2>
        <h2><WAppfooter /></h2>
        <AppPlayer></AppPlayer>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
