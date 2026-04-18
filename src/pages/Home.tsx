import Header from "../containers/Header";
import About from "../containers/About";
import Features from "../containers/Features";
import Offer from "../containers/Offer";
import Blog from "../containers/Blog";
import Location from "../components/Location";
import Garage from "../containers/Garage";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Apartamenty Kaktusowa Polkowice - nowe mieszkania</title>
          <meta
            name="description"
            content="Nowe mieszkania w Polkowicach. Apartamenty Kaktusowa. Komfort, przestrzeń i świetna lokalizacja. Sprawdź naszą ofertę!"
          />
      </Helmet>
      <div className="gradient__bg">
        <Header />
      </div>
      <About />
      <Features />
      <Offer />
      <Garage />
      <Location />
      <Blog />
    </>
  )
}

export default Home;