import { useEffect, useState } from "react";
import "../App.css";
import Cursor from "./Cursor";
var TextType = () => {
const [words, setWords] = useState("");
const [count, setCount] = useState(0);
const text = "hey, i'm jordan";

useEffect(() => {
  if (count < text.length) {
    const r = 100 + Math.random() * 100;
    setTimeout(() => {
      setCount(count + 1);
    }, r);
  }
}, [count, text]);
  return (text.substring(0,count))
}
var HomePage = () => {
  
  return (
    <div className="center-wrapper">
      <div className="center-content"><TextType /> </div>
    </div>
  );
};
export default HomePage;
