import React from "react";
import ExampleComponent from "./ExampleComponent"; // Import ExampleComponent
import TestComponent from "./TestComponent"; // Import the new TestComponent

function App() {
  return (
    <div className="App">
      <h1>Now</h1> {/* Updated h1 */}
      <ExampleComponent />
      <TestComponent /> {/* New component */}
    </div>
  );
}

export default App;

