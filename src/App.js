import React , { useState } from 'react';

import './App.css';
import About from './components/About';
import { BrowserRouter , Link , Route , Redirect, Switch, useHistory } from "react-router-dom";
import Navbar from './components/Navbar';
import IdkLol from './components/IdkLol';

function App() {
  
  return (
    <BrowserRouter>
    <Navbar/>
    <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route exact path="/about">
      <Redirect to="/about/name/Kishlay" />
    </Route>
    <Route path="/about/name/:id">
    <About/>
    </Route>
    <Route path="*">
      <IdkLol/>
    </Route>
    </Switch>
    </BrowserRouter>
  );
}

function Home(){
  let hist = useHistory();
  const [state, setstate] = useState("Kishlay");

  function setPlease(e) {
    setstate(e.target.value);
  }
  function hello(){
  
    return hist.push(`/about/name/${state}`);
    
  }
  return(
    <div>
      Hey you Are At Home Page !
      <br/>
      <input type="text" onChange={setPlease}/>
      <button type="button" onClick={hello} >SEARCH</button>
    </div>
  );
}



export default App;
