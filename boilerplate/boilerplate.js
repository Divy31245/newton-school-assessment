import "./App.css";
import { useEffect, useRef, useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const previousVal = useRef(0);
  const renderCount = useRef(0);
  const newRef = useRef(null);

  useEffect(() => {
    // write your solution here for counting the previous value of state(counter)
  }, []);

  useEffect(() => {
    // write your solution here for counting the app renders
  });
  const handleClickLeft = () => {
    setCount((count) => count - 1);
  };

  const handleClickRight = () => {
    setCount((count) => count + 1);
  };

  const executeScroll = () => {
    // write your solution here to access the given division directly through scroll
  };
  return (
    <div className="App">
      <div className="App-header">
        <h1>All about useRef Hook</h1>
        <div>1.Compare state values between two renders!</div>
        <div>2.Count how many times the component render.</div>
        <div>3.Access DOM elements directly.</div>
        <div className="btns">
          <button
            data-cy="decrement"
            className="btninc"
            onClick={handleClickLeft}
          >
            -
          </button>
          <button
            data-cy="increment"
            className="btninc"
            onClick={handleClickRight}
          >
            +
          </button>
        </div>
        <div className="sec-div">
          <div data-cy="counter">Current Value : {count}</div>
          Previous Value : {previousVal.current}
          <div>Component Render Count : {renderCount.current}</div>
        </div>
        <button className="btn" onClick={executeScroll}>
          Click here to go to a new Division
        </button>
      </div>
      {/* to access this division using click operation what should you add in the below div tag??  */}
      <div className="new-div">New Division</div>
    </div>
  );
}

export default App;
