/** @format */

import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
// import Footer from "./Footer";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="page-top">
        <Navbar />
      </div>
      <div className="page-content">
        <About />
        <Projects />
        <Contact />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
