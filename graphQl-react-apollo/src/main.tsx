import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';


const client =  new ApolloClient({
  connectToDevTools: true, // para ver las devtools de graphQL
  uri: 'https://countries.trevorblades.com/graphql', // url de donde esta el servidor de graphQl
  cache: new InMemoryCache() // es para guardar las llamadas y no tener qeu volver a repetir es obligatorio
})

// CON ESTO HACEMOS UNA CONSULTA DIRECTA SIN EL HOOCK
//
// client.query({query})  la query le tendria que volver a declarar
// .then(res => {
//   console.log(res.data)
// })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={ client }> {/* se envuelve toda la parte de aplicacion donde se quiera servir este cliente */}
    <App />
  </ApolloProvider>,
)
