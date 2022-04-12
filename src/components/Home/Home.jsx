import React from 'react'
import style from './Home.module.css'


function Home() {
  return (
    <div className={style.about}>
     
      <section className={style.intro}>
        <h1>Olá, <br /> Sou João,<br /> Desenvolvedor Front-end</h1>
        <p>Desenvolvedor Front-end React</p>
      </section>
    </div>
  )
}

export default Home;