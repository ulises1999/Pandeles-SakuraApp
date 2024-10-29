import CartWidget from "./CartWidget"
const Navbar= () => {
    return(
        <nav className="navContainer">
            <a href="./App" className="aLink waves-effect waves-block waves-light">Sakura</a>
            <a href="./App" className="aLink waves-effect waves-block waves-light">Nuevos Ingresos</a>
            <a href="./App" className="aLink waves-effect waves-block waves-light">Ofertas</a>
            <a href="./App" className="aLink waves-effect waves-block waves-light">Mas Vendidos</a>
            <CartWidget counter={15}/>
        </nav>
    )
}

export default Navbar