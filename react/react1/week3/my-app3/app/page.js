"use client";
import Image from "next/image";
import styles from "./page.module.css";

import { useState } from "react";
import { useEffect } from "react";
import { setRequestMeta } from "next/dist/server/request-meta";

export default function Home() {
  let [inputValue, setInputValue] = useState(0);
  let [formInputValue, setFormInputValue] = useState(["loading"]);

  let [formInputValueTodoList, setFormInputValueTodoList] = useState([]);

  const handleInputChange = (event) => {
    setFormInputValue([...formInputValue, event.target.value]);
  };

  const handleInputChangeTodoList = (event) => {
    setFormInputValueTodoList([
      ...formInputValueTodoList,
      { event: event.target.value },
    ]);
  };
  const increaser = () => {
    setInputValue(inputValue + 1);
  };

  const decreaser = () => {
    setInputValue(inputValue - 1);
  };

  const submitBtnFunction = () => {
    alert(`Form submitted with values:  ${formInputValue}`);
  };
  const submitBtnFunction2 = () => {
    alert(`To DO LIST submitted with values:  ${formInputValueTodoList}`);
  };

  // const [count, setCount] = useState(0);
  let count = 0;

  const plusPlus = () => {
    const result = count;
    count = count + 1;
    return result;
  };
  const plusOne = () => {
    return count + 1;
  };
  const plusPlusCount = () => {
    count = count + 1;
    return count;
  };

  useEffect(() => {
    console.log("retriggerUseffect");
    setTimeout(() => {
      count = "my name is Bjørn";
    }, 5000);
    const intervalId = setInterval(() => {
      // setCount(count + 1);
      console.log(count + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <h1>Hola</h1>

      <button onClick={() => increaser()}>increase</button>
      <button onClick={() => decreaser()}>decrease</button>

      <p>{inputValue}</p>

      <div>
        <h1>My Form</h1>
        <input type="text" onChange={(e) => handleInputChange(e)} />

        <button onClick={() => submitBtnFunction()}>Submit form</button>
      </div>

      <div>
        <h1>TO DO LIST </h1>
        <input type="text" onChange={(e) => handleInputChangeTodoList(e)} />

        <button onClick={() => submitBtnFunction2()}>Submit form</button>

        <p>{formInputValueTodoList}</p>
      </div>

      <div>
        <h1>CLOCK COMPONENT</h1>
        <button onClick={() => tickingClock()}>Start Clock</button>
      </div>
    </>
  );
}
