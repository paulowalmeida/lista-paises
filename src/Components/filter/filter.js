import React from 'react';
import css from './filter.module.css';

function filter({placeholder, filter, handleChangeFilter}) {
    const handleInputChange = ({target: {value}}) => {
        handleChangeFilter(value);
    }
    return (
        <input className={css.search}
               type="text"
               value={filter}
               placeholder={placeholder}
               onChange={handleInputChange}
        />
    );
}

export default  filter;