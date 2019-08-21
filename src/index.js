import React from 'react'
import ReactDOM from 'react-dom'
import PrimeiroComponente  from './componentes/PrimeiroComponente'
import { CompA, CompB as B } from './componentes/DoisComponentes'
import MultiElementos from './componentes/MultiElementos'
import FamiliaSilva from './componentes/FamiliaSilva'
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'
import ComponenteComFuncao from './componentes/ComponenteComFuncao'
import Pai from './componentes/Pai'
import ComponenteClasse from './componentes/ComponenteClasse'

const elemento = document.getElementById('root')

/* const jsx = <h1>Olá React</h1>
ReactDOM.render(jsx, elemento) */

ReactDOM.render(
        <div>
            <PrimeiroComponente valor='Math.pow(11,2)' result={11**2}/>

            <CompA valor='Olá eu sou o A!'/>

            <B valor='B na área!'/>


            <MultiElementos />

            <FamiliaSilva />

            <Familia sobrenome='Riquixá'>
                <Membro nome='Andre' />
                <Membro nome='Nobuo' />
            </Familia>

            <ComponenteComFuncao />

            <Pai />

            <ComponenteClasse valor='Sou um componente de classe!' />

        </div>
    ,elemento)


