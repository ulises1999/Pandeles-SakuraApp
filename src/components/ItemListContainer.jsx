import Cards from '../components/Cards'
const ItemListContainer= ({greeting}) =>{
    return(
        <>
            <h1 className="greeting">{greeting}</h1>
            <h3 className='subtittle'>Cafe en saquito</h3>
            <section className='cardsGalery cafes animate__animated animate__fadeInLeft'>
                <Cards tittle='titulo verde' src='public\images\verde.jpg' text='descripcion imagen verde'/>
                <Cards tittle='titulo naranja' src='public\images\naranja.jpg' text='descripcion imagen naranja'/>
                <Cards tittle='titulo azul' src='public\images\azuk.jpg' text='descripcion imagen azul'/>
            </section>
            <h3 className='subtittle'>Merch</h3>
            <section className='cardsGalery merch animate__animated animate__fadeInLeft'>
                <Cards tittle='titulo verde' src='public\images\verde.jpg' text='descripcion imagen verde'/>
                <Cards tittle='titulo naranja' src='public\images\naranja.jpg' text='descripcion imagen naranja'/>
                <Cards tittle='titulo azul' src='public\images\azuk.jpg' text='descripcion imagen azul'/>
            </section>
            <h3 className='subtittle'>Ropa</h3>
            <section className='cardsGalery ropa animate__animated animate__fadeInLeft'>
                <Cards tittle='titulo verde' src='public\images\verde.jpg' text='descripcion imagen verde'/>
                <Cards tittle='titulo naranja' src='public\images\naranja.jpg' text='descripcion imagen naranja'/>
                <Cards tittle='titulo azul' src='public\images\azuk.jpg' text='descripcion imagen azul'/>
            </section>
        </>
    )
}

export default ItemListContainer