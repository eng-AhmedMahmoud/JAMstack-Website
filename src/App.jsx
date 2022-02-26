import { useState, useEffect} from 'react'
import logo from './favicon.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  useEffect(() => {
    fetch("/.netlify/functions/node-fetch")
    .then((res)=> res.json())
    .then((res) => setText(res.msg))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{text}</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
        <code>netlify-lambda to run the node_modules for my functions needs weepback also to make my enviroment variable accessible i need wepback so fu*k vite</code>
        {/* "postinstall": "netlify-lambda install", */}
      </header>
    </div>
  )
}

export default App
