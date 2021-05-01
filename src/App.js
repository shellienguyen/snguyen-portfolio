import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from './components/Welcome';
import About from './components/About';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {
   return (
      <div className="App">
         <Router>
            <Navbar />
            <div>
               {/* A <Switch> looks through its children <Route>s and
               renders the first one that matches the current URL. */}
               <Switch>
                  <Route path="/about" components={About}><About /></Route>
                  <Route path="/portfolio" components={Portfolio}><Portfolio /></Route>
                  <Route path="/resume" components={Resume}><Resume /></Route>
                  <Route path="/contact" components={Contact}><Contact /></Route>
                  <Route path="/welcome" components={Welcome}><Welcome /></Route>
               </Switch>
            </div>

            <Footer />
         </Router>
      </div>
   );
};


export default App;