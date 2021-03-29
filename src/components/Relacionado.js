const Relacionado = (props) => {
    return(
    <div className="d-flex justify-content-end">
        <div className="d-flex card-relacionado">
            <div className="d-flex align-items-center" style={{width: '30%'}}>
                <div className="content p-1 relacionado-contenedor-imagen">
                    <img src={props.imagen} width="100%" alt="imagen"/>
                </div>
            </div>
            <div className="relacionado-contenedor-texto">
                <div>
                    <p className="m-0 relacionado-nombre" style={{color: '#29a3a3'}}><b>{props.nombre}</b></p>
                    <p className="m-0 relacionado-descripcion">{props.descripcion}</p>
                </div>
            </div>
            <div style={{width: '30%',  display: 'flex', justifyContent: 'space-between', marginRight: '10px'}}>
                
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="play-circle" style={{color: 'gray', width:'25%'}}className="svg-inline--fa fa-play-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"></path></svg>

                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" width="25%" className="svg-inline--fa fa-heart fa-w-16" role="img" style={{color: 'gray', width:'25%'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>

                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-h" style={{color: 'gray', width:'25%'}} className="svg-inline--fa fa-ellipsis-h fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path></svg>
        
            </div>
        </div>
        
    </div>
    )
}

export default Relacionado