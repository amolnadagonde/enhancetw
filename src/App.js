import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import OurTeam from "./components/OurTeam";
import ContactUs from "./components/ContactUs";

import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Services />
      <AboutUs />
      <OurTeam />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
