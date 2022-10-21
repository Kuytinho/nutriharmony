import React from 'react'
import Header from './components/header';

function Consultorias() {
    return(
        <div>
          <Header />
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/280px-Red_Apple.jpg'
          alt='maçã'
          />
          <div className='containerConsultorias'>
            <div className='divConsultoriasCon'>
              <h2 className='consultoriasTitles'>Consultoria</h2>
              <div className='divConsultoriasComoe'>
                  <div className='comoe'>
                    <h4>Como é</h4>
                    <p>
                    O mais natural possível sempre com respeito a saúde. Monto planos personalizados para a vida toda usando apenas alimentos, suplementos naturais (se necessários), atividade física e bons hábitos de vida.
                    </p>
                  </div>
                  <div>
                    <h4>O que inclui</h4>
                    <p>- Avaliação de estado geral da saúde e históricos.</p>
                    <p>- Pedido de exames (conforme necessidade).</p>
                    <p>- Avaliação física (Percentual de gordura e circunferências) - *presencial*</p>
                    <p>- Montagem de plano alimentar e suplementação personalizados.</p>
                    <p>- Orientação para atividade física.</p>
                    <p>- Estabelecimento de metas e objetivos.</p>
                    <p>- Acompanhamento e atenção pós-consulta.</p>
                    <p>- Retorno para avaliação de resultados e ajustes no plano em 30, 45 ou 60 dias.</p>
                  </div>
              </div>
              
            </div>
            <div className='divConsultoriasAte'>
              <h2 className='consultoriasTitles'>Atendimento</h2>
              {/* <div className='divConsultoriasComoe'> */}
                  <div>
                    <p>Consultas pelo convênio, particular e a domicílio. E-VIDA (Eletronorte);</p>
                    <p>
                    *Condições especiais para os convênios que não atendemos.
                    </p>
                    <p>
                    Para mais informações contate:(61) 99176-0995
                    </p>
                  </div>
            </div>
          </div>
        </div>
  )     
}

export default Consultorias