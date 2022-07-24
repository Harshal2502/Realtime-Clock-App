import React, { useState } from "react";

function App() {

  setInterval(updateTime);

  const now = new Date().toLocaleTimeString().substring(0,8);
  const [time, setTime] = useState(now)

  function updateTime(){
    const newTime = new Date().toLocaleTimeString().substring(0,8);
    setTime(newTime);
  };

  function getTime(){
    console.log(time)
  }
  return (
    <div className="container">
      <h1>{now}</h1>
      <button onClick={getTime}>Get Time</button>
      {/* <button onClick={}>Click me!</button> */}
    </div>
  );
}

export default App;
