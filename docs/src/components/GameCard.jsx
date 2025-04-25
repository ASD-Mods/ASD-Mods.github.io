import "./GameCard.css"

import tempImage from '../assets/capsule_616x353.jpg'


const GameCard = () => {
  return (
    
    <a href="/game_page?id=12gf8y9uih" className="populargames-card">

        <img src={tempImage} alt="PLACEHOLDER" />
        <h3>PLACEHOLDER</h3>
        <p>💾 45,200 Downloads</p>

    </a>
  )
}

export default GameCard