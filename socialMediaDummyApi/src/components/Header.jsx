
const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="myNav">
          <ul className="myNavUl">
            <li className="navLi navLiSelected">Home</li>
            <li className="navLi">Features</li>
            <li className="navLi">Pricing</li>
            <li className="navLi">FAQS</li>
            <li className="navLi">About</li>
          </ul>
        </nav>
        <div className="myLogin">
          <input type="text" className="myLoginInput" />
          <button type="button" className="btn btn-outline-light">Login</button>
          <button type="button" className="btn btn-warning">Sign up</button>
        </div>
      </header>
    </>
  )
}

export default Header;