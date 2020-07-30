import React from 'react'
import {  Link }  from 'react-router-dom'
import Logo from '../../assets/img/logo.png'
import './Menu.css'
//import ButtonLink from './components/ButtonLink' //uso sem styled -components
import Button from '../Button' //uso do styled-components

function Menu() {
    return (
        <header>
            <nav className="Menu">
                <Link to="/">
                    <img className="Logo" src={Logo} alt="LearningFlix logo"/>
                </Link>

                <Button as={Link} className="ButtonLink" to="/cadastro/video">
                    Novo vídeo
                </Button>
            </nav>
        </header>
    )
}

export default Menu