import './Brands.css'
import microsoft from './assets/logos_microsoft.svg'
import google from './assets/logos_google.svg'
import slack from './assets/logos_slack.svg'
import wordpress from './assets/logos_wordpress.svg'


function Brands() {
    return (
        <section className="Brands">
            <div className="redCircle"></div>
            <p>Trusted more than 150+ brand</p>
            <div>
                <img src={microsoft} alt=""/>
                <img src={google} alt=""/>
                <img src={slack} alt=""/>
                <img src={wordpress} alt=""/>
            </div>
        </section>
    )
}

export default Brands;