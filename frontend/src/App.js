import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/layout/Header";
import Home from "./components/home/Home";

import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
