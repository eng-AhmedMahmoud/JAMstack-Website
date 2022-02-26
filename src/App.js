import { useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [text, setText] = useState('')
  useEffect(() => {
    fetch("/.netlify/functions/hello-world")
    .then((res)=> res.json())
    .then((res) => setText(res.msg))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {process.env.MY_SECRET}{text}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
