import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import welcomeLogo from './img/welcome.png';


function App() {
   return (
      <div className="App bodyfont">
         <div className="App-header">
            <Nav />
         </div>
      
         <div className="body-background">
           <img src={welcomeLogo} className="Welcome Logo" alt="Welcome" />
           <header><About /></header>
         </div>   
      </div>
   );
};


export default App;