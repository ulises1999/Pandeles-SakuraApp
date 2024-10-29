const Cards = (props) => {
    return (
        <div className="cardContainer">
            <img src={props.imagen} className="imagenCard" alt="imagen del producto" />
            <p className="textoCard">{props.text}</p>
        </div>
    )
}

export default Cards