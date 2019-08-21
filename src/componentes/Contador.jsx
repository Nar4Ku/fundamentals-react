import React, { Component } from 'react'

export default class Contador extends Component {
    
    state = {
        numero: this.props.numeroInicial
    }
    
    //Arrow Function resolve o contexto do this
   /*  maisUm = () => {
        this.setState({ numero: this.state.numero + 1 })
        
        //this.state.numero++
    }
 */
    maisUm = () => this.alterarNumero(1)
    menosUm = () => this.setState({numero: this.state.numero - 1 })

    alterarNumero  = diferenca => this.setState({numero: this.state.numero + diferenca})

    render() {
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Incremento</button>
                <button onClick={this.menosUm}>Decremento</button>
                <button onClick={() => this.alterarNumero(10)}>Incrementar 10</button>
                <button onClick={() => this.alterarNumero(-10)}>Decrementar 10</button>
            </div>
        )
    }
}
//Metodo antigo
/* maisUm() {

} */
//Método construtor para dar bind no this 
/* constructor(props){
    super(props)

    this.maisUm = this.maisUm.bind(this)
} */

//Arrow Function onclick() indicando o contexto do this
/* <button onClick={() => this.maisUm()}>Incremento</button> */