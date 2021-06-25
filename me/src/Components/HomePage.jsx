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
  return (<p>{ text.substring(0, count) }</p>)
}
var HomePage = () => {
  const [words, setWords] = useState("");
  const [count, setCount] = useState(42);
  const text = "hey, i'm jordan";

  useEffect(() => {
    const b = Math.round(Math.random() * 100)
      const r = Math.random() * 600;
    setTimeout(() => {
        setCount((count + b)%1000+1);
      }, r);
  }, [count]);
  
  return (
    <div className="wrapper">
      {count % 37 === 0 ? <div className="t1-wrapper" /> : null}
      {count % 59 === 0 ? <div className="t2-wrapper" /> : null}
      {count % 29 === 0 ? <div className="t3-wrapper" /> : null}
      {count % 43 === 0 ? <div className="t4-wrapper" /> : null}
      {count % 97 === 0 ? <div className="t5-wrapper" /> : null}
      {count % 47 === 0 ? <div className="t6-wrapper" /> : null}
      {count % 11 === 0 ? <div className="t7-wrapper" /> : null}
      {count % 3 === 0 ? <div className="t8-wrapper" /> : null}
      {count % 71 === 0 ? <div className="t9-wrapper" /> : null}

      <div className="center-wrapper">
        <div className="center-content">
          <TextType />{" "}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
