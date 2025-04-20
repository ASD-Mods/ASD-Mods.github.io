/* IMPORTS BELOW */
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import Games from './pages/Games';

import MCHome from './pages/modcreators/Home';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Games" element={<Games />} />
        <Route path="/modcreators/home" element={<MCHome />} />
      </Routes>
    </Router>
    </>
  )
}

export default App