import { useEffect, useState } from "react";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Header } from "./components/header";
import { Navigation } from "./components/navigation";
import { Services } from "./components/services";
import { Regions } from "./components/regions";
import { Solutions } from "./components/solutions";
import JsonData from "./data/data.json";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Solutions data={landingPageData.Solutions} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Regions data={landingPageData.Regions} />
      {/* <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} /> */}
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
