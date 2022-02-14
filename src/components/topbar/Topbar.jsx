import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons"


export default function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={`topbar ${menuOpen ? 'active':''}`}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">HaChiKo</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+84 076 737 3532</span>
                    </div>

                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>phamduynhan16121995@gmai.com</span>
                    </div>
                </div>
              
                <div className="right">
                    {/* set thuộc tính Onclick cho icon menu */}
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>             
                    </div>
                </div>
            </div>
        </div>
    )
}
