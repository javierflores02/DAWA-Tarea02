const Titulo = (props) => {
    return(
    <div className="titulo d-flex justify-content-between">
        <p><b>{props.titulo}</b></p>
        <a target="_blank" href="https://www.tecsup.edu.pe/" rel="noreferrer">See all</a>
    </div>
    )
}

export default Titulo