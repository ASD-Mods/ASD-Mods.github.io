import logo from '../assets/logo_blank.png'

import './Topbar.css'

function Topbar (){
    const path = window.location.pathname;

    return (

        <div className="topbar">
            <div className="topbar-left">
                <div className="logo-circle"><img src={logo} alt="LOGO" /></div>
                <span className="brand">MODBUNKER</span>
            </div>
            <div className="topbar-middle">
                <div className='container'>
                    <a className={path==="/" ? "topbar-link active" : "topbar-link"} href="/">Home</a>   
                    <a className={path==="/games" ? "topbar-link active" : "topbar-link"} href="/games">Games</a>   
                    <a className={path==="/modders" ? "topbar-link active" : "topbar-link"} href="/modders">Modders</a>   
                    <a className={path==="/help" ? "topbar-link active" : "topbar-link"} href="/help">Help</a>   
                </div>
            </div>
            <div className="topbar-right">
                <a href="/login" className="auth-button">Login</a>
                <a href="/signup" className="auth-button signup">Sign Up</a>
            </div>
        </div>

    );
}

export default Topbar