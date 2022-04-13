import React from 'react'
import style from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faFileCode } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

function Navbar() {
    return (

        <nav className={style.navbar}>
            <Link to="/" className={style.nome}>
                <div >

                    <h1>J</h1>

                    <p>Front-end Dev</p>

                </div>
            </Link>
            <div className={style.menu}>
                <Link to="/about">
                    <FontAwesomeIcon className={style.icon} icon={faUser} /> <br />
                </Link>
                <Link to='/projects'>
                    <FontAwesomeIcon className={style.icon} icon={faCode} /> <br />
                </Link>
                <FontAwesomeIcon className={style.icon} icon={faFileCode} /> <br />

            </div>
            <div className={style.social}>
                <a href="https://github.com/MozkitoKiller" target='_blank'> <p>GitHub</p></a>
                <a href="https://www.linkedin.com/in/joão-vitor-bertuga-cerqueira-35b478162/" target='_blank'> <p>LinkedIn</p></a>

            </div>
        </nav>

    )
}

export default Navbar;