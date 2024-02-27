import React from "react";
import Fact from "./Fact";
import { useState, useMemo } from "react";
const Main = () => {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);
  const factorial = useMemo(() => {
    return Fact(number);
  }, [number]);

  return (
    <>
      <div>Main</div>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}>
        inc
      </button>
      <h1>{factorial}</h1>
    </>
  );
};

export default Main;
