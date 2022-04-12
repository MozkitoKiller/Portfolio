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
    </div>
  )
}

export default Home;