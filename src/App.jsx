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
import { Gallery } from "./components/gallery";
import { Team } from "./components/Team";

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
      {/* <Solutions data={landingPageData.Solutions} /> */}
      <Services data={landingPageData.Services} />
      <Regions data={landingPageData.Regions} />
      <Team data={landingPageData.Team} />
      <Gallery data={landingPageData.Gallery} />
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      <About data={landingPageData.About} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
