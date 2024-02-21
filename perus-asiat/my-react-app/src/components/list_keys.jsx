import React from 'react';

const HedelmäLista = () => {
  const hedelmät = ['Omena', 'Banaani', 'Kiivi', "Appelsiini"];

  return (
    <>
      <h2>Hedelmä Lista:</h2>
      <ul>
        {hedelmät.map(hedelmä => (
          <li key={hedelmä}>{hedelmä}</li>
        ))}
      </ul>
    </>
  );
};

export default HedelmäLista;
