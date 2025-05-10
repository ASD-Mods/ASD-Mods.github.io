import Customlinebreak from '../../components/CustomLineBreak.jsx'
import ModCard from '../../components/ModCard.jsx'
import SearchBar from '../../components/SearchBar.jsx'
import Dropdown from '../../components/Dropdown.jsx'

import "./GamePage.css"

import tempImage from '../../assets/capsule_616x353.jpg'

const GamePage = () => {
  // Make these filters more "intuitive"
  const sortOrder = ["All (⬆)", "Downloads (⬆)", "Date Added (⬆)", "Likes (⬆)", "Downloads (⬇)", "Date Added (⬇)", "Likes (⬇)"]
  const sortFilters = ["Any", "Gameplay", "Graphical", "Content", "Conversion", "Utility", "AI / NPC", "Sound", "Multiplayer", "World", "Performance"]

  return (
    <>
    <div className='banner'>
      <img className='banner_image' src={tempImage} alt="Banner" />
    </div>
    <div className="title">
      <h1>GAME NAME</h1>
      <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium non quasi ipsum voluptate officia consequatur sint enim culpa autem earum nihil aperiam veniam blanditiis reprehenderit, maiores deserunt ad distinctio eligendi?</h3>
    </div>
    <Customlinebreak />

    
    <SearchBar fillerText="Search mods..." ord={sortOrder} fil={sortFilters} />


    <div className='mods-grid'>
      <ModCard /> <ModCard /> <ModCard /> <ModCard />
      <ModCard /> <ModCard /> <ModCard /> <ModCard />
      <ModCard /> <ModCard /> <ModCard /> <ModCard />
    </div>

    <div className='page-nav'>
      ADD PAGE NAV
    </div>
    </>
  )
}

export default GamePage