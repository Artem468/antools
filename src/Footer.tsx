import './Footer.css'
import logo from './assets/icon.svg'

function Footer() {
    return (
        <footer>
            <div className="hr"></div>

            <div className="footerInfo">
                <div className="footerCopyright">
                    <div>
                        <img src={logo} alt="logo"/>
                        <p>antools.</p>
                    </div>
                    <p>Copyright 2021. Antools</p>
                    <p>Antool is a web collection of information on paid or free Design and Development tools</p>
                </div>
                <div>
                    <p>Contact Us</p>
                    <a href="#">+621987463</a>
                    <a href="#">M Building, No.10 A</a>
                    <a href="#">antools@awesome.com</a>
                </div>
                <div>
                    <p>Categories</p>
                    <a href="#">Design</a>
                    <a href="#">Development</a>
                </div>
                <div>
                    <p>Company Info</p>
                    <a href="#">About Us</a>
                    <a href="#">Our Partners</a>
                    <a href="#">Blog</a>
                </div>
            </div>

        </footer>
    )
}

export default Footer;