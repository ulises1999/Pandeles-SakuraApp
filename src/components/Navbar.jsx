import CartWidget from "./CartWidget"
import {NavLink} from 'react-router-dom'
const Navbar= () => {
    return(
        <nav className="navContainer">
            <NavLink  className="aLink waves-effect waves-block waves-light" to='/'><img className="logoNav" src="public/images/logosinbackground.png" alt="logo sakura" /></NavLink>
            <NavLink  className="aLink waves-effect waves-block waves-light" to='/productos/Cocina'>Cocina</NavLink>
            <NavLink  className="aLink waves-effect waves-block waves-light" to='/productos/Baño'>Baño</NavLink>
            <NavLink  className="aLink waves-effect waves-block waves-light" to='/productos/Living'>Living</NavLink>
            <NavLink  className="aLink waves-effect waves-block waves-light" to='/Cart'><CartWidget counter={15}/></NavLink>
        </nav>
    )
}

export default Navbar