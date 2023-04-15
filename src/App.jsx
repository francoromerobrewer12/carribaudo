import './styles/App.scss'
import Team from './views/Team'
import Home from './views/Home';
import Contact from './views/Contact';
import Navbar from './components/Navbar';
import Franchise from './views/Franchise'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
            <Navbar />
            <Routes>
              <Route path='/home' element={<Home />} />
              <Route path='/franchise' element={<Franchise />} />
              <Route path='/team' element={<Team />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
