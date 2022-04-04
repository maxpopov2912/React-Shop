import React, { useState } from "react";
import ListView from "./components/ListView";
import Header from "./components/Header/Header";

import './App.css';

class App extends React.Component {

render(){

  return (
    <div className="App">
        <Header></Header>
        
        <ListView></ListView>
    </div>
    );
  }
}

export default App;
