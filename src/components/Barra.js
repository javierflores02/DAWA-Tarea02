const Barra = (props) => {
    return(
    <div className="d-flex justify-content-between barra" style={{backgroundColor: '#99ffdd'}}>
        <div className="d-flex pl-3 align-items-center" style={{width: '20%'}}>
            <div className="d-flex justify-content-center align-items-center" style={{borderRadius: '5px', width: '5rem', height: '5rem', backgroundColor: '#008055'}}>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="th-large" className="svg-inline--fa fa-th-large fa-w-16 text-white" role="img" width="50%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z"></path></svg>
            </div>
        </div>
        <div className="detalles pr-4 d-flex align-items-center" style={{width: '60%'}}>
            <div className="w-100">
                <p className="text-right m-0">{props.usuario}</p>
                <p className="text-right m-0">{props.tipo} <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dot-circle" width="18px" className="svg-inline--fa fa-dot-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"></path></svg></p>
            </div>
        </div> 
    </div>
    )
}

export default Barra