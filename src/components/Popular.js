const Popular = (props) => {
    return(
    <div className="d-flex header mb-3">
        <div className="header-img popular-contenedor">
            <img src={props.imagen} alt="imagen" style={{background: 'transparent', maxWidth:'100%', maxHeight:'80%'}}/>
        </div>
        <div className="d-flex align-items-end">
            <div className="header-content p-3">
                <p>{props.apodo}</p>
                <h4>{props.nombre}</h4>
                <div className="popular-botones">
                    <div style={{width: '60%'}}>
                        <button className="popular-boton w-100">Listen now</button>
                    </div>

                    <div style={{width: '30%'}}>
                        <button className="popular-boton w-100 p-0">
                            <svg style={{width: '70%', height: '70%'}}aria-hidden="true" focusable="false" data-prefix="fab" data-icon="telegram-plane" className="svg-inline--fa fa-telegram-plane fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path></svg>
                            </button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    )
}

export default Popular