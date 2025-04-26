/* IMPORTS BELOW */
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Topbar from './components/Topbar.jsx';
import Footer from './components/Footer.jsx';

import NotFound from './pages/NotFound';

import Home from './pages/Home';
import Games from './pages/Games';

import MCHome from './pages/modcreators/Home';

import GamePage from './pages/generic/GamePage';
import ModPage from './pages/generic/ModPage';

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
        <Route path="/mod_page" element={<ModPage />} />

        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App