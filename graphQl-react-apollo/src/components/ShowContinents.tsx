import React, { useEffect, useState } from 'react'
import { CONTINENT_BY_CODE } from '../querys/getContinetByCodeQuery';
import  ShowContinent  from './ShowContinent';
import { useLazyQuery } from '@apollo/client';

const ShowContinents = ({continents = []} : {continents: any}) => {
//-----> se hace todo en la misma ruta por temas de estudio

  const [getContinente, result] = useLazyQuery(CONTINENT_BY_CODE); // cuando result tene valor se vuelve a rendrizar el componente
  const [continent, setContinent] = useState(null);

  const getCtn = (codeValue: any) => {
    getContinente( {variables: { code: codeValue } } );
  };

// ---> cuando ejecuto el lazyQuery se re renderiza la pagina por lo tanto se asigna valor al estado y entra al if
  useEffect(() => {
    if(result.data) {
      setContinent(result.data)
    }
  }, [result]);

// ---> como se dio valor en el useEfect se muestra el componente solo se vera si se ejecuta la llamda
  if(continent) {
    return <ShowContinent data={result} setContinent={setContinent}/>
  };

  if (continents === undefined ) return null;

  return (
    <div>
      {
        continents.map((ctn: any) => {
          return  <>
            <div key={ctn.code} className="name" style={{display: 'flex'}} onClick={() => {getCtn(ctn.code)}}>
              <div>{ctn.name}</div>---<div>{ctn.code}</div>
            </div>
          </>
        })
      }
    </div>
  )
}

export default ShowContinents;
