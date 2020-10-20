import React from 'react';
import Routes from './routes';

import './styles.css';

// COMPONENTS
import Header from './components/Header';

const App = () => (
    <div className="App">
        {/* COMPONENTES */}
        <Header />
        <Routes />
    </div>
);

export default App;
