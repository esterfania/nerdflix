import React from 'react';
import './Menu.scss';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <span className="Logo" alt="Nerdflix">NERDFLIX</span>
            </a>
            <Button className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;
