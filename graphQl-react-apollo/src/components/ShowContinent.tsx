import React from 'react'

const ShowContinent = ({continents = []} : {continents: any}) => {
  console.log(continents);
  if (continents === undefined ) return null;

  return (
    <div>
      {
        continents.map((ctn: any) => {
          return  <>
            <div className="name">
              {`${ctn.name}---${ctn.code}`}
            </div>
          </>
        })
      }
    </div>
  )
}

export default ShowContinent;