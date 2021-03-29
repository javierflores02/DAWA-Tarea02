const Nuevo = (props) => {
    return(
    <div className="from-country content">
        <img src={props.imagen} width="100%" alt="imagen"/>
        <p className="text-center nombre-artista"><b>{props.nombre}</b></p>
    </div>
    )
}

export default Nuevo