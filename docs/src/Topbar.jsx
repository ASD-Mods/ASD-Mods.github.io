import './Topbar.css'

function Topbar (){
    return (

        <div className="topbar">
            <div className="topbar-left">
                <div className="logo-circle">LOGO</div>
                <span className="brand">MODBUNKER</span>
            </div>
            <div className="topbar-middle">
                <div className='container'>
                    <a className='topbar-link active' href="#Home">Home</a>   
                    <a className='topbar-link' href="#Games">Games</a>   
                    <a className='topbar-link' href="#Modders">Modders</a>   
                    <a className='topbar-link' href="#Help">Help</a>   
                </div>
            </div>
            <div className="topbar-right">
                <div className="menu-icon">☰</div>
            </div>
        </div>

    );
}

export default Topbar