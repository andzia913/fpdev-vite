import { Routes, Route } from 'react-router-dom';
import Admin  from './containers/admin/Admin';
import Turnkey from './pages/Turnkey';
import Home from './pages/Home';
import Layout from './components/Layout';
import NotFound from './pages/PageNotFound';
import ScrollToTop from './components/ScrollToTop';

const App = () => (
  <>
        <ScrollToTop />
      <Routes>
        <Route element={  <Layout />  }>
          <Route path="/" element={  <Home />  }/>
          <Route path="/wykonczenie-pod-klucz" element={  <Turnkey />  }/>
        </Route>
        <Route path="/admin" element={  <Admin />  }/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </>
);

export default App;
