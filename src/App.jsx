import style from "./App.module.css";
import Display_cal from "./Component/Display_cal";
import Hello from "./Component/Hello";
import React from "react";
import { useState } from "react";

function App() {
  const [calVal , setCalVal] = useState("")

  const handleOnClick = (keyItem) => {
    console.log(keyItem);

    if(keyItem === "C"){
      setCalVal("");

    }
    else if(keyItem === "="){
      const result = eval(calVal);
      setCalVal(result);
      console.log(typeof calVal);
      
    }
    else{
      const displayNewValue = calVal + keyItem;
      setCalVal(displayNewValue) ;
      
    }
  }
  const Buttons= [
    "C",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "/",
    "x",
    "+",
    "-",
    "=",
  ];
 
  return (
    <> 
      <div className={style.calculator}>
      <Display_cal calVal = {calVal}/>
      <Hello Buttons = {Buttons}  handleOnClick={handleOnClick}/>
      </div>
    </>
  );
}

export default App;
