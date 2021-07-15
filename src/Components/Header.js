import { Link } from 'react-router-dom'

const Header = () => {
    

    return (
        <nav>
            <Link className="header-logo" to="/">
        KVWN News
      </Link>
      <div className="nav__button-container">
      <Link to="/users" className="navButton">Users</Link>
       
      </div>

        </nav>
    )
}

export default Header