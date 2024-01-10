const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <img src="../public/images/brand_logo.png" class="navbar-brand" alt="img" />
                    <div class="nav-items" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Menu</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Location</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                        
                    </div>
                    <button type="button" class="btn btn-danger login-btn">Login</button>
                </div>
            </nav>
        </>
    )
}

export default Header