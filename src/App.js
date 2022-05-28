import React from "react";
import WAppfooter from "./components/app-footer";
import WAppHeader from "./components/app-header";
import {BrowserRouter} from 'react-router-dom'
import GetRoutes from "./router";
function App() {
  return (
    <BrowserRouter>
      <h2><WAppHeader/></h2>
      <h2><GetRoutes/></h2>
      <h2><WAppfooter/></h2>
    </BrowserRouter>
  );
}

export default App;
