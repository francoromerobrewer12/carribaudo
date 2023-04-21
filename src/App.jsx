import './styles/App.scss'
import Team from './views/Team'
import Home from './views/Home';
import Contact from './views/Contact';
import Navbar from './components/Navbar';
import Franchise from './views/Franchise'
import Footer from './components/Footer';
import { configuration } from './configuration';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const { home, view_one, view_two, contact } = configuration.navigation

  return (
    <Router>
        <div className="App">
            <Navbar />
            <Routes>
              <Route exact path={home.link} element={<Home />} />
              <Route path={view_one.link} element={<Franchise />} />
              <Route path={view_two.link} element={<Team />} />
              <Route path={contact.link} element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    </Router>
  );
}

export default App;
