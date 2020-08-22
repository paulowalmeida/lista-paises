import React from 'react';
import './Info.module.css';
import {formatNumber} from "../../helpers/helpers.js";

function Info({values:{totalCountries, totalPopulation}}) {
    return (
        <div>
            <p>Países: {totalCountries}</p>
            <p>População Total: {formatNumber(totalPopulation)}</p>
        </div>
    );
}
export default Info;