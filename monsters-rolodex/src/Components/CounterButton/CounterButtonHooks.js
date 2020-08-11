import React, { useState, memo } from "react";

const CounterButtonHooks = (props) => {
  const [count, setCount] = useState(0);
  const { color } = props;

  return (
    <button id="counter" color={color} onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
};

export default memo(CounterButtonHooks);
