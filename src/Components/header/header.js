import React from 'react';
import css from './header.module.css';

function header({text}) {
    return (
        <h1 className={css.header}>{text}</h1>
    );
}

export default header;