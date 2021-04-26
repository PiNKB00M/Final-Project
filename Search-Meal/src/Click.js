import React, { useState, useEffect } from 'react';  
import "./Search.css";

function CounterExample() {  
  const [count, setCount] = useState(0);  
  
  // Similar to componentDidMount and componentDidUpdate:  
  useEffect(() => {  
    // Update the document title using the browser API  
    document.title = `You clicked ${count} times`;  
  });  
  
  return (  
    <div id='main'>  
      <h2>You clicked {count} times</h2>  
      <button onClick={() => setCount(count + 1)}>  
        Click me  
      </button>  
    </div>  
  );  
}  
export default CounterExample;  