import React from 'react'

const aprovados = ['Paula', 'Roberta', 'Gustavo', 'Júlia']

export default props => {
    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )
}