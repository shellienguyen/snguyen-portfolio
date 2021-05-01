import './App.css';
import Nav from './components/Nav/index_0';
import About from './components/About';
import welcomeLogo from './img/welcome.png';


function App() {
   return (
      <div className="bodyfont">
         <div className="App-header nav-container">
            <Nav />
         </div>
      
         <div className="body-background">
           <img src={welcomeLogo} className="Welcome-logo" alt="Welcome" />
           <header><About /></header>
         </div>   
      </div>
   );
};


export default App;