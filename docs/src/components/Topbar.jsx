import './Topbar.css'

function Topbar (){
    const path = window.location.pathname;

    return (

        <div className="topbar">
            <div className="topbar-left">
                <div className="logo-circle">LOGO</div>
                <span className="brand">MODBUNKER</span>
            </div>
            <div className="topbar-middle">
                <div className='container'>
                    <a className={path==="/" ? "topbar-link active" : "topbar-link"} href="/">Home</a>   
                    <a className={path==="/Games" ? "topbar-link active" : "topbar-link"} href="/Games">Games</a>   
                    <a className={path==="/Modders" ? "topbar-link active" : "topbar-link"} href="/Modders">Modders</a>   
                    <a className={path==="/Help" ? "topbar-link active" : "topbar-link"} href="/Help">Help</a>   
                </div>
            </div>
            <div className="topbar-right">
                <div className="menu-icon">☰</div>
            </div>
        </div>

    );
}

export default Topbar