import './BecomeContibutor.css'

function BecomeContributor() {
    return (
        <section className="BecomeContributor">
            <p className="Title">Become a contributor?</p>
            <p className="Description">Join us and get tips & tricks to become a great Designer and Developer</p>
            <form method="POST" className="BecomeContributorInput">
                <input type="text" placeholder="Enter your name..."/>
                <input type="tel" placeholder="Enter your phone..."/>
                <input type="email" placeholder="Enter your email..."/>
                <button type="submit">Join Us</button>
            </form>


        </section>
    )
}

export default BecomeContributor;