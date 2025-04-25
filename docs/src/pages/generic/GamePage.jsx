import Customlinebreak from '../../components/CustomLineBreak.jsx'
import ModCard from '../../components/ModCard.jsx'

import "./GamePage.css"

import tempImage from '../../assets/capsule_616x353.jpg'

const GamePage = () => {
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