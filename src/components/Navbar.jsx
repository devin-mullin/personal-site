import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

function NavBar(){

    return(
        <Navbar>
        <h4>
            <Link to='/'> Home </Link>
        </h4>
          <h4>
                <Link to='/about'> About </Link>
            </h4>
            <span> </span>
            <h4>
                <Link to='/projects'> Projects </Link>
            </h4>
        </Navbar>
    )
}

export default NavBar