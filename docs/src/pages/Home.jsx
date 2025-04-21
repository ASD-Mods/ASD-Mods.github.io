import Topbar from '../components/Topbar.jsx'
import Customlinebreak from '../components/CustomLineBreak.jsx'
import SideBySidePara from '../components/SideBySidePara.jsx'
import Footer from '../components/Footer.jsx'
import tempImage from '../assets/capsule_616x353.jpg'
import '../index.css'
import './Home.css'

const Home = () => {
  return (
    <>
      <div className="hero">

            <h1>MODBUNKER</h1>
            <p>» The safest most high quality mods «</p>
            
        </div>
        
      <Customlinebreak />
      
      <section className="popular-games">

            <h2>Most Popular Games</h2>

            <div className="populargames-grid">

                <div className="populargames-card">

                    <img src={tempImage} alt="PLACEHOLDER" />
                    <h3>PLACEHOLDER</h3>
                    <p>💾 45,200 Downloads</p>

                </div>

                <div className="populargames-card">

                    <img src={tempImage} alt="PLACEHOLDER" />
                    <h3>PLACEHOLDER</h3>
                    <p>💾 45,200 Downloads</p>

                </div>

                <div className="populargames-card">

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

      <SideBySidePara Title="Many different games that you can chose from.">
        Choose from over 23048702537 different games for you to play, mod, and
        enjoy.
      </SideBySidePara>

      <Customlinebreak />

<div className='fc-container'>
      <div className='for-creators'>
        <h1 className='fc-title'>For Creators</h1>
        <h3>Create mods for everyone to enjoy</h3>

        <Customlinebreak />

        <div className="fc-grid">

                <div className="fc-card">

                    <h3>Discovery</h3>
                    <p>Get your project discovered by thousands of users through search, our home page, Discord server, and more ways to come in the future!</p>

                </div>

                <div className="fc-card">

                    <h3>Team Management</h3>
                    <p>Invite your teammates and manage roles and permissions with ease</p>

                </div>

                <div className="fc-card">
                    <h3>Constantly Evolving</h3>
                    <p>Get the best modding experience possible with constant updates from the Modrinth team</p>
                </div>

            </div>
        
            <Customlinebreak />

            <h3 className='fc-title'>Learn more at out dedicated modder section</h3>
            <a className='fc-learn-more' href="/modcreators/home">Learn More</a>
            
            <Customlinebreak />
      </div>
      </div>
    </>
  )
}

export default Home