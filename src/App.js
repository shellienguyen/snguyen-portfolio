import welcomeLogo from './img/welcome.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={welcomeLogo} className="App-logo" alt="Welcome" />
      </header>
    </div>
  );
}

export default App;
