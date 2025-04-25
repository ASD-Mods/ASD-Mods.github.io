/* IMPORTS BELOW */
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Topbar from './components/Topbar.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home';
import Games from './pages/Games';
import GamePage from './pages/generic/GamePage';
import MCHome from './pages/modcreators/Home';


function App() {
  return (
    <>
    <Topbar />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />

        <Route path="/modcreators_home" element={<MCHome />} />
        
        <Route path="/game_page" element={<GamePage />} />
      </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App