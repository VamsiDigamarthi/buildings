import "./App.css";
import About from "./Components/About/About";
import Career from "./Components/Career/Career";
import Contact from "./Components/Contact/Contact";
import DetailOurProject from "./Components/DetailOurProject/DetailOurProject";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MainSection from "./Components/MainSection/MainSection";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/our-projects" element={<DetailOurProject />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
