import "./App.css";
import HeroWithStickyNavbar from "./HeroWithStickyNavbar";
import AboutComponent from "./AboutComponent";
import Products from "./Products";
import Team from "./Team";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <HeroWithStickyNavbar />

      <AboutComponent />

      <Products />

      <Team />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
