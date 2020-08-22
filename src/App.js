import React, {Component} from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Filter} from "./components/filter/Filter";
import {List} from "./components/list/List";
import {Info} from "./components/info/Info";
import {getData} from "./database/Database";

export default class App extends Component {
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
        const allCountries = await getData();
        this.setState({
            allCountries: Object.assign([],allCountries),
            filteredCountries: Object.assign([],allCountries),
            totalCountries: allCountries.length,
            totalPopulation: this.handleTotalPopulation(allCountries),
        });
        await this.props.showPreloader(false);
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
                <Header text='Lista de Países'/>
                <div className="containerInfo">
                    <Filter placeholder={placeholder} handleChangeFilter={this.handleChangeFilter}/>
                    <Info values={{totalCountries, totalPopulation}}/>
                </div>
                <List allCountries={filteredCountries}/>
                <footer style={{color: '#CFD8DC', textAlign: 'center', padding: '10px', marginBottom: '20px'}}>
                    © 2020 P.W. Neo
                </footer>
            </div>
        )
    }
}