import Topbar from '../components/Topbar.jsx'
import Customlinebreak from '../components/CustomLineBreak.jsx'
import SideBySidePara from '../components/SideBySidePara.jsx'
import tempImage from '../assets/capsule_616x353.jpg'
import '../index.css'
import './Home.css'

const Home = () => {
  return (
    <>

      <Topbar/>

      <div className="hero">

            <h1>MODBUNKER</h1>
            <p>» The safest most high quality mods «</p>
            
        </div>
        
      <Customlinebreak />
      
      <section className="popular-mods">

            <h2>Most Popular Mods</h2>

            <div className="popularmods-grid">

                <div className="popularmod-card">

                    <img src={tempImage} alt="PLACEHOLDER" />
                    <h3>PLACEHOLDER</h3>
                    <p>💾 45,200 Downloads</p>

                </div>

                <div className="popularmod-card">

                    <img src={tempImage} alt="PLACEHOLDER" />
                    <h3>PLACEHOLDER</h3>
                    <p>💾 45,200 Downloads</p>

                </div>

                <div className="popularmod-card">

                    <img src={tempImage} alt="PLACEHOLDER" />
                    <h3>PLACEHOLDER</h3>
                    <p>💾 45,200 Downloads</p>
                    
                </div>

            </div>

        </section>

      <Customlinebreak />

      <p className="wesbite-info">
        <strong>Over 50,000 mods</strong> downloaded worldwide, trusted by <strong>thousands of players</strong> every day.<br />
        From <strong>magical biomes</strong> and <strong>custom dimensions</strong> to <strong>realistic vehicles</strong> and <strong>epic boss fights</strong>,<br />
        our content pushes the boundaries of what’s possible in your game.<br />
        Explore, download, and transform your gameplay with the <strong>highest quality mods</strong> on the internet.
        </p>

      <Customlinebreak />

      <SideBySidePara />

      <Customlinebreak />
      <Customlinebreak />
    </>
  )
}

export default Home