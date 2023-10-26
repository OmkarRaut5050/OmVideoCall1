import './Footer.css'

const Footer = ()=>{
    return(
        <footer className="last">
            <div className="divfirst">
                <div className="subscribe">
                    <h1>Subscribe to our newsletter to stay in touch with the latest.</h1>
                    <div><input type="email" placeholder="Enter your Email"></input></div>
                </div>

                <div className="services">
                    <div>OUR SERVICES</div>
                    <div>PROJECTS</div>
                    <div>OPEN SOURCE</div>
                    <div>CONTACTS</div>
                    <div>BLOG</div>
                </div>

                <div className="contact">
                    <div className="opac">DROP US A LINE</div>
                    <div>mail@halo-lab.com</div>
                    <div className="opac">CALL US</div>
                    <div>+1 (213) 337-8573</div>
                </div>
            </div>

            <div className="foothr">
                <hr />
                <p>SHOW ALL SERVICES</p>
                <hr />
            </div>
        </footer>
    )
}

export default Footer