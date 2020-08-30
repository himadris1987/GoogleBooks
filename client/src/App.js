import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import NoMatch from "./pages/NoMatch";
import Saved from "./pages/Saved";
import Search from "./pages/Search";



function App() {
  return (
    <Router>
      <NavBar/>
      <Header/>
      <Switch>
        <Route exact path ="/" component = {Search}/>
        <Route exact path ="/search" component = {Search}/>
        <Route exact path ="/saved" component = {Saved}/>
        <Route exact path ="/noMatch" component = {NoMatch}/>
      </Switch>
      <Footer/>

    </Router>
  );
}

export default App;
