import { memo } from "react";

interface ThemeProprs {
  onChangeThemes: () => void;
}

function Title({ onChangeThemes }: ThemeProprs) {
  console.log("Title Component is rendering");

  return (
    <>
      <h1>Optimization: memo, useState, useCallback</h1>
      <button onClick={onChangeThemes}> Change Theme </button>
    </>
  );
}
export default memo(Title);
