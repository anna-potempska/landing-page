function Header() {
    return (
    <>
        <header className=" text-white">
            <nav className="navbar background-primary">
                <div className="container">
                    <h1 className="site-title text-white">My Company</h1>
                    <ul className="menu gap-1 ">
                        <li><a href="#features">Features</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    </>
    )
    
}

export default Header