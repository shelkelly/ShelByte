import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Router>
      <div>

    <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/Portfolio" component={Portfolio} />
      </div>
    </Router>
  );
}

export default App;