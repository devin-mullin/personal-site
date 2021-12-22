import { Link } from 'react-router-dom'

function NavBar(){

    return(
        <div>
            <h2>hello</h2>
            <button>
                <Link to='/about'>About</Link>
            </button>
        </div>
    )
}

export default NavBar