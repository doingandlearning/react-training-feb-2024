import React from "react"
import './App.css'
import Temp from "./component/Temp";

function App() {
  const [counter, setCounter] = React.useState(0);
  const [counter2, setCounter2] = React.useState(0);

  // componentDidMount + componentDidUpdate / componentDidRerender
  React.useEffect(() => {
    console.log("On every render: Use effect is called.")
    return () => {
      console.log("Every render  cleanup")
    }
  })

  // componentDidMount ./
  React.useEffect(() => {
    // Initial data fetch!
    console.log("On initial render: Use effect is called.")
    return () => {
      console.log("Initial only cleanup")
    }
  }, []) // Empty Dependency array - means initial render only!

  // componentDidMount + dependencyDidChange
  React.useEffect(() => {
    // Updated data ... 
    console.log("On counter 1 only: Use effect is called.")
    return () => {
      console.log("Counter 1 only cleanup")
    }
  }, [counter])



  return (
    <>
      <p>
        Counter 1: {counter}
      </p>
      <button onClick={() => setCounter(counter + 1)}>Click</button>
      <p>
        Counter 2: {counter2}
      </p>
      <button onClick={() => setCounter2(counter2 + 1)}>Click</button>
      <div v-if="counter === 1">
        {counter === 1 && <Temp />}
      </div>
    </>
  )
}

export default App
