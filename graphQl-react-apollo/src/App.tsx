import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0);
  useEffect(() => {
    fetch('https://countries.trevorblades.com/graphql', { // ------>  se especefica la url del servidor de graphQl al que se quiere hacer la peticion
      method:'POST', //-----> el metodo es fijo siempre, este es el unico que admite QL
      headers: {'Content-Type': 'application/json'}, // -----> se especifica el tipo de cabecera
      body:JSON.stringify({ query:`query {
        continents {
          code
          name
        }
      }`
      })
    })
    .then(res => res.json())
    .then(res => {
      console.log("est es la respuesta que me da QL -------->", res.data)
    })
    .catch((e) => {
      console.log("este es el error ----->", e)
    })
  })

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
