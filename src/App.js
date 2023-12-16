import logo from './logo.svg';
import Card from './card/card.jsx'
import './App.css';
import cs from './card/card.module.css'

function App({data, emmo, cocolor}) {
  return (
    <div className="App">
        <div className={cs.mainGrid}>
            <Card width={300} height={500}  data={data} emmo={emmo} cocolor={cocolor}/>
            {/*console.log({data});*/}
        </div>
      <div className="App2">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;
