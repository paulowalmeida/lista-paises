import React from 'react';
import Card from "../card/Card";

function List({allCountries}) {
    console.log()
    return (
        <div className="row">
            <div className="col s12 m12 l12 xl12">
                <ul>
                    {allCountries.map(({id, name, capital, flag, population, region, languages, regionalBlocs, callingCodes}) => {
                        return (
                            <li key={parseInt(id)}>
                                <Card info={{id, name, capital, flag, population, region, languages, regionalBlocs, callingCodes}}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default List;