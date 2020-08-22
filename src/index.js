import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const showPreloader = (value) => {
    if (value){
        document.getElementById('root').style.display = 'none';
        document.getElementById('loading').style.display = 'block';
    }
    else {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('root').style.display = 'block';
    }
}

ReactDOM.render(
    <React.StrictMode>
        <App showPreloader={showPreloader}/>
    </React.StrictMode>,
    document.getElementById('root')
);
