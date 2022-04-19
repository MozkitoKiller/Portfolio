import React from 'react'
import style from "./Project.module.css"
import html5 from '../../assets/techs/html5-brands.svg'
import css3 from '../../assets/techs/css3-brands.svg'
import js from '../../assets/techs/js-brands.svg'
import node from '../../assets/techs/node-js-brands.svg'
import reactjs from '../../assets/img/React.png'


import sk8 from '../../assets/sites/Capturar.PNG'
import casaverde from '../../assets/sites/casaverde.PNG'
import alurageek from '../../assets/sites/aluraGeek.PNG'


function Projects() {
    return (
        <>
            <div className={style.reactjs}>
                <img src={reactjs} alt="" />
            </div>
            <div className={style.projects}>
                <div className={style.thumb}>
                    <img src={sk8} alt="site sk8" />
                </div>
                <div className={style.descricao}>
                    <h2>HZC</h2>
                    <p>
                        HZC é uma ladding page de uma comunidade de skate, com design moderno, de simples entendimento e com layout componentizado e responsivo.
                    </p>
                    <div>
                        <img align="center" alt="Rafa-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
                        <img align="center" alt="Rafa-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
                        <img align="center" alt="Rafa-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
                    </div>
                </div>
            </div>
            <div className={style.reactjs}>
                <img src={reactjs} alt="" />
            </div>
            <div className={style.projects}>
                <div className={style.thumb}>
                    <img src={casaverde} alt="site Casa Verde" className={style.casaverde} />
                </div>
                <div className={style.descricao}>
                    <h2>Casa Verde</h2>
                    <p>
                        Casa Verde é um site desenvolvido para floricultura, também com design simples e moderno, intuitivo e de fácil compreensão além de ser responsivo aos diferentes tamanhos de dispositivos.
                    </p>
                    <div>
                        <img align="center" alt="Rafa-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
                        <img align="center" alt="Rafa-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
                        <img align="center" alt="Rafa-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
                    </div>
                </div>
            </div>
            <div className={style.reactjs}>
                <img src={reactjs} alt="" />
            </div>
            <div className={style.projects}>
                <div className={style.thumb}>
                    <img src={alurageek} alt="site sk8" />
                </div>
                <div className={style.descricao}>
                    <h2>Alura Geek</h2>
                    <p>
                        Alura Geek é um site de E-Commerce, para esse projeto foi desenvolvido um DataBase em Json para os produtos e consumido usando a biblioteca Axios junto ao ReactJs.
                    </p>
                    <div>
                        <img align="center" alt="Rafa-HTML" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        <img align="center" alt="Rafa-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
                        <img align="center" alt="Rafa-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
                        <img align="center" alt="Rafa-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
                        <img align="center" alt="Rafa-Js" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects