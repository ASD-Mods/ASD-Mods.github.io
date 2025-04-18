import './Topbar.css'

function Topbar (){
    return (

        <div className="topbar">
            <div className="topbar-left">
                <div className="logo-circle">LOGO</div>
                <span className="brand">MODBUNKER</span>
            </div>
            <div className="topbar-right">
                <div className="menu-icon">☰</div>
            </div>
        </div>

    );
}

export default Topbar