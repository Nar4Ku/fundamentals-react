import React, { useState, useEffect } from 'react'

export default props => {
    //['armazena o valor', 'funcão que altera']
    const [contador, setContador] = useState(100)
    const [parOuImpar, setParOuImpar] = useState('Par')

    //Similar to ComponentDidMount and ComponentDidUpdate
    useEffect(() => {
        contador % 2 === 0 ? setParOuImpar('Par') : setParOuImpar('Impar')
    })

    return (
        <div>
            <h1>{contador}</h1>
            <h3>{parOuImpar}</h3>
            <button onClick={() => setContador(contador + 1)}>Incremento</button>
            <button onClick={() => setContador(contador - 1)}>Decremento</button>
        </div>
    )
}