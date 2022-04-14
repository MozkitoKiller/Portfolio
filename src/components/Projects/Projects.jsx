import React from 'react'
import style from "./Project.module.css"
import html5 from '../../assets/techs/html5-brands.svg'
import css3 from '../../assets/techs/css3-brands.svg'
import js from '../../assets/techs/js-brands.svg'
import node from '../../assets/techs/node-js-brands.svg'
import reactjs from '../../assets/img/React.png'


import sk8 from '../../assets/sites/Capturar.PNG'
import  casaverde from '../../assets/sites/casaverde.PNG'
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
                        HZC é um site desenvolvido em paralelo com cursos da Alura, com design moderno usando método de display dos elementos em grid
                    </p>
                    <div>
                        <img src={html5} alt="" className={style.techhtml} />
                        <img src={css3} alt="" className={style.techcss} />
                        <img src={js} alt="" className={style.techjs} />
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
                    <h2>HZC</h2>
                    <p>
                        HZC é um site desenvolvido em paralelo com cursos da Alura, com design moderno usando método de display dos elementos em grid
                    </p>
                    <div>
                        <img src={html5} alt="" className={style.techhtml} />
                        <img src={css3} alt="" className={style.techcss} />
                        <img src={js} alt="" className={style.techjs} />
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
                    <h2>HZC</h2>
                    <p>
                        HZC é um site desenvolvido em paralelo com cursos da Alura, com design moderno usando método de display dos elementos em grid
                    </p>
                    <div>
                        <img src={html5} alt="" className={style.techhtml} />
                        <img src={css3} alt="" className={style.techcss} />
                        <img src={js} alt="" className={style.techjs} />
                        <img src={node} alt="" className={style.techjs} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects