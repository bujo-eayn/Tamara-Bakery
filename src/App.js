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

/* TO DO
- Incorporate the changes suggested by lily +
- Make entire Web Mobile useable
- Add a form to the contact page for users to send messages directly to the team. Netlify Form +

*/