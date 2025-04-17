import "./styles.css";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>
        {" "}
        Count:{count} <br />
        <button className="decrease" onClick={decreaseCount}>
          Decrease
        </button>
        <button className="reset" onClick={reset}>
          Reset
        </button>
        <button className="increase" onClick={increaseCount}>
          Increase
        </button>
      </h2>
    </div>
  );
}

export default Counter;
