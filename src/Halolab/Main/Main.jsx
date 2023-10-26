
import './Main.css'
import Image1 from '../Halolab_images/logo.svg'

const Main = () =>{
    return(
        <section className="Section">
            <div className="DivFirst"> Stop the War. Support Ukraine. <a href="">Make a donation</a> to United24 program.</div>
            <div className="NavbarMain">
                <div className="NavbarInner">
                    <div className="NavLogo">
                        <img src={Image1} alt=""></img>
                    </div>

                    <div className="NavMid ">
                        <nav className="Navbar">
                            <article>
                                <div><a href="#">SERVICES <i class="fa-solid fa-caret-down"></i></a></div>
                                <div><a href="#">PROJECTS</a></div>
                                <div><a href="#">OPEN SOURCE</a></div>
                                <div><a href="#">OUR BLOG</a></div>
                            </article>
                        </nav>
                    </div>

                    <div className="NavButton">
                        <p>GET IN TOUCH</p>
                        <div className="Pencil"><i class="fa-solid fa-pencil"></i></div>
                    </div>
                </div>
                <hr />
            </div>

            <div className="path">ALL PROJECTS / RAVEN.GG</div>
            <div className="Heading">
                <h1>RAVEN.GG — THE LEADING BRAND FOR CUSTOM ESPORTS CLOTHING DESIGN</h1>
                <div className="Backup"></div>
            </div>

            <div className="NavDown">
                <div className="clock">
                    <div><i class="fa-regular fa-clock"></i></div>
                    <div>2020–2021</div>
                </div>
                <div>INDUSTRY:E-COMMERCE</div>
                <div className="download">
                    <div><i class="fa-solid fa-circle-down"></i></div>
                    <div>SCROLL</div>
                </div>
            </div>
        </section>
    )
}

export default Main