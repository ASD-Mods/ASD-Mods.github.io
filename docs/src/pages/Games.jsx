import GameCard from '../components/GameCard.jsx'
import '../index.css'
import './Games.css'
import SearchBar from '../components/SearchBar.jsx'
import Dropdown from '../components/Dropdown.jsx'

const Home = () => {
  // Make these filters more "intuitive"
  const sortOrder = ["All (⬆)", "Downloads (⬆)", "Date Added (⬆)", "Mod Count (⬆)", "Downloads (⬇)", "Date Added (⬇)", "Mod Count (⬇)"]
  const sortFilters = ["Any", "Action", "Adventure", "RPG", "Strategy", "Simulation", "Puzzle", "Sports", "Racing", "Fighting", "Horror", "Stealth", "Platformer"]

  return (
    <>

    <div>
      <div className='filters'>
        filters which games are shown (only show adventure etc)
      </div>
      
      <div className='sort-order'>
        order that the games sorted in (most popular first etc)
      </div>
    </div>

    <SearchBar fillerText="Search games..." ord={sortOrder} fil={sortFilters} />

    <div className="games-grid">
        <GameCard /> <GameCard /> <GameCard /> <GameCard /> <GameCard />
        <GameCard /> <GameCard /> <GameCard /> <GameCard /> <GameCard />
        <GameCard /> <GameCard /> <GameCard /> <GameCard /> <GameCard />
        <GameCard /> <GameCard /> <GameCard /> <GameCard /> <GameCard />
    </div>
    

    <div className='page-nav'>
      ADD PAGE NAV
    </div>

    </>
  )
}

export default Home