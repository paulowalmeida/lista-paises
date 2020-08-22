import React from 'react';
import css from './Filter.module.css';

function Filter({placeholder, filter, handleChangeFilter}) {
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

export default Filter;