const Cards = (props) => {
    return (
        <>
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={props.src}/>
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{props.tittle}<i className="material-icons right">more_vert</i></span>
                <a className="btn-floating halfway-fab waves-effect waves-light red btn-add-card"><i className="material-icons">add</i></a>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{props.tittle}<i className="material-icons right">close</i></span>
                <p>{props.text}</p>
            </div>
        </div>
      </>
    )
}

export default Cards