import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GeminiData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.gemini.com/v1/trades', {
          headers: {
            'X-GEMINI-APIKEY': 'AIzaSyBsjTE8ftNWtWBy8Modfreby32j-cyjloY', // Replace with your API key
          },
        });
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h2>Gemini Data</h2>
      <ul>
        {data.map((trade, index) => (
          <li key={index}>{trade.trade_id}</li>
        ))}
      </ul>
    </div>
  );
};

export default GeminiData;
