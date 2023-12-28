import React from 'react';
 
const showContinent = ({data, setContinent}) => {

  console.log('esta es los copntinentes por code', data.data)

  return (
    <div>
      <p className="nombre">{`${data.data.continent.name}`}</p>
      <button className="btn" onClick={() => setContinent(null)}>Close</button>
    </div>
  )
};

export default showContinent;