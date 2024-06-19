import React from 'react';
 
function ShowContinent ({data , setContinent} : {data?: any, setContinent?: any}) {

  console.log('esta es los copntinentes por code', data.data)

  return (
    <div>
      <p className="nombre">{`${data.data.continent.name}`}</p>
      <button className="btn" onClick={() => setContinent(null)}>Close</button>
    </div>
  )
};

export default ShowContinent;