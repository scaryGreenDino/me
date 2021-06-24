import { useEffect, useState } from "react";
import "../App.css";
var HomePage = () => {
  const [words, setWords] = useState("")
  const [count, setCount] = useState(0);
  const text = "hey, i'm jordan";
  
  useEffect(() => {
    if (count < text.length) {
        const r = 100 + Math.random() * 200;
      setTimeout(() => {
        setCount(count + 1);
      }, r);
      }

  },[count,text])
  return (
    <div className="center-wrapper">
      <div className="center-content">{text.substring(0,count)}</div>
    </div>
  );
};
export default HomePage;
