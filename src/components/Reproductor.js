const Reproductor = (props) => {
    let porcentaje = 0
    let total = parseFloat(props.datos.tiempo.total.replace(":",","))
    let actual = parseFloat(props.datos.tiempo.actual.replace(":",","))
    porcentaje = (actual * 100)/total
    return(
        <div className="reproductor-contenedor mb-3">
            <div className="reproductor-part d-flex justify-content-center my-3">
                <img src={props.datos.imagen} style={{maxWidth: '60%'}} alt="..."/>
            </div>
            <div className="reproductor-part d-flex align-items-center">
                <div className="w-100">
                    <p className="m-0 text-center">{props.datos.cancion}</p>
                    <p className="m-0 text-center">{props.datos.autor}</p>
                    <div className="mt-3">
                        <div className="d-flex justify-content-around">
                            <div style={{flex: '0 0 20%'}} className="d-flex justify-content-center">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="list-ul" className="reproductor-barra-icono svg-inline--fa fa-list-ul fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"></path></svg>
                            </div>
                            <div className="d-flex justify-content-around" style={{flex: '0 0 50%'}}>
                                <div className="d-flex justify-content-center" style={{flex: '0 0 30%'}}>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="backward" className="reproductor-barra-icono svg-inline--fa fa-backward fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M11.5 280.6l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2zm256 0l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2z"></path></svg>
                                </div>
                                <div className="d-flex justify-content-center" style={{flex: '0 0 30%'}}>
                                    <div style={{backgroundColor: 'orange', borderRadius: '50%'}}>
                                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="play-circle" className="reproductor-barra-icono m-2 svg-inline--fa fa-play-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"></path></svg>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center" style={{flex: '0 0 30%'}}>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="forward" className="reproductor-barra-icono svg-inline--fa fa-forward fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M500.5 231.4l-192-160C287.9 54.3 256 68.6 256 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2zm-256 0l-192-160C31.9 54.3 0 68.6 0 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2z"></path></svg>
                                </div>
                            </div>
                            <div style={{flex: '0 0 20%'}} className="d-flex justify-content-center">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" className="reproductor-barra-icono svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                            </div>
                        </div>
                        <div className="container mt-2">
                            <div id="progressbar">
                                <div style={{width: `${porcentaje}%`}}></div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p>{props.datos.tiempo.actual}</p>
                                <p>{props.datos.tiempo.total}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reproductor