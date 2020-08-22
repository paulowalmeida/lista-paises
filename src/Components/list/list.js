import React from 'react';
import card from "../card/card";

function list({allCountries}) {
    console.log()
    return (
        <div className="row">
            <div className="col s12 m12 l12 xl12">
                <ul>
                    {allCountries.map(({id, name, capital, flag, population, region, languages, regionalBlocs, callingCodes}) => {
                        return (
                            <li key={parseInt(id)}>
                                <card info={{id, name, capital, flag, population, region, languages, regionalBlocs, callingCodes}}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default list;