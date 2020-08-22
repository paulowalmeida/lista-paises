import React from 'react';
import css from './Header.module.css';

function Header({text}) {
    return (
        <h1 className={css.header}>{text}</h1>
    );
}

export default Header;