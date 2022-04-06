import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Cards from './components/Cards';

function App() {
  return (
    <>
      <Router>
        <NavBar />
          <Routes>
            <Route path="/brasiltour" exact element={<Home />} />
            <Route path="/Contact" exact element={<Contact />} />
            <Route path="/About" exact element={<About />} />
            <Route path="/cards" exact element={<Cards />} />
          </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;  
