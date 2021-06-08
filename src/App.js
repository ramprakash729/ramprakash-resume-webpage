import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/js/dist/collapse";
import Particles from "react-particles-js";
import Navbars from "./components/Navbars";
import Header from "./components/Header";
import Aboutme from "./components/Aboutme";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Porfolio";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 700,
              },
            },
            shape: {
              type: "square",
              stroke: {
                width: 6,
                color: "#f9ab00",
              },
            },
          },
        }}
      ></Particles>
      <Navbars></Navbars>
      {/* <Navbar></Navbar> */}
      <Header></Header>
      <Aboutme></Aboutme>
      <Services></Services>
      <Experience></Experience>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </div>
  );
}

export default App;
