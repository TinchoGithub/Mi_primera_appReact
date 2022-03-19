import React, {Component} from "react"


function Registro() {
    return(
        <>
            <div className="contenedor">
                <form className="form">
                    <div><h1>Formulario de Registro</h1></div>
                    <div><h2>Complete el formulario</h2></div>
                    <div>
                        <label>Nombre</label>
                        <input type="text" placeholder="Ingrese Nombre"/>
                    </div>
                    <div>
                        <label>Apellido</label>
                        <input type="text" placeholder="Ingrese Apellido"/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" placeholder="Ingrese Email"/>
                    </div>
                    <div>
                        <label>Teléfono</label>
                        <input type="tel" placeholder="Ingrese Teléfono"/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" placeholder="Ingrese Password"/>
                    </div>
                    <div>
                        <label>Confirmar Password</label>
                        <input type="password" placeholder="Confirme Password"/>
                    </div>
                </form>
            </div>
        </>    

    );
}

export default Registro;