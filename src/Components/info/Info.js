import React from 'react';
import './Info.module.css';
import {formatNumber} from "../../helpers/helpers.js";
import Filter from "../filter/Filter";

function Info({values:{totalCountries, totalPopulation, placeholder, onInputValue}}) {

    const handleChangeFilter = (value) =>{
        onInputValue(value);
    }

    return (
        <div>
            <Filter placeholder={placeholder} handleChangeFilter={handleChangeFilter}/>
            <p>Países: {totalCountries}</p>
            <p>População Total: {formatNumber(totalPopulation)}</p>
        </div>
    );
}
export default Info;