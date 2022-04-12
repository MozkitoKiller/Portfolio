import React from 'react'
import style from './About.module.css'
import img from '../../assets/img/IMG_2300.jpg'


function About() {




    return (
        <div className={style.about}>
            <div className={style.imgs}>
               <img src={img} alt="" />
            </div>
            <div className={style.intro}>
                <h1>Sobre mim</h1>
                <p> Desenvolvedor front-end sediado em São Carlos - SP.
                    Formado em Gestão e Análise Ambiental em 2019, decidi iniciar minha <br />
                    transição de carreira em meados de 2021.<br />

                    Buscando o Full-stack.
                </p>
            </div>
        </div>
    )
}

export default About