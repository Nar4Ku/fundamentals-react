import React from 'react'

/* function primeiro() {
    return <h1>Primeiro Componente!</h1>
}

export default primeiro */

export default (props) => (
    <div>
        <h1>{props.valor}</h1>
        <h2>{props.result}</h2>
    </div>
)