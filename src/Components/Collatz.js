import React, { Component } from 'react'

export default class Collatz extends Component {

    cajaNumero = React.createRef();

    state = {
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

   

    peticionNumero = (e) => {
        e.preventDefault();
        let numero = parseInt(this.cajaNumero.current.value);
        let arrayAux = [numero]
        while(numero>1){
            numero = this.numCollatz(numero);
            arrayAux.push(numero);
        }
        this.setState({secuencia: arrayAux});
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
        {this.state.secuencia.length>0 && (
                <div>
                    <br/>
                    <h3>Secuencia:</h3>
                     <br/>
                    <ul>
                        {this.state.secuencia.map((num, index) => {
                            return(<li key={index}>{num}</li>)
                        })}
                    </ul>
                </div>
            )}
      </div>
    
    )
  }
}
