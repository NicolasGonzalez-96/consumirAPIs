// Buscador.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Buscador = () => {
  const [fname, setFname] = useState('');
  const [sname, setSname] = useState('');
  const [resultado, setResultado] = useState(null);
  const [parejasEncontradas, setParejasEncontradas] = useState([]);

  const handleBuscarClick = async () => {
    const options = {
      method: 'GET',
      url: 'https://love-calculator.p.rapidapi.com/getPercentage',
      params: {
        sname: sname,
        fname: fname
      },
      headers: {
        'X-RapidAPI-Key': '2819b98e50msh349e4fe39e7e41ep1b78a5jsn3a94e2224847',
        'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      const nuevaPareja = {
        fname: fname,
        sname: sname,
        resultado: response.data
      };

      setResultado(response.data);
      setParejasEncontradas((prevParejas) => [...prevParejas, nuevaPareja].sort((a, b) => b.resultado.percentage - a.resultado.percentage));
    } catch (error) {
      console.error('Error fetching data:', error);
      setResultado(null);
    }
  };

  return (
    <div>
      <h2>Buscador de amor</h2>
      <input type="text" placeholder="Nombre 1" value={fname} onChange={(e) => setFname(e.target.value)} />
      <input type="text" placeholder="Nombre 2" value={sname} onChange={(e) => setSname(e.target.value)} />
      <button onClick={handleBuscarClick}>Buscar</button>

      {/* Mostrar resultados de la búsqueda */}
      {resultado && (
        <div className="resultado-container">
          {resultado.result} - {resultado.percentage}%
        </div>
      )}

      {/* Mostrar lista de parejas encontradas */}
      <div className="resultados-container">
        <h3>Parejas Encontradas:</h3>
        <ul>
          {parejasEncontradas.map((pareja, index) => (
            <ol key={index}>
              {pareja.fname} y {pareja.sname} - {pareja.resultado.percentage}%
            </ol>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Buscador;

