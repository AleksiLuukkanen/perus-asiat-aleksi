import React, { useState } from 'react';

const Ristinolla = () => {
  const [laudat, asetaLaudat] = useState(Array(9).fill(null));
  const [onXVuoro, asetaXVuoro] = useState(true);

  const klikkaus = (indeksi) => {
    const uudetLaudat = [...laudat];
    if (laskeVoittaja(laudat) || uudetLaudat[indeksi]) return;
    uudetLaudat[indeksi] = onXVuoro ? 'X' : 'O';
    asetaLaudat(uudetLaudat);
    asetaXVuoro(!onXVuoro);
  };

  const renderoiRuutu = (indeksi) => {
    return (
      <div
        className="ruutu"
        onClick={() => klikkaus(indeksi)}
        style={{
          width: '100px',
          height: '100px',
          border: '1px solid black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '2em',
        }}
      >
        {laudat[indeksi]}
      </div>
    );
  };

  const voittaja = laskeVoittaja(laudat);
  const status = voittaja
    ? `Voittaja: ${voittaja}`
    : `Seuraava pelaaja: ${onXVuoro ? 'X' : 'O'}`;

  return (
    <div
      className="sovellus"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '50px',
      }}
    >
      <div className="tila" style={{ marginBottom: '20px', fontSize: '1.5em' }}>
        {status}
      </div>
      <div
        className="lauta"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '300px',
          height: '300px',
        }}
      >
        {laudat.map((ruutu, indeksi) => (
          <div key={indeksi} style={{ width: '33.33%', height: '33.33%' }}>
            {renderoiRuutu(indeksi)}
          </div>
        ))}
      </div>
    </div>
  );
};

const laskeVoittaja = (ruudut) => {
  const rivit = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < rivit.length; i++) {
    const [a, b, c] = rivit[i];
    if (ruudut[a] && ruudut[a] === ruudut[b] && ruudut[a] === ruudut[c]) {
      return ruudut[a];
    }
  }
  return null;
};

export default Ristinolla;
