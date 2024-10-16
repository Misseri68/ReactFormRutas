import React, { Component } from 'react'
import './TablaMultiplicar.css'

export default class TablaMultiplicar extends Component {

    cajaNumero = React.createRef();

    state = {
        tabla: [],
        numero: null
    }

    submitNumero = (e) => {
        e.preventDefault();
        console.log("Hola")
        var numero = parseInt(this.cajaNumero.current.value);
        var arrayTabla = [];
        for (let i = 1; i <= 10; i++) {
            arrayTabla.push(numero * i)
        }
        this.setState({
            tabla: arrayTabla,
            numero: numero
        })
    }


  render() {
    return (
        <div className="container">
        <form onSubmit={this.submitNumero} className="formulario">
            <label className="label">Introduce el número a multiplicar</label><br/><br/>
            <input type="number" ref={this.cajaNumero} className="inputNumero"/>
            <br/><br/>
            <button className="btn">Multiplicar!</button>
        </form>
        {
            this.state.tabla.length>0 && (
                <div className="tabla-container">
                    <h3 className="tabla-title">Tabla de multiplicar del {this.state.numero}:</h3>

                    <table className="tabla">
                        <thead>
                            <tr>
                                <th>Multiplicación</th>
                                <th>Resultado</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.tabla.map((resultado, index) => {
                            return(<tr key={index}>
                                <td>{this.state.numero} x {index + 1}</td>
                                <td>{resultado}</td>
                            </tr>)
                        })}
                        </tbody>
                    </table>
                </div>
            )
        }
        </div>
    )
  }
}
