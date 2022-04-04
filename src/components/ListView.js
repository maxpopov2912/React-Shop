import React, { useState } from "react";
import ProductView from "./ProductView"

import './ListView.css';

class ListView extends React.Component {

render(){

  return (
    <div className="list-view">
        <ProductView></ProductView>
    </div>
    );
  }
}

export default ListView;


