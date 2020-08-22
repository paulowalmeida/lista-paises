import React, {Component} from 'react';
import './App.css';
import header from "./components/header/header";
import filter from "./components/filter/filter";
import list from "./components/list/list";
import info from "./components/info/info";
import * as axios from "axios";

class App extends Component {
    constructor() {
        super();

        this.state = {
            allCountries:[],
            filteredCountries: [],
            totalCountries: 0,
            totalPopulation: 0,
        }
    }

    async componentDidMount() {
        const allCountries = await this.getData();
        this.setState({
            allCountries: Object.assign([],allCountries),
            filteredCountries: Object.assign([],allCountries),
            totalCountries: allCountries.length,
            totalPopulation: this.handleTotalPopulation(allCountries),
        });
        await this.props.showPreloader(false);
    }

    getData = async () => {
        const {data} = await axios.get('https://restcountries.eu/rest/v2/all');
        return await data.map(({numericCode, name, capital, flag, population, region, languages, regionalBlocs, callingCodes}) => {
            return {
                id: numericCode,
                name,
                filterName: name.toLowerCase(),
                population,
                flag,
                capital: (capital === '' ? 'No Capital' : capital),
                region,
                languages,
                regionalBlocs: (regionalBlocs.length === 0 ? [{name: 'No Blocs'}] : regionalBlocs),
                callingCodes
            };
        })
    }

    handleTotalPopulation = (listCountries) => {
        return listCountries
            .map(({population}) => {
                return population
            })
            .reduce((acc, curr) => {
                return (acc + curr)
            }, 0);
    }

    handleChangeFilter = async (filter) => {
        const filterLowerCase = filter.toLowerCase();
        const {allCountries} = this.state;
        const filteredCountries = allCountries.filter(({filterName}) => filterName.includes(filterLowerCase));

        this.setState({filteredCountries: filteredCountries});
        this.setState({totalCountries: filteredCountries.length});
        this.setState({totalPopulation: this.handleTotalPopulation(filteredCountries)});
    }

    render() {
        const {totalCountries, totalPopulation, filteredCountries} = this.state;
        const placeholder = 'Digite o nome do país que deseja pesquisar';
        return (
            <div className="container">
                <header text='Lista de Países'/>
                <div className="containerInfo">
                    <filter placeholder={placeholder} handleChangeFilter={this.handleChangeFilter}/>
                    <info values={{totalCountries, totalPopulation}}/>
                </div>
                <list allCountries={filteredCountries}/>
                <footer style={{color: '#CFD8DC', textAlign: 'center', padding: '10px', marginBottom: '20px'}}>
                    © 2020 P.W. Neo
                </footer>
            </div>
        )
    }
}
export default App;