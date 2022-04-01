import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Footer from './components/Footer';
import Cards from './components/Cards';

function App() {
  return (
    <>
      <Router>
        <NavBar />
          <Routes>
            <Route path="/brasiltour" exact element={<Home />} />
            <Route path="/services" exact element={<Services />} />
            <Route path="/products" exact element={<Products />} />
            <Route path="/cards" exact element={<Cards />} />
          </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;  
