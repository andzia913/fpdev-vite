import Header from "../containers/Header";
import About from "../containers/About";
import Features from "../containers/Features";
import Offer from "../containers/Offer";
import Blog from "../containers/Blog";
import Location from "../components/Location";
import Garage from "../containers/Garage";

const Home = () => {
  return (
                <>
              <div className="gradient__bg">
                <Header />
              </div>
              <About />
              <Features />
              <Offer />
              <Garage/>
              <Location />
              <Blog />
            </>
  )
}

export default Home;