import CartWidget from "./CartWidget"
const Navbar= () => {
    return(
        <nav className="navContainer">
            <a className="aLink">Sakura</a>
            <a className="aLink">Nuevos Ingresos</a>
            <a className="aLink">Ofertas</a>
            <a className="aLink">Mas Vendidos</a>
            <CartWidget counter={15}/>
        </nav>
    )
}

export default Navbar