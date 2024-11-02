const Carousel=(props)=>{
    return(
        <>
        <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="azul">
              <div>
                <img src="public/images/azuk.jpg" className="d-block " alt="saquito de cafe"/>
                <p className="precio">$12000</p>
              </div>
              <section className="textoSlider">
                <h2>Tokyo Blend</h2>
                <p>Una mezcla suave con toques de cacao y avellana. Perfecto para tus momentos de calma y reflexión. ¡Siente la esencia de Tokio en cada taza!</p>
              </section>
              <img className="logoSlider" src="public/images/logosinbackground.png" alt="Logo"/>
            </div>
          </div>
          <div className="carousel-item">
            <div className="naranja">
              <div>
                <img src= "public/images/naranja.jpg" className="d-block " alt="saquito de cafe"/>
                <p className="precio">$16000</p>
              </div>
              <section className="textoSlider">
                <h2>Japanese New Year</h2>
                <p>Celebra cada día como el Año Nuevo Japonés. Un café vibrante con notas cítricas y florales que revitalizarán tu espíritu. ¡Descubre la frescura en cada taza!</p>
              </section>
              <img className="logoSlider" src="public/images/logosinbackground.png" alt="Logo"/>
            </div>
          </div>
          <div className="carousel-item">
            <div className="verde">
              <div>
                <img src="public/images/verde.jpg" className="d-block " alt="saquito de cafe"/>
                <p className="precio">$20000</p>
              </div>
              <section className="textoSlider">
                <h2>Asia Pacifico</h2>
                <p>Disfruta del sabor único del Asia Pacífico. Notas de almendra y chocolate en cada sorbo. ¡Pruébalo y despierta tus sentidos!</p>
              </section>
              <img className="logoSlider" src="public/images/logosinbackground.png" alt="Logo"/>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
          </div>
        </>
    )
}

export default Carousel