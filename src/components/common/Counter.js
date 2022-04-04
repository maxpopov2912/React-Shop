import React, { useState } from "react";

const Counter = function(){
    const [count, setCount] = useState(0)
    
    function increment(){
       setCount(count + 1)
    }
    
    function clearCount(){
       setCount(0)
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={clearCount}>cancel</button>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Counter;