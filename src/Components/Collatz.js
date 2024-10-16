import React, { Component } from 'react'

export default class Collatz extends Component {

    cajaNumero = React.createRef();

    state = {
        numero: null,
        secuencia: []
    }


    numCollatz(num){
        var numero = parseInt(num);
        if(numero % 2 == 0){
            return numero/2;
        }else{
            console.log(num + " es impar")
            return numero * 3 + 1
        }
    }

    secuenciaCollatz(){
        if(this.state.numero>1){
            console.log("Secuencia después del setState " + this.state.secuencia)
            while(this.state.secuencia[this.state.secuencia.length -1 ]>1){
                let numDevuelto = this.numCollatz(this.state.secuencia[this.state.secuencia.length -1 ]);
                console.log("Num devuelto y a añadir: " + numDevuelto)
                this.state.secuencia.push(numDevuelto);
                this.setState({secuencia: this.state.secuencia})
                console.log("Dentro del while: " + this.state.secuencia)

            }
        }
        console.log(this.state.secuencia)

    }


    peticionNumero = (e) => {
        e.preventDefault();
        let numero = parseInt(this.cajaNumero.current.value);
        console.log(numero + " El numero del input")
        this.setState({
            numero: numero,
            secuencia: [numero]
        });
        console.log("El primer cambio de state de numero: " + this.state.numero)
        console.log("Y el primer cambio de state de secuencia: " + this.state.secuencia)
        this.secuenciaCollatz();
        console.log("Hola!")
    }

  render() {
    return (
      <div>
        <form onSubmit={this.peticionNumero}>
            <label>Introduce un numero superior a 1</label><br/><br/>
            <input type="number" ref={this.cajaNumero}/>
            <br/><br/>
            <button>Procesar!</button>
        </form>
        {this.state.numero && (
                <div>
                    <br/>
                    <h3>Secuencia:</h3>
                     <br/>
                    <ul>
                        {this.state.secuencia.map((num, index) => {
                            return(<li key={index}>hola {num}</li>)
                        })}
                    </ul>
                </div>
            )}
      </div>
    
    )
  }
}
