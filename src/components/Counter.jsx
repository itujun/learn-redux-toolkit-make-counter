import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../store/slices/counterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const { count, countKuadrat } = useSelector((state) => {
    const kuadrat = state.counter.value * state.counter.value;
    return { count: state.counter.value, countKuadrat: kuadrat };
  });

  return (
    <div className="counter">
      <div className="title">Simple Counter</div>
      <div className="button-group">
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <div className="section">
          <div>{count}</div>
        </div>
        <div className="section">
          <div>{countKuadrat}</div>
        </div>
        <button onClick={() => dispatch(increment(2))}>Increment</button>
      </div>
    </div>
  );
};

export default Counter;
