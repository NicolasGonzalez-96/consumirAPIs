// App.jsx
import React from 'react';
import MiApi from './components/MiApi';
import Buscador from './components/Buscador';
import './styles.css'; 

function App() {
  return (
    <div className="container">
      <MiApi />
      <Buscador />
    </div>
  );
}

export default App;
