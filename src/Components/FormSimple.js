import React, { Component } from 'react'

export default class FormSimple  extends Component {

    //Necesitamos declarar variables de referencia para cada control
    //dentro de React

    cajaNombre = React.createRef();
    cajaEdad = React.createRef();

    state = {
        user: null
    }





    //PARA PROCESAR LA PETICION NECESITAMOS UN METODO QUE RECIBA
    //Event (e)

    peticionForm = (e) =>{
        //La primera linea siempre sera detener la propagacion
        //del evento (submit)
        e.preventDefault();
        console.log("Peticion lista")
        let nombre = this.cajaNombre.current.value;
        let edad = parseInt(this.cajaEdad.current.value);
        this.setState({
            user: {
                nombre: nombre,
                edad: edad
            }
        })

    }

  render() {
    return (
      <div>
        <h1>Formulario simple</h1>
        {this.state.user &&
            (<h2>
                Nombre: {this.state.user.nombre}
                , Edad: {this.state.user.edad}
            </h2>)
         }
        <form onSubmit={this.peticionForm}>
            <label>Nombre: </label>
            <input type="text" ref={this.cajaNombre}/><br/>
            <label>Edad: </label>
            <input type="text" ref={this.cajaEdad}/><br/>
            <button>Enviar datos</button>
        </form>
      </div>
    )
  }
}
