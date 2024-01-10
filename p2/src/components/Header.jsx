const Header = () => {
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand contact">Contact Us</a>
                    <div  id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-items">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                        </ul>
                       
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;