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
                <p>
                    Sempre fui apaixonado por tecnologia então, após o término da graduação em Gestão e Analise Ambiental, decidi mudar o foco da carreira ambiental para a carreira de programação.
                    <br />
                    <br />
                    Pesquisando mais sobre as frentes da programação, ao me deparar com a área de desenvolvimento web, logo me identifiquei e iniciei meus estudos em Front-End na Escola de Tecnologia Alura.
                    <br />
                    <br />
                    Hoje, domino HTML5, CCS3, JavaScript e ReactJs. Tenho conhecimento em algumas outras tecnologias como NodeJs e React Native.
                </p>

                <div className={style.techs}>
                    <img align="center" alt="Rafa-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
                    <img align="center" alt="Rafa-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
                    <img align="center" alt="Rafa-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
                    <img align="center" alt="Rafa-React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" />
                </div>
            </div>
        </div>
    )
}

export default About