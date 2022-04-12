import React from 'react'
import style from './About.module.css'



function About() {
    return (
        <div className={style.about}>
            <div className={style.intro}>
                <h1>Sobre mim</h1>
                <p>Desenvolvedor front-end sitiado em São Carlos - SP. 
                    Formado em Gestão e Análise Ambiental em 2019, decidi iniciar minha <br/>
                    transição de carreira em meados de 2021.<br/>
                    <br/>
                    Profissional com perfil analítico, crítico e realista, e com habilidade para o trabalho em equipe.<br/>
                    Prático, buscando sempre a melhor e mais eficaz/eficiente forma para resolução de problemas <br/>
                    <br/>
                    Possuo interesse no desenvolvimento web como um todo, buscando o full-stack.
                </p>
            </div>
        </div>
    )
}

export default About