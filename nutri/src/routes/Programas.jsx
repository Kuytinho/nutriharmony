import React from 'react'
import Header from './components/header';
import { planoDie1, planoDie2, nutriçao, reed1, reed2, reed3,
    reed4, reed5, personal, acom } from "../utils/textosPro"

function Programas() {
    return(
        <div>
          <Header />
            <div>
              <h1>Nossos Programas</h1>
              <div className='textosPro'>
                <div>
                    <h2>Plano Dietético Personalizado</h2>
                    <p>{ planoDie1 }</p>
                    <p>{ planoDie2 }</p>
                    <h2>Nutrição e Controle do Peso Corporal</h2>
                    <p>{ nutriçao }</p>
                </div>
                <div>
                    <h2>Reeducação Alimentar</h2>
                    <p>{ reed1 }</p>
                    <p>{ reed2 }</p>
                    <p>{ reed3 }</p>
                    <p>{ reed4 }</p>
                    <p>{ reed5 }</p>
                </div>
                <div>
                    <h2>Personal Diet</h2>
                    <p>{ personal }</p>
                    <h2>Acompanhamento Nutricional Pré e Pós Cirurgia</h2>
                    <p>{ acom }</p>

                </div>

              </div>
            </div>


        </div>

    )
}

export default Programas