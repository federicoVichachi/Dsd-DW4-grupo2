import { useEffect, useState } from "react"
import "./publicaciones.css"

function Publicaciones() {

    const [publicaciones, setPublicaciones ] = useState([])
    const[nuevaPublicacion, setNuevaPublicacion] = useState({
        nombre: "",
        descripcion: "",
        imagen: ""
    })

    useEffect(() => {
        fetch("http://localhost:3000/publicaciones")
            .then(res => res.json())
            .then(data => setPublicaciones(data))
    }, [])

    const addPublication = () =>{
        fetch("http://localhost:3000/publicaciones", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({nombre: nuevaPublicacion.nombre, descripcion: nuevaPublicacion.descripcion, imagen: nuevaPublicacion.imagen})
        })
            .then(res => res.json())
            .then(() => {
                setNuevaPublicacion({
                    nombre: "",
                    descripcion: "",
                    imagen: ""
                })
                fetch("http://localhost:3000/publicaciones")
                    .then(res => res.json())
                    .then(data => setPublicaciones(data))
            })

    }

    return(
        <>
            <div className="contenedor">
                <div id="form-publicaciones">
                    <h3><u>Publicación</u></h3>
                    <form onSubmit={addPublication}>
                        <label>Nombre:</label><br></br>
                        <input name="nombre" value={nuevaPublicacion.nombre} placeholder="Ingrese su nombre" type="text" required onChange={e => setNuevaPublicacion({...nuevaPublicacion, [e.target.name]: e.target.value})}></input><br></br><br></br>
                        <label>Descripción:</label><br></br>
                        <textarea name="descripcion" value={nuevaPublicacion.descripcion} placeholder="(Mensaje, redes, discapacidad, etc... )" maxLength="500" onChange={e => setNuevaPublicacion({...nuevaPublicacion, [e.target.name]: e.target.value})}></textarea><br></br><br></br>
                        <label>Imagen: </label><br></br>
                        <input name="imagen" value={nuevaPublicacion.imagen} placeholder="Ingrese una url" type="text" required onChange={e => setNuevaPublicacion({...nuevaPublicacion, [e.target.name]: e.target.value})}/><br></br><br></br>
                        <button >Publicar</button>
                    </form>
                </div>
            </div><br></br>
            <div className="contenedor">
                <h3>Publicaciones</h3>
                <ul id="publicaciones">
                    {publicaciones.map(publicacion =>(
                        <li key={publicacion.id}>
                            <div className="publicacion">
                                <h5>{publicacion.nombre}</h5>
                                <p>{publicacion.descripcion}</p>
                                <img src={publicacion.imagen} />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Publicaciones