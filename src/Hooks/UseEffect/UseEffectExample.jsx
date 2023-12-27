import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <div>
      {console.log("rendaring")}
      <h1>Count:{count}</h1>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default UseEffectExample;
