import './MPopular.css'
import tempImage from './assets/capsule_616x353.jpg'

function PopularMods(){
    return (

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

    )
}

export default PopularMods