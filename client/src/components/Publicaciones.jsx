import "./publicaciones.css"

function Publicaciones() {

    return(
        <>
            <div className="contenedor">
                <div id="form-publicaciones">
                    <h3><u>Publicación</u></h3>
                    <form>
                        <label>Nombre:</label><br></br>
                        <input placeholder="Ingrese su nombre" required></input><br></br><br></br>
                        <label>Descripción:</label><br></br>
                        <textarea placeholder="(Mensaje, redes, discapacidad, etc... )"></textarea><br></br><br></br>
                        <label>Imagen: </label><br></br>
                        <input type="file" accept=".jpg, .png" required/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Publicaciones