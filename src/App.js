import React, { useState } from "react";
import "./styles.css";

function App() {
  const [firstName, setFirstName] = useState("");

  function handleChange(e) {
    setFirstName(e.target.value);
  }

  return (
    <div>
      <input className="firstName" onChange={handleChange} />
      <h1>{firstName}</h1>
    </div>
  );
}
export default App;
