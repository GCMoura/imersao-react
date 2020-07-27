import React from 'react'
import Logo from '../../assets/img/logo.png'
import './Menu.css'
//import ButtonLink from './components/ButtonLink' //uso sem styled -components
import Button from '../Button' //uso do styled-components

function Menu() {
    return (
        <header>
            <nav className="Menu">
                <a href="/">
                    <img className="Logo" src={Logo} alt="MouraFlix logo"/>
                </a>

                <Button as="a" className="ButtonLink" href="/">
                    Novo vídeo
                </Button>
            </nav>
        </header>

    )
}

export default Menu