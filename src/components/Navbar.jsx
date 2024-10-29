import CartWidget from "./CartWidget"
const Navbar= () => {
    return(
        <nav className="navContainer">
            <a href="./App" className="aLink">Sakura</a>
            <a href="./App" className="aLink">Nuevos Ingresos</a>
            <a href="./App" className="aLink">Ofertas</a>
            <a href="./App" className="aLink">Mas Vendidos</a>
            <CartWidget counter={15}/>
        </nav>
    )
}

export default Navbar