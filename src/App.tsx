import { Routes, Route, Router } from 'react-router-dom';
import { Admin, Footer, Blog, Offer, Features, Header, About } from './containers';
import { Location, Navbar } from './components';

import './App.css';

const App = () => (
  <>
      <Routes>
        <Route
          path="/admin"
          element={
            <Admin />
                          }
        />
        <Route
          path="/"
          element={(
            <>
              <div className="gradient__bg">
                <Navbar />
                <Header />
              </div>
              <About />
              <Features />
              <Offer />
              <Location />
              <Blog />
              <Footer />
            </>
          )}
        />
      </Routes>
      
    </>
);

export default App;
