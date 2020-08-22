import React, {Component} from 'react';
import css from './card.module.css';
import {formatNumber} from "../../helpers/helpers";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

export default class card extends Component {
    componentDidMount() {
        M.Modal.init(this.Modal);
    }

    render() {
        const {id, name, capital, flag, population, region, languages, regionalBlocs, callingCodes} = this.props.info;
        let codes =
            callingCodes
                .map(code => {
                    return ' ' + code;
                }).toString()
                .replace(' ', '');
        // console.log('O que chegou no card de idiomas', languages);
        let langs =
            languages
                .map(language => {
                    return ' ' + language.name;
                }).toString()
                .replace(' ', '');

        let blocs =
            regionalBlocs
                .map(bloc => {
                    return ' ' + bloc.name;
                }).toString()
                .replace(' ', '');

        return (
            <>
                <div className="col s6 m4 l3 xl2">
                    <div className={`${css.card} z-depth-4 modal-trigger`} data-target={id}>
                        <div className="card-image">
                            <img src={flag} alt={name} className={css.flag}/>
                        </div>
                        <div className="card-content" style={{marginTop: '-12px'}}>
                            <h6 style={{fontWeight: 'bold'}}>{name}</h6>

                        </div>
                    </div>
                </div>
                <div ref={Modal => this.Modal = Modal} id={id}
                     className="modal"
                     style={{backgroundColor: '#37474f', borderRadius: '2%'}}>
                    <div className="modal-content" style={{color: 'white', fontFamily: 'Raleway'}}>
                        <h3 style={{textAlign: 'center'}}>{name}</h3>
                        <hr/>
                        <h6 style={{textAlign: "left"}}>Capital: <span>{capital}</span></h6>
                        <h6 style={{textAlign: "left"}}>Regiao: <span>{region}</span></h6>
                        <h6 style={{textAlign: "left"}}>População: <span>{formatNumber(population)}</span></h6>
                        <h6 style={{textAlign: "left"}}>Idiomas: <span>{langs}</span></h6>
                        <h6 style={{textAlign: "left"}}>Blocos Regionais: <span>{blocs}</span></h6>
                        <h6 style={{textAlign: "left"}}>Código de Área: <span>{codes}</span></h6>
                    </div>
                    <div className="modal-footer"
                         style={{backgroundColor: '#37474f', borderRadius: '2%'}}>
                        <a href="#1" className="modal-close waves-red btn-flat"
                           style={{fontWeight: 'bold', color: 'white', fontFamily: 'Raleway'}}>
                            Fechar
                        </a>
                    </div>
                </div>
            </>
        );
    }
}