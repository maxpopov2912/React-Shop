import React, { useState } from "react";

import './Header.css';

class Header extends React.Component {

render(){

  return (
    <header className="header">
        <div className="header__container">
            <h1>Guitar Shop</h1>
        </div>
    </header>
    );
  }
}

export default Header;


