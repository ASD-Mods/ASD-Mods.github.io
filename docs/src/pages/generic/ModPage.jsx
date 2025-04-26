import Customlinebreak from '../../components/CustomLineBreak.jsx'

import "./ModPage.css"

import tempImage from '../../assets/capsule_616x353.jpg'

const ModPage = () => {
  return (
    <>
    <div className='banner'>
      <img className='banner_image' src={tempImage} alt="Banner" />
    </div>
    <div className="title">
      <h1>MOD NAME</h1>
      <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium non quasi ipsum voluptate officia consequatur sint enim culpa autem earum nihil aperiam veniam blanditiis reprehenderit, maiores deserunt ad distinctio eligendi?</h3>
    </div>
    <Customlinebreak />

    </>
  )
}

export default ModPage