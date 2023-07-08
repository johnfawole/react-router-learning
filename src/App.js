import React, {component} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/home';
import Contact from './components/contact';
import About from './components/about';
import './App.css';

 class App extends component{
   render () {
    return (
        <Router>
            <div className='App'>
                <ul className='App-header'>
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to="/about">About Blockchain Alpha</Link></li>
                    <li><Link to="/contact">Reach out to us!</Link></li>
                </ul>

                <Routes>
                    <Route exact path='/contact' element={< Contact />}></Route>
                    <Route exact path='/about' element={ <About/>}></Route>
                    <Route exact path='/' element={ <Home/>}></Route>
                </Routes>
            </div>
        </Router>
    )
   }
 }
  
 export default App;
 