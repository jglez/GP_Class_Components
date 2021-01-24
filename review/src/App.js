import React, { useState } from "react";

// Import our component
import Person from './components/Person.js'

const App = () => {
  // Holding State
  const [name, setName] = useState('Elliot')

  // Event Handler
  const handleClick = () => {
    setName('Mr. Robot')
  }

  return (
    <div>
      {/* Pass props so our component has the data it needs */}
      <Person name={name} />

      <button onClick={handleClick}>Change Name</button>
    </div>
  );
};

export default App;