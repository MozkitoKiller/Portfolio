import React from 'react'
import style from './Contact.module.css'


function Contact() {
    return (
        <div className={style.contact}>
            <div>
                <h2>Entre em contato!</h2>
            </div>
            <div className={style.form}>
                <form>
                    <label>
                        Seu nome
                    </label>
                    <input type="text" />
                    <label>
                        Seu E-mail
                    </label>
                    <input type="text" />
                    <label>
                        Sua Mensagem 
                    </label>
                    <textarea rows="10" columns="10" />
                    <button>Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;