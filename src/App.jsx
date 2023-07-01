import './styles/App.scss'
import Gallery from './views/Gallery'
import Home from './views/Home';
import Contact from './views/Contact';
import Navbar from './components/Navbar';
import Experience from './views/Experience'
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
        <div className="App">
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    </Router>
  );
}

export default App;
