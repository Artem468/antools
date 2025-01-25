import './Header.css'
import icon from './assets/icon.svg'
import headerImg from './assets/headerImg.svg'
import search from './assets/search.svg'
import facebook from './assets/bx_bxl-facebook.svg'
import instagram from './assets/bx_bxl-instagram.svg'
import twitter from './assets/bx_bxl-twitter.svg'

function Header() {
    return (
        <>
            <nav>
                <div className="navLogo">
                    <img src={icon} alt=""/>
                    <p>antools.</p>
                </div>
                <div className="navLinks">
                    <a href="#">Home</a>
                    <select>
                        <option defaultChecked={true}>Categories</option>
                        <option>Category 1</option>
                        <option>Category 2</option>
                    </select>
                    <a href="#">My collections</a>
                    <a href="#">Blog</a>
                </div>
                <div className="navAuth">
                    <a href="#">Login</a>
                    <a href="#">Sign Up</a>
                </div>
            </nav>
            <header>
                <p className="headerPrimary">Awesome tools for Designer & Developer<span>.</span></p>
                <p className="headerSecondary">Antool is a web collection of information on paid or free Design and
                    Development tools</p>
                <div className="headerSearch">
                    <div>
                        <img src={search} alt=""/>
                        <input placeholder="find more than 430+ tools..."/>
                        <button>Search</button>
                    </div>
                </div>
                <div className="headerSocial">
                    <a href="#">
                        <img src={facebook} alt=""/>
                    </a>
                    <a href="#">
                        <img src={instagram} alt=""/>
                    </a>
                    <a href="#">
                        <img src={twitter} alt=""/>
                    </a>
                </div>
                <img className="headerImg" src={headerImg} alt=""/>
            </header>
        </>
    )
}

export default Header