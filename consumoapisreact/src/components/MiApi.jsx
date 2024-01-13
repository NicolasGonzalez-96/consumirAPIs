import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MiApi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://love-calculator.p.rapidapi.com/getPercentage',
        params: {
          sname: 'Alice',
          fname: 'John'
        },
        headers: {
          'X-RapidAPI-Key': '2819b98e50msh349e4fe39e7e41ep1b78a5jsn3a94e2224847',
          'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setData([response.data]); // Aquí asumimos que la API devuelve un objeto, si devuelve un array, ajusta en consecuencia.
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

};

export default MiApi;
