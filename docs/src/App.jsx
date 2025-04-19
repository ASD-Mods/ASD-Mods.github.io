/* IMPORTS BELOW */

import Topbar from './components/Topbar.jsx'
import Hero from './components/Hero.jsx'
import MPopular from './components/MPopular.jsx'
import Customlinebreak from './components/CustomLineBreak.jsx'
import HomePM from './components/HomePM.jsx'
import './index.css'

function App() {
  return (
    <>

      <Topbar/>
      <Hero/>
      <Customlinebreak />
      <MPopular/>
      <Customlinebreak />
      <HomePM />
      <Customlinebreak />

    </>
  )
}

export default App