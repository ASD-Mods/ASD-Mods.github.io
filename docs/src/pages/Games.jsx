import GameCard from '../components/GameCard.jsx'
import '../index.css'
import './Games.css'
import SearchBar from '../components/SearchBar.jsx'

const Home = () => {
  return (
    <>

    <div>
      <div className='searchbar'>
        seach for games
      </div>
      
      <div className='filters'>
        filters which games are shown (only show adventure etc)
      </div>
      
      <div className='sort-order'>
        order that the games sorted in (most popular first etc)
      </div>
    </div>

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