import './Navbar.css'

function Navbar(){
    return(
        <div className="Navbar">
            <nav className="navbar">
                <article className="Navart">
                    <div className="navdiv">Home</div>
                    <div className="navdiv">About</div>
                    <div className="navdiv">Gallary</div>
                    <div className="navdiv">Contact</div>
                    <div className="navdiv">Services</div>
                    <div className="navdiv"><i class="fa-solid fa-cart-shopping"></i></div>
                </article>
            </nav>
        </div>
    )
}

export default Navbar