import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faFileCode } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import style from './NavbarMobile.module.css'


function NavbarMobile() {
    return (
        <div className={style.navbar}>
            <Link to="/" className={style.nome}>
                <div >
                    <p>João<br />Bertuga</p>
                </div>
            </Link>
            <div className={style.icons}>
                <Link to="/about">
                    <FontAwesomeIcon className={style.icon} icon={faUser} /> <br />
                </Link>

                <Link to='/projects'>
                    <FontAwesomeIcon className={style.icon} icon={faCode} /> <br />
                </Link>

                <FontAwesomeIcon className={style.icon} icon={faFileCode} /> <br />
            </div>
        </div>
    )
}

export default NavbarMobile