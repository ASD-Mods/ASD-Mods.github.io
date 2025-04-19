/* IMPORTS BELOW */

import Topbar from './components/Topbar.jsx'
import MPopular from './components/MPopular.jsx'
import Customlinebreak from './components/CustomLineBreak.jsx'
import './index.css'
import './main.css'

function App() {
  return (
    <>

      <Topbar/>

      <div className="hero">

            <h1>MODBUNKER</h1>
            <p>» The safest most high quality mods «</p>
            
        </div>
        
      <Customlinebreak />
      <MPopular/>
      <Customlinebreak />

      <p className="wesbite-info">
        <strong>Over 50,000 mods</strong> downloaded worldwide, trusted by <strong>thousands of players</strong> every day.<br />
        From <strong>magical biomes</strong> and <strong>custom dimensions</strong> to <strong>realistic vehicles</strong> and <strong>epic boss fights</strong>,<br />
        our content pushes the boundaries of what’s possible in your game.<br />
        Explore, download, and transform your gameplay with the <strong>highest quality mods</strong> on the internet.
        </p>

      <Customlinebreak />

    </>
  )
}

export default App