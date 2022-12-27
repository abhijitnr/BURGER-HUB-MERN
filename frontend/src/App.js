import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/layout/Header";
import Home from "./components/home/Home";

import "./styles/app.scss";
import "./styles/header.scss";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
