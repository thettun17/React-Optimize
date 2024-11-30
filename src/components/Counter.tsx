import { useEffect, useMemo, useState } from "react";

interface CounterProps {
  initialValue: number;
}

function expensiveCompute(initialValue: number) {
  console.log("expensiveComputedValue function called");

  const numericValue = Number(initialValue);
  if (!isNaN(numericValue)) {
    return numericValue;
  } else {
    return 0;
  }
}

export default function Counter({ initialValue }: CounterProps) {
  console.log("Counter Component is Reunder");

  const expensiveComputedValue = useMemo(
    () => expensiveCompute(initialValue),
    [initialValue]
  );

  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    setCount(expensiveComputedValue);
  }, [expensiveComputedValue]);

  return (
    <>
      <h2>Counter</h2>
      <p>Validated Initial Value: {expensiveComputedValue}</p>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}> Increment </button>
    </>
  );
}
