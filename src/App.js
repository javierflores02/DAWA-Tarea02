import Popular from'./components/Popular'
import Nuevo from'./components/Nuevo'
import Relacionado from'./components/Relacionado'
import Barra from'./components/Barra'
import Titulo from'./components/Titulo'
import Reproductor from'./components/Reproductor'

const App = () => {

    const datos = {
        usuario : {
            nombre: 'Javier',
            tipo: 'User premium'
        },
        titulos: [
            "Populares",
            "Nuevos",
            "Relacionados"
        ],
        reproductor: {
            imagen: "http://www.eloriente.net/home/wp-content/uploads/2014/06/michael-jackson-billie-jean.jpg",
            cancion: "Billie Jean",
            autor: "Michael Jackson",
            tiempo: {
                total: "2:20",
                actual: "1:10"
            }
        },
        populares: [
            {
                imagen: "https://pngimg.com/uploads/michael_jackson/michael_jackson_PNG27.png",
                nombre: "Michael Jackson",
                apodo: "El rey del pop"
            },
            {
                imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Elvis_Presley_Stencil.svg/540px-Elvis_Presley_Stencil.svg.png",
                nombre: "Elvis Presley",
                apodo: "El rey del rock"
            },
        ],
        nuevos: [
            {
                imagen: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/16d72f98-c38b-43ec-80f4-931fde677748/d4bkdxc-e809567c-173b-41fc-b5c9-06ea223b15fb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMTZkNzJmOTgtYzM4Yi00M2VjLTgwZjQtOTMxZmRlNjc3NzQ4XC9kNGJrZHhjLWU4MDk1NjdjLTE3M2ItNDFmYy1iNWM5LTA2ZWEyMjNiMTVmYi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.rS7fMrsR7HRZ_Iv8zS_VoIxfbsjQWzxOliXqDMHJtP0",
                nombre: "Selena Gomez",
            },
            {
                imagen: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6b18178b-f2c5-4697-be02-59c058d1e289/d6pk8qs-824a3578-6a68-4ea7-a70b-9714a3c45eff.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNmIxODE3OGItZjJjNS00Njk3LWJlMDItNTljMDU4ZDFlMjg5XC9kNnBrOHFzLTgyNGEzNTc4LTZhNjgtNGVhNy1hNzBiLTk3MTRhM2M0NWVmZi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.gHTCa5HH0F_71PamzpmPwM2OljHhU7-PTQQiZH_O8-M",
                nombre: "Miley Cirus",
            },
        ],
        relacionados: [
            {
                imagen: "https://pbs.twimg.com/media/DqMw578XQAET-vp.png",
                nombre: "Chayane",
                descripcion: "Cantante"
            },
            {
                imagen: "https://pbs.twimg.com/media/DqMw578XQAET-vp.png",
                nombre: "Chayane",
                descripcion: "Cantante"
            },
        ],
    }

    return (
        <div id="contenedor">
            <Barra usuario={datos.usuario.nombre} tipo={datos.usuario.tipo}/>

            <Reproductor datos={datos.reproductor}/>

            <Titulo titulo={datos.titulos[0]} />

            {datos.populares.map((popular, index)=>{
                return <Popular imagen={popular.imagen} nombre={popular.nombre} apodo={popular.apodo} key={"popular"+index}/>
            })}

            <Titulo titulo={datos.titulos[1]} />

            <div className="d-flex justify-content-between">
                {datos.nuevos.map((nuevo, index)=>{
                    return <Nuevo imagen={nuevo.imagen} nombre={nuevo.nombre} key={"nuevo"+index}/>
                })}
            </div>

            <Titulo titulo={datos.titulos[2]} />

            {datos.relacionados.map((relacionado, index)=>{
                return <Relacionado imagen={relacionado.imagen} nombre={relacionado.nombre} descripcion={relacionado.descripcion} key={"relacionado"+index}/>
            })}
            
        </div>
    );
}

export default App;
