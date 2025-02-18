import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount((number) => number + 1);
  };
  const decreaseCount = () => {
    setCount((number) => number - 1);
  };
  return (
    <div>
      <div className="title">Simple Counter</div>
      <div className="button-group">
        <button onClick={decreaseCount}>Decrement</button>
        <div className="section">
          <div>{count}</div>
        </div>
        <button onClick={increaseCount}>Increment</button>
      </div>
    </div>
  );
};

export default Counter;
