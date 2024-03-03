import React, { useState, useEffect } from 'react';

const Haetieto = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const fetchedData = "Tässä on saatu tieto";
          resolve(fetchedData);
        }, 2000);
      });
    };

    fetchData()
      .then((fetchedData) => {
        setData(fetchedData);
      })
      .catch((error) => {
        console.error("Virhe:", error);
      });
  }, []);

  return (
    <div>
      <h1>React Promises Esimerkki</h1>
      <p>{data ? data : "Ladataan tietoa..."}</p>
    </div>
  );
};

export default Haetieto;
