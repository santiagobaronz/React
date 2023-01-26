import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp  title='Este es mi titulo' subtitle='Esto es mi subtitulo'></FirstApp>
    </React.StrictMode>
)