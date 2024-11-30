import { useCallback, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Title from "./components/Title";
import InitialSetup from "./components/InitialSetup";

function App() {
  console.log("App Render");

  const [initialValue, setInitialValue] = useState<number>(0);
  const [themes, setThemes] = useState<boolean>(false);

  const onsetupHandler = (inputValue: number) => {
    console.log("onSetupHanlder Function in App Called");
    setInitialValue(inputValue);
  };

  const themesHandler = useCallback(() => {
    console.log("Theme cnahge in App");
    setThemes((val) => !val);
    // setThemes(!themes)
  }, []);

  return (
    <div className={themes ? "bg-light" : ""}>
      <Title onChangeThemes={themesHandler} />
      {/* <InitialSetup onSetup={setInitialValue} /> */}
      <InitialSetup onSetup={onsetupHandler} />
      <Counter initialValue={initialValue} />
    </div>
  );
}

export default App;
