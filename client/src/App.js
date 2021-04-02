import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>

    <NavBar />
          <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;