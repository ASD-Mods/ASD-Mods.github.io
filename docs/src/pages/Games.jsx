import GameCard from '../components/GameCard.jsx'
import '../index.css'
import './Games.css'
import SearchBar from '../components/SearchBar.jsx'
import Dropdown from '../components/Dropdown.jsx'

const Home = () => {
  const sortFilters = ["Downloads", "Date Added", "Mod Count"]

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

    <Dropdown items={sortFilters} />
    <SearchBar />

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