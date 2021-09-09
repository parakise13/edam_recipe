import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/recipe/:key" component={Detail} />
    </HashRouter>
  );
}

export default App;
