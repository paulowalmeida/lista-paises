import React from 'react';
import './info.module.css';
import {formatNumber} from "../../helpers/helpers.js";

function info({values:{totalCountries, totalPopulation}}) {
    return (
        <div>
            <p>Países: {totalCountries}</p>
            <p>População Total: {formatNumber(totalPopulation)}</p>
        </div>
    );
}
export default info;