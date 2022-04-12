import React from 'react'
import style from './Home.module.css'
import reactjs from '../../assets/img/React.png'

function Home() {
  return (
    <div className={style.about}>
     
      <section className={style.intro}>
        <h1>Olá, <br /> Sou João,<br /> Desenvolvedor Front-end</h1>
        <p>Desenvolvedor Front-end React</p>
      </section>
      <div className={style.reactjs}>
        <img src={reactjs} alt="" />
      </div>
      <div className={style.social}>
      <a href="https://github.com/MozkitoKiller" target='_blank'> <p>GitHub</p></a>
                <a href="https://www.linkedin.com/in/joão-vitor-bertuga-cerqueira-35b478162/" target='_blank'> <p>LinkedIn</p></a>
      </div>
    </div>
  )
}

export default Home;