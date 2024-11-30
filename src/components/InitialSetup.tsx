import { useState } from "react";

interface InitialSetupProps {
  onSetup: (value: number) => void;
}

export default function InitialSetup({ onSetup }: InitialSetupProps) {
  console.log("Initial Setup Render");

  const [inputValue, setInputValue] = useState<string>("");
  
  const handleSubmit = () => {
    console.log("Handle Submit Function Call");
    const numericValue = Number(inputValue);
    if (!isNaN(numericValue)) {
      onSetup(numericValue);
    } else {
      console.log("Please enter valid number");
    }
  };

  return (
    <>
      <h2>Iinital Value Setup</h2>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSubmit}> Submit </button>
    </>
  );
}
